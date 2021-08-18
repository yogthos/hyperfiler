"use strict";
/**
 * This file contains the source code for running unit tests on the tracking
 * pixel remover functionality.
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
const resource_1 = require("../../../../../../lib/resource");
const remove_tracking_pixels_1 = require("../../../../../../lib/modifiers/media/images/removers/remove-tracking-pixels");
ava_1.default('removeTrackingPixels() => All tracking pixels are removed from the image '
    + 'cache.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    // Creating a 1x1 transparent PNG pixel
    const pngImage = yield new Jimp(1, 1, 0x00000000);
    const pngBuffer = yield pngImage.getBufferAsync(Jimp.MIME_PNG);
    const pngUrl = 'image.png';
    const pngResource = new resource_1.Resource(pngUrl, null, null, null);
    yield pngResource.update(pngBuffer);
    // Creating a 1x1 transparent GIF pixel
    const gifImage = yield new Jimp(1, 1, 0x00000000);
    const gifBuffer = yield gifImage.getBufferAsync(Jimp.MIME_GIF);
    const gifUrl = 'image.gif';
    const gifResource = new resource_1.Resource(gifUrl, null, null, null);
    yield gifResource.update(gifBuffer);
    // Creating a 1x1 transparent TIFF pixel
    const tiffImage = yield new Jimp(1, 1, 0x00000000);
    const tiffBuffer = yield tiffImage.getBufferAsync(Jimp.MIME_TIFF);
    const tiffUrl = 'image.tiff';
    const tiffResource = new resource_1.Resource(tiffUrl, null, null, null);
    yield tiffResource.update(tiffBuffer);
    // Skipping JPEG, as it does not support transparency
    // Adding all of the images to the cache
    const imageCache = {
        [pngUrl]: pngResource,
        [gifUrl]: gifResource,
        [tiffUrl]: tiffResource,
    };
    yield remove_tracking_pixels_1.removeTrackingPixels(imageCache);
    const testResult = true
        && imageCache[pngUrl].bytes === null
        && imageCache[gifUrl].bytes === null
        && imageCache[tiffUrl].bytes === null;
    t.is(testResult, true);
}));
//# sourceMappingURL=remove-tracking-pixels.js.map