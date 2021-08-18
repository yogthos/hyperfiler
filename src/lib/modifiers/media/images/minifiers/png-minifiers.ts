/**
 * This file contains the source code minifying PNG images. Note that
 * minification in this context includes both lossy and lossless minification
 * and includes conversion to image types with the same features but smaller
 * sizes.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

/* eslint-disable arrow-body-style */

import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import * as childProcess from 'child_process';
import { SpawnSyncReturns } from 'child_process';
import * as genericImageMinifiers from './generic-image-minifiers';
import * as dependencies from '../../../../dependencies';
import { ImageExtension } from '../image-extensions';

/**
 * Creates an optimized PNG from an existing PNG using the Pngquant and
 * Pngcrush libraries.
 *
 * @param bytes a buffer containing a PNG image.
 * @returns a pngquant and pngcrushed optimized PNG image.
 * @dependencies Pngquant 2.12, Pngcrush 1.8.
 */
export function optimizePng(
  bytes: Buffer,
) : Buffer {
  // Getting the path to and creating a new hyperfiler temporary directory if
  // one does not already exist.
  const tempDir: string = path.join(os.tmpdir(), 'hyperfiler');

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // Creating input and output file paths for the temporary file and writing
  // the image file to the temporary directory.
  const tempInputFilePath: string = path.join(tempDir, 'temp.png');

  const tempQuantOutputFilePath: string = path.join(
    tempDir,
    'temp.quant.png',
  );

  const tempQuantCrushedOutputFilePath: string = path.join(
    tempDir,
    'temp.quant.crushed.png',
  );

  fs.writeFileSync(tempInputFilePath, bytes);

  // Calling the Pngquant command to quantize the image file in the temporary
  // directory.
  const pngquantProcess: SpawnSyncReturns<string> = childProcess.spawnSync(
    'pngquant',
    [
      tempInputFilePath,
      '--output', tempQuantOutputFilePath,
      '--speed', '1',
      '--strip',
      '--verbose',
    ],
  );

  // If the quantization was successful, running the Pngcrush process to
  // further optimize the PNG image.
  if (pngquantProcess.status === 0) {
    const pngcrushProcess: SpawnSyncReturns<string> = childProcess.spawnSync(
      'pngcrush',
      [
        '-brute',
        '-v',
        tempQuantOutputFilePath,
        tempQuantCrushedOutputFilePath,
      ],
    );

    // If the Pngcrush process was also successful, reading the file to get
    // the buffer, and then deleting the temporary files and directory.
    if (pngcrushProcess.status === 0) {
      // Getting the optimized PNG buffer.
      const pngquantAndCrushedImageBuffer: Buffer = fs.readFileSync(
        tempQuantCrushedOutputFilePath,
      );

      // Deleting the temporary files and directory.
      fs.rmdirSync(tempDir, { recursive: true });

      return pngquantAndCrushedImageBuffer;
    }
  }

  // If the either process failed, simply delete the temporary files and
  // directory to clean up the resources, and return the original buffer.
  fs.rmdirSync(tempDir, { recursive: true });

  return bytes;
}

/**
 * Creates an optimized PNG from an existing PNG using the Pngquant and
 * Pngcrush libraries. If either of these libraries are not installed on the
 * system, the original PNG buffer will be returned.
 *
 * @param bytes a buffer containing a PNG image.
 * @returns a pngquant and pngcrushed optimized PNG image.
 * @dependencies Pngquant 2.12, Pngcrush 1.8.
 */
async function minifyPngToPng(
  bytes: Buffer,
) : Promise<Buffer> {
  // Checking if Pngquant and Pngcrush are installed on the host system.
  const isPngcrushInstalled: boolean = dependencies.isPngcrushInstalled();
  const isPngquantInstalled: boolean = dependencies.isPngquantInstalled();

  // If Pngquant and Pngcrush are installed, optimize the PNG image using
  // Pngquant and Pngcrush. Else, return the original PNG image buffer.
  if (isPngcrushInstalled === true && isPngquantInstalled === true) {
    const optimizedPngImageBytes: Buffer = optimizePng(bytes);

    return optimizedPngImageBytes;
  }

  return bytes;
}

/**
 * Possibly minifies a PNG image buffer. This function runs through multiple
 * algorithms to attempt to reduce the size of a PNG, including possible
 * conversion of the PNG into different image formats so long as no features
 * of the PNG are lost. If none of the minified images are smaller than the
 * original image buffer, the original buffer is returned.
 *
 * @param bytes a buffer containing an image.
 * @param options.jpegQuality the quality of the JPEG that the image will be
 * converted to.
 * @param options.allowWebp if true, allows the conversion of the PNG to a
 * WEBP image.
 * @param options.webpQuality the quality of the WEBP that the image will be
 * converted to.
 * @returns either the original image buffer or minified image buffer.
 * @dependencies ImageMagick 6, Pngquant 2.12, Pngcrush 1.8
 * @todo add AVIF support.
 * @todo add JXL support.
 */
export async function minifyPng(
  bytes: Buffer,
  jpegQuality: number,
  allowWebp: boolean,
  webpQuality: number,
) : Promise<Buffer> {
  // Creating an array of minified image buffers.
  const minifiedImages: Buffer[] = [];

  // Adding the original image bytes to the minified image array.
  minifiedImages.push(bytes);

  // Creating a minified PNG from the original PNG and adding it to the image
  // array.
  const minifiedPngBytes: Buffer = await minifyPngToPng(bytes);

  minifiedImages.push(minifiedPngBytes);

  // Creating a minified JPEG from the original PNG and adding it to the image
  // array.
  const minifiedJpegBytes: Buffer = await genericImageMinifiers
    .minifyImageToJpeg(
      bytes,
      jpegQuality,
    );

  minifiedImages.push(minifiedJpegBytes);

  // Creating a minified WEBP from the original PNG and adding it to the image
  // array.
  if (allowWebp === true) {
    const minifiedWebpBytes: Buffer = await genericImageMinifiers
      .minifyImageToWebp(
        bytes,
        ImageExtension.PNG,
        webpQuality,
      );

    minifiedImages.push(minifiedWebpBytes);
  }

  // Getting the smallest image buffer and returning it.
  const smallestImage: Buffer = minifiedImages
    .sort((imageBytesA, imageBytesB) => {
      return imageBytesA.length > imageBytesB.length ? 1 : -1;
    })
    .shift();

  return smallestImage;
}
