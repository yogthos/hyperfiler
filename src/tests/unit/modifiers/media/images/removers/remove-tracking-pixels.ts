/**
 * This file contains the source code for running unit tests on the tracking
 * pixel remover functionality.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import test from 'ava';
import * as Jimp from 'jimp';
import { Resource, ResourceCache } from '../../../../../../lib/resource';
import {
  removeTrackingPixels,
} from '../../../../../../lib/modifiers/media/images/removers/remove-tracking-pixels'

test(
  'removeTrackingPixels() => All tracking pixels are removed from the image '
+ 'cache.',
  async (t) => {
    // Creating a 1x1 transparent PNG pixel
    const pngImage: Jimp = await new Jimp(1, 1, 0x00000000);
    const pngBuffer: Buffer = await pngImage.getBufferAsync(Jimp.MIME_PNG);
    const pngUrl: string = 'image.png';
    const pngResource: Resource = new Resource(pngUrl, null, null, null);
    await pngResource.update(pngBuffer);

    // Creating a 1x1 transparent GIF pixel
    const gifImage: Jimp = await new Jimp(1, 1, 0x00000000);
    const gifBuffer: Buffer = await gifImage.getBufferAsync(Jimp.MIME_GIF);
    const gifUrl: string = 'image.gif';
    const gifResource: Resource = new Resource(gifUrl, null, null, null);
    await gifResource.update(gifBuffer);

    // Creating a 1x1 transparent TIFF pixel
    const tiffImage: Jimp = await new Jimp(1, 1, 0x00000000);
    const tiffBuffer: Buffer = await tiffImage.getBufferAsync(Jimp.MIME_TIFF);
    const tiffUrl: string = 'image.tiff';
    const tiffResource: Resource = new Resource(tiffUrl, null, null, null);
    await tiffResource.update(tiffBuffer);

    // Skipping JPEG, as it does not support transparency

    // Adding all of the images to the cache
    const imageCache: ResourceCache = {
      [pngUrl]: pngResource,
      [gifUrl]: gifResource,
      [tiffUrl]: tiffResource,
    };

    await removeTrackingPixels(imageCache);

    const testResult: boolean = true
      && imageCache[pngUrl].bytes === null
      && imageCache[gifUrl].bytes === null
      && imageCache[tiffUrl].bytes === null;

    t.is(testResult, true);
  },
);
