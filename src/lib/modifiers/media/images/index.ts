/**
 * This file contains the source code importing and re-exporting the image
 * modifier code.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import {
  minifyImages,
} from './minifiers/image-minifier';
import {
  removeTrackingPixels,
} from './removers/remove-tracking-pixels';
import {
  grayscaleImages,
} from './modifiers/image-grayscaler';
import {
  convertImagesToSupportedImageFormats,
} from './modifiers/supported-image-type-converter';

export {
  minifyImages,
  removeTrackingPixels,
  grayscaleImages,
  convertImagesToSupportedImageFormats,
};
