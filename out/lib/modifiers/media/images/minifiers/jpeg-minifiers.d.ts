/**
 * This file contains the source code minifying JPEG images. Note that
 * minification in this context includes both lossy and lossless minification
 * and includes conversion to image types with the same features but smaller
 * sizes.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
/// <reference types="node" />
/**
 * Possibly minifies a JPEG image buffer. This function runs through multiple
 * algorithms to attempt to reduce the size of a JPEG, including possible
 * conversion of the JPEG into different image formats so long as no features
 * of the JPEG are lost. If none of the minified images are smaller than the
 * original image buffer, the original buffer is returned.
 *
 * @param bytes a buffer containing an image.
 * @param options.jpegQuality the quality of the JPEG that the image will be
 * converted to.
 * @param options.allowWebp if true, allows the conversion of the JPEG to a
 * WEBP image.
 * @param options.webpQuality the quality of the WEBP that the image will be
 * converted to.
 * @returns either the original image buffer or minified JPEG buffer.
 * @dependencies ImageMagick 6.
 * @todo add AVIF support.
 * @todo add JXL support.
 */
export declare function minifyJpeg(bytes: Buffer, jpegQuality: number, allowWebp: boolean, webpQuality: number): Promise<Buffer>;
//# sourceMappingURL=jpeg-minifiers.d.ts.map