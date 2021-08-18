"use strict";
/**
 * This file contains the source code for running unit tests on the PNG image
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
const logger_1 = require("../../../../../../lib/logger");
const utilities = require("../../../../../../lib/utilities");
const dependencies = require("../../../../../../lib/dependencies");
const pngMinifiers = require("../../../../../../lib/modifiers/media/images/minifiers/png-minifiers");
const base64_coffee_png_1 = require("../test-images/base64-coffee-png");
ava_1.default('optimizePng() => PNG correctly optimized into a minified PNG.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Checking if Pngquant and Pngcrush are installed.
    const isPngquantInstalled = dependencies.isPngquantInstalled();
    const isPngcrushInstalled = dependencies.isPngcrushInstalled();
    // If the Pngquant or Pngcrush dependencies are not installed, auto
    // passing the test with a warning.
    if (isPngquantInstalled === false || isPngcrushInstalled === false) {
        logger_1.logger.log('warn', 'Pngcrush or Pngquant not installed, skipping this test.', { depth: 1 });
        t.pass();
    }
    // Getting a PNG buffer from the base64 encoded image, and optimizing the
    // PNG.
    const pngImageBuffer = Buffer.from(base64_coffee_png_1.default, 'base64');
    const optimizedPngBuffer = yield pngMinifiers.optimizePng(pngImageBuffer);
    // Checking that the image generated is a PNG image.
    const optimizedPngMimeType = yield utilities.determineMimeType('image.png', optimizedPngBuffer);
    const isPngImage = optimizedPngMimeType === 'image/png';
    // Checking if the optimized PNG image is smaller than the original PNG
    // image.
    const pngBufferLength = pngImageBuffer.length;
    const optimizedPngBufferLength = optimizedPngBuffer.length;
    const isOptimizedPngSmaller = optimizedPngBufferLength < pngBufferLength;
    // Running the tests.
    const testResult = true
        && isPngImage
        && isOptimizedPngSmaller;
    t.is(testResult, true);
}));
//# sourceMappingURL=png-minifiers.js.map