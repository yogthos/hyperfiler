/**
 * This file contains the source code for running unit tests on the GIF image
 * minifier functionality.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import test from 'ava';
import * as utilities from '../../../../../../lib/utilities';
import * as gifMinifiers from '../../../../../../lib/modifiers/media/images/minifiers/gif-minifiers';
import base64CoffeeGif from '../test-images/base64-coffee-gif';
import base64AnimationGif from '../test-images/base64-animation-gif';
import base64TransparencyGif from '../test-images/base64-transparency-gif';

test(
  'gifHasMultipleFrames() => GIF correctly identified as having multiple '
+ 'frames.',
  async (t) => {
    // Getting the image buffer from the base64 encoded GIF image.
    const gifBuffer: Buffer = Buffer.from(base64AnimationGif, 'base64');

    // Checking if the function correctly detects multiple frames in this GIF.
    const hasMultipleFrames: boolean = await gifMinifiers
      .gifHasMultipleFrames(gifBuffer);

    // Running the test.
    t.is(hasMultipleFrames === true, true);
  },
);

test(
  'gifHasTransparency() => GIF correctly identified as having transparency.',
  async (t) => {
    // Getting the image buffer from the base64 encoded GIF image.
    const gifBuffer: Buffer = Buffer.from(base64TransparencyGif, 'base64');

    // Checking if the function correctly detects transparency in this GIF.
    const hasTransparency: boolean = await gifMinifiers
      .gifHasTransparency(gifBuffer);

    // Running the test.
    t.is(hasTransparency === true, true);
  },
);

test(
  'minifyGifToGif() => GIF correctly converted into a minified GIF.',
  async (t) => {
    // Getting the image buffer from the base64 encoded GIF image.
    const gifBuffer: Buffer = Buffer.from(base64CoffeeGif, 'base64');

    // Getting a minified GIF buffer from the GIF.
    const minifiedGifBuffer: Buffer = await gifMinifiers
      .minifyGifToGif(gifBuffer);

    // Checking if the MIME Type of the minified GIF is a GIF.
    const mimeType: string = await utilities.determineMimeType(
      'image.gif',
      minifiedGifBuffer,
    );

    const isGif: boolean = mimeType === 'image/gif';

    // Running the test.
    t.is(isGif === true, true);
  },
);

test(
  'minifyGifToJpeg() => GIF correctly converted into a minified JPEG.',
  async (t) => {
    // Getting the image buffer from the base64 encoded GIF image.
    const gifBuffer: Buffer = Buffer.from(base64CoffeeGif, 'base64');

    // Getting a minified JPEG buffer from the GIF.
    const minifiedJpegBuffer: Buffer = await gifMinifiers.minifyGifToJpeg(
      gifBuffer,
      10,
    );

    // Checking if the MIME Type of the minified JPEG is a JPEG.
    const mimeType: string = await utilities.determineMimeType(
      'image.jpeg',
      minifiedJpegBuffer,
    );

    const isJpeg: boolean = mimeType === 'image/jpeg';

    // Running the test.
    t.is(isJpeg === true, true);
  },
);
