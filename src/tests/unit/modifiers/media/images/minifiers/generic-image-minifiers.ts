/**
 * This file contains the source code for running unit tests on the generic
 * image minifier functionality.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import test from 'ava';
import * as Jimp from 'jimp';
import { logger } from '../../../../../../lib/logger';
import * as dependencies from '../../../../../../lib/dependencies';
import * as utilities from '../../../../../../lib/utilities';
import * as genericImageMinifiers from '../../../../../../lib/modifiers/media/images/minifiers/generic-image-minifiers';
import {
  ImageExtension,
} from '../../../../../../lib/modifiers/media/images/image-extensions';
import base64CoffeePng from '../test-images/base64-coffee-png';

test(
  'minifyImageToJpeg() => PNG image is converted to a reduced quality JPEG.',
  async (t) => {
    // Getting a PNG buffer from the base64 image, and minifying it to a JPEG.
    const pngImageBuffer: Buffer = Buffer.from(base64CoffeePng, 'base64');
    const jpegImageBuffer: Buffer = await genericImageMinifiers
      .minifyImageToJpeg(pngImageBuffer, 10);

    // Checking that the image generated is a JPEG image.
    const jpegMimeType: string = await utilities.determineMimeType(
      'test.jpeg',
      jpegImageBuffer,
    );

    const isJpegImage: boolean = jpegMimeType === 'image/jpeg';

    // Checking if the minified JPEG image is smaller than the PNG image.
    const jpegBufferLength: number = jpegImageBuffer.length;
    const pngBufferLength: number = pngImageBuffer.length;
    const isJpegSmallerThanPng: boolean = jpegBufferLength < pngBufferLength;

    // Running the tests.
    const testResult: boolean = true
      && isJpegImage
      && isJpegSmallerThanPng;

    t.is(testResult, true);
  },
);

test(
  'minifyImageToWebp() => PNG image is converted to a reduced quality WEBP.',
  async (t) => {
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

    // Getting a PNG buffer from the image, and minifying it to a WEBP.
    const pngImageBuffer: Buffer = await image.getBufferAsync(Jimp.MIME_PNG);
    const webpImageBuffer: Buffer = await genericImageMinifiers
      .minifyImageToWebp(
        pngImageBuffer,
        ImageExtension.PNG,
        10,
      );

    // Checking that the image generated is a WEBP image.
    const webpMimeType: string = await utilities.determineMimeType(
      'test.webp',
      webpImageBuffer,
    );

    const isWebpImage: boolean = webpMimeType === 'image/webp';

    // Checking if the minified WEBP image is smaller than the PNG image.
    const webpBufferLength: number = webpImageBuffer.length;
    const pngBufferLength: number = pngImageBuffer.length;
    const isWebpSmallerThanPng: boolean = webpBufferLength < pngBufferLength;

    // Running the tests.
    const testResult: boolean = true
      && isWebpImage
      && isWebpSmallerThanPng;

    t.is(testResult, true);
  },
);
