/**
 * This file contains the source code minifying SVG images.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
/// <reference types="node" />
/**
 * Minifies all inline `<svg>` elements throughout the document.
 *
 * @param document the document that will be modified in place.
 */
export declare function minifyInlineSvgs(document: Document): Promise<void>;
/**
 * Minifies an SVG image and returns the minified SVG buffer.
 *
 * @param bytes a buffer containing an SVG image.
 */
export declare function minifySvg(bytes: Buffer): Buffer;
//# sourceMappingURL=svg-minifiers.d.ts.map