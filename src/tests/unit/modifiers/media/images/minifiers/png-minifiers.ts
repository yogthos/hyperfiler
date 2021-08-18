/**
 * This file contains the source code for running unit tests on the PNG image
 * minifier functionality.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import test from 'ava';
import { logger } from '../../../../../../lib/logger';
import * as utilities from '../../../../../../lib/utilities';
import * as dependencies from '../../../../../../lib/dependencies';
import * as pngMinifiers from '../../../../../../lib/modifiers/media/images/minifiers/png-minifiers';
import base64CoffeePng from '../test-images/base64-coffee-png';

test(
  'optimizePng() => PNG correctly optimized into a minified PNG.',
  async (t) => {
    // Checking if Pngquant and Pngcrush are installed.
    const isPngquantInstalled: boolean = dependencies.isPngquantInstalled();
    const isPngcrushInstalled: boolean = dependencies.isPngcrushInstalled();

    // If the Pngquant or Pngcrush dependencies are not installed, auto
    // passing the test with a warning.
    if (isPngquantInstalled === false || isPngcrushInstalled === false) {
      logger.log(
        'warn',
        'Pngcrush or Pngquant not installed, skipping this test.',
        { depth: 1 },
      );

      t.pass();
    }

    // Getting a PNG buffer from the base64 encoded image, and optimizing the
    // PNG.
    const pngImageBuffer: Buffer = Buffer.from(base64CoffeePng, 'base64');
    const optimizedPngBuffer: Buffer = await pngMinifiers.optimizePng(
      pngImageBuffer,
    );

    // Checking that the image generated is a PNG image.
    const optimizedPngMimeType: string = await utilities.determineMimeType(
      'image.png',
      optimizedPngBuffer,
    );

    const isPngImage: boolean = optimizedPngMimeType === 'image/png';

    // Checking if the optimized PNG image is smaller than the original PNG
    // image.
    const pngBufferLength: number = pngImageBuffer.length;
    const optimizedPngBufferLength: number = optimizedPngBuffer.length;
    const isOptimizedPngSmaller: boolean = optimizedPngBufferLength < pngBufferLength;

    // Running the tests.
    const testResult: boolean = true
      && isPngImage
      && isOptimizedPngSmaller;

    t.is(testResult, true);
  },
);
