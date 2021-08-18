"use strict";
/**
 * This file contains the source code minifying TIFF images. Note that
 * minification in this context includes both lossy and lossless minification
 * and includes conversion to image types with the same features but smaller
 * sizes.
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
exports.minifyTiff = void 0;
/* eslint-disable arrow-body-style */
const genericImageMinifiers = require("./generic-image-minifiers");
const image_extensions_1 = require("../image-extensions");
/**
 * Possibly minifies a TIFF image buffer. This function runs through multiple
 * algorithms to attempt to reduce the size of a TIFF, including possible
 * conversion of the TIFF into different image formats so long as no features
 * of the TIFF are lost. If none of the minified images are smaller than the
 * original image buffer, the original buffer is returned.
 *
 * @param bytes a buffer containing an image.
 * @param options.jpegQuality the quality of the JPEG that the image will be
 * converted to.
 * @param options.allowWebp if true, allows the conversion of the TIFF to a
 * WEBP image.
 * @param options.webpQuality the quality of the WEBP that the image will be
 * converted to.
 * @returns either the original image buffer or minified image buffer.
 * @dependencies ImageMagick 6.
 * @todo add AVIF support.
 * @todo add JXL support.
 */
function minifyTiff(bytes, jpegQuality, allowWebp, webpQuality) {
    return __awaiter(this, void 0, void 0, function* () {
        // Creating an array of minified image buffers.
        const minifiedImages = [];
        // Adding the original image bytes to the minified image array.
        minifiedImages.push(bytes);
        // Creating a minified JPEG from the original TIFF and adding it to the image
        // array.
        const minifiedJpegBytes = yield genericImageMinifiers
            .minifyImageToJpeg(bytes, jpegQuality);
        minifiedImages.push(minifiedJpegBytes);
        // Creating a minified WEBP from the original PNG and adding it to the image
        // array.
        if (allowWebp === true) {
            const minifiedWebpBytes = yield genericImageMinifiers
                .minifyImageToWebp(bytes, image_extensions_1.ImageExtension.TIFF, webpQuality);
            minifiedImages.push(minifiedWebpBytes);
        }
        // Getting the smallest image buffer and returning it.
        const smallestImage = minifiedImages
            .sort((imageBytesA, imageBytesB) => {
            return imageBytesA.length > imageBytesB.length ? 1 : -1;
        })
            .shift();
        return smallestImage;
    });
}
exports.minifyTiff = minifyTiff;
//# sourceMappingURL=tiff-minifiers.js.map