"use strict";
/**
 * This file contains the source code for running unit tests on the GIF image
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
const gifMinifiers = require("../../../../../../lib/modifiers/media/images/minifiers/gif-minifiers");
const base64_coffee_gif_1 = require("../test-images/base64-coffee-gif");
const base64_animation_gif_1 = require("../test-images/base64-animation-gif");
const base64_transparency_gif_1 = require("../test-images/base64-transparency-gif");
ava_1.default('gifHasMultipleFrames() => GIF correctly identified as having multiple '
    + 'frames.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting the image buffer from the base64 encoded GIF image.
    const gifBuffer = Buffer.from(base64_animation_gif_1.default, 'base64');
    // Checking if the function correctly detects multiple frames in this GIF.
    const hasMultipleFrames = yield gifMinifiers
        .gifHasMultipleFrames(gifBuffer);
    // Running the test.
    t.is(hasMultipleFrames === true, true);
}));
ava_1.default('gifHasTransparency() => GIF correctly identified as having transparency.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting the image buffer from the base64 encoded GIF image.
    const gifBuffer = Buffer.from(base64_transparency_gif_1.default, 'base64');
    // Checking if the function correctly detects transparency in this GIF.
    const hasTransparency = yield gifMinifiers
        .gifHasTransparency(gifBuffer);
    // Running the test.
    t.is(hasTransparency === true, true);
}));
ava_1.default('minifyGifToGif() => GIF correctly converted into a minified GIF.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting the image buffer from the base64 encoded GIF image.
    const gifBuffer = Buffer.from(base64_coffee_gif_1.default, 'base64');
    // Getting a minified GIF buffer from the GIF.
    const minifiedGifBuffer = yield gifMinifiers
        .minifyGifToGif(gifBuffer);
    // Checking if the MIME Type of the minified GIF is a GIF.
    const mimeType = yield utilities.determineMimeType('image.gif', minifiedGifBuffer);
    const isGif = mimeType === 'image/gif';
    // Running the test.
    t.is(isGif === true, true);
}));
ava_1.default('minifyGifToJpeg() => GIF correctly converted into a minified JPEG.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting the image buffer from the base64 encoded GIF image.
    const gifBuffer = Buffer.from(base64_coffee_gif_1.default, 'base64');
    // Getting a minified JPEG buffer from the GIF.
    const minifiedJpegBuffer = yield gifMinifiers.minifyGifToJpeg(gifBuffer, 10);
    // Checking if the MIME Type of the minified JPEG is a JPEG.
    const mimeType = yield utilities.determineMimeType('image.jpeg', minifiedJpegBuffer);
    const isJpeg = mimeType === 'image/jpeg';
    // Running the test.
    t.is(isJpeg === true, true);
}));
//# sourceMappingURL=gif-minifiers.js.map