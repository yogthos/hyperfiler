"use strict";
/**
 * This file contains the source code for running unit tests on the generic
 * image minifier functionality.
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
const Jimp = require("jimp");
const logger_1 = require("../../../../../../lib/logger");
const dependencies = require("../../../../../../lib/dependencies");
const utilities = require("../../../../../../lib/utilities");
const genericImageMinifiers = require("../../../../../../lib/modifiers/media/images/minifiers/generic-image-minifiers");
const image_extensions_1 = require("../../../../../../lib/modifiers/media/images/image-extensions");
const base64_coffee_png_1 = require("../test-images/base64-coffee-png");
ava_1.default('minifyImageToJpeg() => PNG image is converted to a reduced quality JPEG.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Getting a PNG buffer from the base64 image, and minifying it to a JPEG.
    const pngImageBuffer = Buffer.from(base64_coffee_png_1.default, 'base64');
    const jpegImageBuffer = yield genericImageMinifiers
        .minifyImageToJpeg(pngImageBuffer, 10);
    // Checking that the image generated is a JPEG image.
    const jpegMimeType = yield utilities.determineMimeType('test.jpeg', jpegImageBuffer);
    const isJpegImage = jpegMimeType === 'image/jpeg';
    // Checking if the minified JPEG image is smaller than the PNG image.
    const jpegBufferLength = jpegImageBuffer.length;
    const pngBufferLength = pngImageBuffer.length;
    const isJpegSmallerThanPng = jpegBufferLength < pngBufferLength;
    // Running the tests.
    const testResult = true
        && isJpegImage
        && isJpegSmallerThanPng;
    t.is(testResult, true);
}));
ava_1.default('minifyImageToWebp() => PNG image is converted to a reduced quality WEBP.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    if (!dependencies.isImageMagickInstalled()) {
        logger_1.logger.log('warn', 'ImageMagick not installed, skipping this test.', { depth: 1 });
        t.pass();
    }
    // Creating a 256x256 black square image using Jimp.
    const image = yield new Jimp(256, 256, 0x000000ff);
    // Getting a PNG buffer from the image, and minifying it to a WEBP.
    const pngImageBuffer = yield image.getBufferAsync(Jimp.MIME_PNG);
    const webpImageBuffer = yield genericImageMinifiers
        .minifyImageToWebp(pngImageBuffer, image_extensions_1.ImageExtension.PNG, 10);
    // Checking that the image generated is a WEBP image.
    const webpMimeType = yield utilities.determineMimeType('test.webp', webpImageBuffer);
    const isWebpImage = webpMimeType === 'image/webp';
    // Checking if the minified WEBP image is smaller than the PNG image.
    const webpBufferLength = webpImageBuffer.length;
    const pngBufferLength = pngImageBuffer.length;
    const isWebpSmallerThanPng = webpBufferLength < pngBufferLength;
    // Running the tests.
    const testResult = true
        && isWebpImage
        && isWebpSmallerThanPng;
    t.is(testResult, true);
}));
//# sourceMappingURL=generic-image-minifiers.js.map