"use strict";
/**
 * This file contains the source code for running unit tests on the SVG image
 * minifier functionality.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utilities = require("../../../../../../lib/utilities");
const svgMinifiers = require("../../../../../../lib/modifiers/media/images/minifiers/svg-minifiers");
ava_1.default('optimizeSvg() => SVG correctly optimized into a minified SVG.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting an SVG and an SVG buffer, and optimizing the SVG.
    const svgImage = `
      <svg
        width="256"
        height="256">
        <rect
          width="256"
          height="256"
          style="fill:#000000;" />
      </svg>
    `;
    const svgImageBuffer = Buffer.from(svgImage);
    const optimizedSvgBuffer = yield svgMinifiers.minifySvg(svgImageBuffer);
    // Checking that the image generated is an SVG image.
    const optimizedSvgMimeType = yield utilities.determineMimeType('test.svg', optimizedSvgBuffer);
    const isSvgImage = optimizedSvgMimeType === 'image/svg+xml';
    // Checking if the optimized SVG image is smaller than the original SVG
    // image.
    const svgBufferLength = svgImageBuffer.length;
    const optimizedSvgBufferLength = optimizedSvgBuffer.length;
    const isOptimizedSvgSmaller = optimizedSvgBufferLength < svgBufferLength;
    // Running the tests.
    const testResult = true
        && isSvgImage
        && isOptimizedSvgSmaller;
    t.is(testResult, true);
}));
//# sourceMappingURL=svg-minifiers.js.map