/**
 * This file contains the source code minifying WEBP images. Note that
 * minification in this context includes both lossy and lossless minification
 * and includes conversion to image types with the same features but smaller
 * sizes.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
/// <reference types="node" />
/**
 * Possibly minifies a WEBP image buffer. This function runs through multiple
 * algorithms to attempt to reduce the size of a WEBP, including possible
 * conversion of the WEBP into different image formats so long as no features
 * of the WEBP are lost. If none of the minified images are smaller than the
 * original image buffer, the original buffer is returned.
 *
 * @param bytes a buffer containing an image.
 * @param options.jpegQuality the quality of the JPEG that the image will be
 * converted to.
 * @param options.allowWebp if true, allows the conversion of the WEBP to a
 * WEBP image.
 * @param options.webpQuality the quality of the WEBP that the image will be
 * converted to.
 * @returns either the original image buffer or minified image buffer.
 * @dependencies ImageMagick 6.
 * @todo add AVIF support.
 * @todo add JXL support.
 */
export declare function minifyWebp(bytes: Buffer, jpegQuality: number, allowWebp: boolean, webpQuality: number): Promise<Buffer>;
//# sourceMappingURL=webp-minifiers.d.ts.map