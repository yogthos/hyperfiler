/**
 * This file contains the source code for running unit tests on the SVG image
 * minifier functionality.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import test from 'ava';
import * as utilities from '../../../../../../lib/utilities';
import * as svgMinifiers from '../../../../../../lib/modifiers/media/images/minifiers/svg-minifiers';

test(
  'optimizeSvg() => SVG correctly optimized into a minified SVG.',
  async (t) => {
    // Getting an SVG and an SVG buffer, and optimizing the SVG.
    const svgImage: string = `
      <svg
        width="256"
        height="256">
        <rect
          width="256"
          height="256"
          style="fill:#000000;" />
      </svg>
    `;

    const svgImageBuffer: Buffer = Buffer.from(svgImage);
    const optimizedSvgBuffer: Buffer = await svgMinifiers.minifySvg(
      svgImageBuffer,
    );

    // Checking that the image generated is an SVG image.
    const optimizedSvgMimeType: string = await utilities.determineMimeType(
      'test.svg',
      optimizedSvgBuffer,
    );

    const isSvgImage: boolean = optimizedSvgMimeType === 'image/svg+xml';

    // Checking if the optimized SVG image is smaller than the original SVG
    // image.
    const svgBufferLength: number = svgImageBuffer.length;
    const optimizedSvgBufferLength: number = optimizedSvgBuffer.length;
    const isOptimizedSvgSmaller: boolean = optimizedSvgBufferLength < svgBufferLength;

    // Running the tests.
    const testResult: boolean = true
      && isSvgImage
      && isOptimizedSvgSmaller;

    t.is(testResult, true);
  },
);
