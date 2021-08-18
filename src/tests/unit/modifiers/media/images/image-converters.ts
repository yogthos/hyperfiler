/**
 * This file contains the source code for running unit tests on the image
 * converter functionality.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import test from 'ava';
import * as Jimp from 'jimp';
import { logger } from '../../../../../lib/logger';
import * as utilities from '../../../../../lib/utilities';
import * as dependencies from '../../../../../lib/dependencies';
import * as imageConverter from '../../../../../lib/modifiers/media/images/image-converter';
import {
  ImageExtension,
} from '../../../../../lib/modifiers/media/images/image-extensions';

test(
  'convertImage() => PNG image is converted to JPEG.',
  async (t) => {
    // If the ImageMagick dependency is not installed, auto passing the test
    // with a warning.
    if (!dependencies.isImageMagickInstalled()) {
      logger.log(
        'warn',
        'ImageMagick not installed, skipping this test.',
        { depth: 1 },
      );

      t.pass();
    }

    // Creating a 256x256 black square image using Jimp.
    const image: Jimp = await new Jimp(256, 256, 0x000000ff);

    // Getting a PNG buffer from the image, and converting it to a JPEG.
    const pngImageBuffer: Buffer = await image.getBufferAsync(Jimp.MIME_PNG);
    const jpegImageBuffer: Buffer = imageConverter.convertImage(
      pngImageBuffer,
      10,
      ImageExtension.PNG,
      ImageExtension.JPEG,
    );

    // Checking that the converted image is a JPEG image.
    const jpegMimeType: string = await utilities.determineMimeType(
      'test.jpeg',
      jpegImageBuffer,
    );

    const isJpegImage: boolean = jpegMimeType === 'image/jpeg';

    // Running the tests.
    t.is(isJpegImage, true);
  },
);

test(
  'convertImage() => PNG image is converted to GIF.',
  async (t) => {
    // If the ImageMagick dependency is not installed, auto passing the test
    // with a warning.
    if (!dependencies.isImageMagickInstalled()) {
      logger.log(
        'warn',
        'ImageMagick not installed, skipping this test.',
        { depth: 1 },
      );

      t.pass();
    }

    // Creating a 256x256 black square image using Jimp.
    const image: Jimp = await new Jimp(256, 256, 0x000000ff);

    // Getting a PNG buffer from the image, and converting it to a GIF.
    const pngImageBuffer: Buffer = await image.getBufferAsync(Jimp.MIME_PNG);
    const gifImageBuffer: Buffer = imageConverter.convertImage(
      pngImageBuffer,
      10,
      ImageExtension.PNG,
      ImageExtension.GIF,
    );

    // Checking that the converted image is a GIF image.
    const gifMimeType: string = await utilities.determineMimeType(
      'test.gif',
      gifImageBuffer,
    );

    const isGifImage: boolean = gifMimeType === 'image/gif';

    // Running the tests.
    t.is(isGifImage, true);
  },
);

test(
  'convertImage() => PNG image is converted to WEBP.',
  async (t) => {
    // If the ImageMagick dependency is not installed, auto passing the test
    // with a warning.
    if (!dependencies.isImageMagickInstalled()) {
      logger.log(
        'warn',
        'ImageMagick not installed, skipping this test.',
        { depth: 1 },
      );

      t.pass();
    }

    // Creating a 256x256 black square image using Jimp.
    const image: Jimp = await new Jimp(256, 256, 0x000000ff);

    // Getting a PNG buffer from the image, and converting it to a WEBP.
    const pngImageBuffer: Buffer = await image.getBufferAsync(Jimp.MIME_PNG);
    const webpImageBuffer: Buffer = imageConverter.convertImage(
      pngImageBuffer,
      10,
      ImageExtension.PNG,
      ImageExtension.WEBP,
    );

    // Checking that the converted image is a WEBP image.
    const webpMimeType: string = await utilities.determineMimeType(
      'test.webp',
      webpImageBuffer,
    );

    const isWebpImage: boolean = webpMimeType === 'image/webp';

    // Running the tests.
    t.is(isWebpImage, true);
  },
);
