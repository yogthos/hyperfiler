/**
 * This file contains the source code for converting images from one image
 * format to a different image format.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import * as os from 'os';
import * as fs from 'fs';
import * as path from 'path';
import * as childProcess from 'child_process';
import { SpawnSyncReturns } from 'child_process';
import { ImageExtension } from './image-extensions';

/**
 * Converts an image from one image type to another image type using
 * ImageMagick. All image types supported by ImageMagick are able to be
 * converted, including the following image types:
 *
 * * PNG
 * * JPEG
 * * GIF
 * * TIFF
 * * WEBP
 * * SVG
 *
 * @param bytes a buffer containing an image.
 * @param quality the quality of converted image if applicable.
 * @param inputExtension the extension of the input file image (the image type
 * that will be converted from).
 * @param outputExtension the extension of the output file image (the image type
 * that will be converted to).
 * @returns a buffer of the converted image.
 * @dependencies ImageMagick.
 */
export function convertImage(
  bytes: Buffer,
  quality: number,
  inputExtension: ImageExtension,
  outputExtension: ImageExtension,
) : Buffer {
  // Getting the path to and creating a new hyperfiler temporary directory if
  // one does not already exist.
  const tempDir: string = path.join(os.tmpdir(), 'hyperfiler');

  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir);
  }

  // Creating input and output file paths for the temporary file and writing
  // the image file to the temporary directory.
  const tempInputFilePath: string = path.join(tempDir, `temp.${inputExtension}`);
  const tempOutputFilePath: string = path.join(tempDir, `temp.${outputExtension}`);

  fs.writeFileSync(tempInputFilePath, bytes);

  // Calling the ImageMagick command to convert the image file in the temporary
  // directory to a different format.
  const imageMagickProcess: SpawnSyncReturns<string> = childProcess.spawnSync(
    'convert',
    [
      '-quality',
      quality.toString(),
      tempInputFilePath,
      tempOutputFilePath,
    ],
  );

  // If the conversion was successful, reading the file to get the buffer, and
  // then deleting the temporary files and directory.
  if (imageMagickProcess.status === 0) {
    // Getting the converted image buffer.
    const convertedImageBuffer: Buffer = fs.readFileSync(tempOutputFilePath);

    // Deleting the temporary files and directory.
    fs.rmdirSync(tempDir, { recursive: true });

    return convertedImageBuffer;
  }

  // If the process failed, simply delete the temporary files and directory to
  // clean up the resources, and return the original buffer.
  fs.rmdirSync(tempDir, { recursive: true });

  return bytes;
}
