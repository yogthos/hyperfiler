"use strict";
/**
 * This file contains the source code for running unit tests on the image
 * converter functionality.
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
const logger_1 = require("../../../../../lib/logger");
const utilities = require("../../../../../lib/utilities");
const dependencies = require("../../../../../lib/dependencies");
const imageConverter = require("../../../../../lib/modifiers/media/images/image-converter");
const image_extensions_1 = require("../../../../../lib/modifiers/media/images/image-extensions");
ava_1.default('convertImage() => PNG image is converted to JPEG.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // If the ImageMagick dependency is not installed, auto passing the test
    // with a warning.
    if (!dependencies.isImageMagickInstalled()) {
        logger_1.logger.log('warn', 'ImageMagick not installed, skipping this test.', { depth: 1 });
        t.pass();
    }
    // Creating a 256x256 black square image using Jimp.
    const image = yield new Jimp(256, 256, 0x000000ff);
    // Getting a PNG buffer from the image, and converting it to a JPEG.
    const pngImageBuffer = yield image.getBufferAsync(Jimp.MIME_PNG);
    const jpegImageBuffer = imageConverter.convertImage(pngImageBuffer, 10, image_extensions_1.ImageExtension.PNG, image_extensions_1.ImageExtension.JPEG);
    // Checking that the converted image is a JPEG image.
    const jpegMimeType = yield utilities.determineMimeType('test.jpeg', jpegImageBuffer);
    const isJpegImage = jpegMimeType === 'image/jpeg';
    // Running the tests.
    t.is(isJpegImage, true);
}));
ava_1.default('convertImage() => PNG image is converted to GIF.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // If the ImageMagick dependency is not installed, auto passing the test
    // with a warning.
    if (!dependencies.isImageMagickInstalled()) {
        logger_1.logger.log('warn', 'ImageMagick not installed, skipping this test.', { depth: 1 });
        t.pass();
    }
    // Creating a 256x256 black square image using Jimp.
    const image = yield new Jimp(256, 256, 0x000000ff);
    // Getting a PNG buffer from the image, and converting it to a GIF.
    const pngImageBuffer = yield image.getBufferAsync(Jimp.MIME_PNG);
    const gifImageBuffer = imageConverter.convertImage(pngImageBuffer, 10, image_extensions_1.ImageExtension.PNG, image_extensions_1.ImageExtension.GIF);
    // Checking that the converted image is a GIF image.
    const gifMimeType = yield utilities.determineMimeType('test.gif', gifImageBuffer);
    const isGifImage = gifMimeType === 'image/gif';
    // Running the tests.
    t.is(isGifImage, true);
}));
ava_1.default('convertImage() => PNG image is converted to WEBP.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // If the ImageMagick dependency is not installed, auto passing the test
    // with a warning.
    if (!dependencies.isImageMagickInstalled()) {
        logger_1.logger.log('warn', 'ImageMagick not installed, skipping this test.', { depth: 1 });
        t.pass();
    }
    // Creating a 256x256 black square image using Jimp.
    const image = yield new Jimp(256, 256, 0x000000ff);
    // Getting a PNG buffer from the image, and converting it to a WEBP.
    const pngImageBuffer = yield image.getBufferAsync(Jimp.MIME_PNG);
    const webpImageBuffer = imageConverter.convertImage(pngImageBuffer, 10, image_extensions_1.ImageExtension.PNG, image_extensions_1.ImageExtension.WEBP);
    // Checking that the converted image is a WEBP image.
    const webpMimeType = yield utilities.determineMimeType('test.webp', webpImageBuffer);
    const isWebpImage = webpMimeType === 'image/webp';
    // Running the tests.
    t.is(isWebpImage, true);
}));
//# sourceMappingURL=image-converters.js.map