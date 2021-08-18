/**
 * This file contains the source code for the all of the base wrapper plugins
 * available by default in HyperFiler, as well as plugin builders for building
 * pipelines of plugins at various stages of the hyper filing process.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import { HyperFiler } from './hyperfiler';
import { HyperFilerPlugin } from './options/hyperfiler-options';
import { ResourceCache, ResourceType } from './resource';
import * as documentModifiers from './modifiers/document/index';
import * as imageModifiers from './modifiers/media/images/index';
import * as audioModifiers from './modifiers/media/audio/index';
import * as videoModifiers from './modifiers/media/video/index';
import * as fontModifiers from './modifiers/media/fonts/index';
import * as generalMediaModifiers from './modifiers/media/general/index';
import * as injectors from './injectors/index';

/**
 * A plugin wrapper for the `removeStylesTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeStylesTagsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeStylesTags(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeAlternativeStylesTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeAlternativeStylesTagsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeAlternativeStylesTags(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeInlineStyles` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeInlineStylesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeInlineStyles(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeStyles` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeStylesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeStyles(hyperFiler.document);
}

/**
 * A plugin wrapper for the `addStyleCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function addStyleCSPPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.addStyleCSP(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeScriptTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeScriptTagsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeScriptTags(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeNoscriptTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeNoscriptTagsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeNoscriptTags(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeInlineScripts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeInlineScriptsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeInlineScripts(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeHrefScripts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeHrefScriptsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeHrefScripts(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeScripts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeScriptsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeScripts(hyperFiler.document);
}

/**
 * A plugin wrapper for the `addScriptCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function addScriptCSPPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.addScriptCSP(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeImageSrcs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeImageSrcsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeImageSrcs(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeImageSrcsets` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeImageSrcsetsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeImageSrcsets(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeImageAlts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeImageAltsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeImageAlts(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeImageAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeImageAttributesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeImageAttributes(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeCssImages` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeCssImagesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeCssImages(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeImages` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeImagesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeImages(hyperFiler.document);
}

/**
 * A plugin wrapper for the `addImageCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function addImageCSPPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.addImageCSP(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeFrames` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeFramesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeFrames(hyperFiler.document);
}

/**
 * A plugin wrapper for the `addFrameCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function addFrameCSPPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.addFrameCSP(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeVideoSrcs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeVideoSrcsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeVideoSrcs(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeVideos` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeVideosPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeVideos(hyperFiler.document);
}

/**
 * A plugin wrapper for the `addVideoCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function addVideoCSPPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.addVideoCSP(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeAudioSrcs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeAudioSrcsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeAudioSrcs(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeAudio` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeAudioPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeAudio(hyperFiler.document);
}

/**
 * A plugin wrapper for the `addAudioCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function addAudioCSPPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.addAudioCSP(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeFonts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeFontsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeFonts(hyperFiler.document);
}

/**
 * A plugin wrapper for the `addFontCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function addFontCSPPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.addFontCSP(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeCursors` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeCursorsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeCursors(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeFavicons` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeFaviconsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeFavicons(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeCanvas` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeCanvasPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeCanvas(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeConditionalComments` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeConditionalCommentsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeConditionalComments(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeNonConditionalComments` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeNonConditionalCommentsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeNonConditionalComments(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeComments` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeCommentsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeComments(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeForms` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeFormsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeForms(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeFormAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeFormAttributesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeFormAttributes(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeFormTagsOnly` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeFormTagsOnlyPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeFormTagsOnly(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeNonDisplayMetaTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeNonDisplayMetaTagsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeNonDisplayMetaTags(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeNonDisplayLinkTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeNonDisplayLinkTagsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeNonDisplayLinkTags(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeMetaRefreshTag` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeMetaRefreshTagPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeMetaRefreshTag(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeNonInlineAnchorHrefs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeNonInlineAnchorHrefsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeNonInlineAnchorHrefs(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeAnchorHrefs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeAnchorHrefsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeAnchorHrefs(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeDefaultAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeDefaultAttributesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeDefaultAttributes(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeAriaAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeAriaAttributesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeAriaAttributes(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeDataAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeDataAttributesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeDataAttributes(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeIntegrityCheckAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeIntegrityCheckAttributesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeIntegrityCheckAttributes(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeEmptyNonDisplayElements` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeEmptyNonDisplayElementsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeEmptyNonDisplayElements(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeTrackingPixels` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeTrackingPixelsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  const imageCache: ResourceCache = hyperFiler.createSubCache(
    ResourceType.IMAGE,
  );

  await imageModifiers.removeTrackingPixels(imageCache);
}

/**
 * A plugin wrapper for the `removeHiddenElementsAndCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeHiddenElementsAndCssPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeHiddenElementsAndCss(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeCustomTagsByName` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeCustomTagsByNamePlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  let customTagNames: string[];

  // If a pipe-separated string was passed, constructing an array from the
  // pipe-separated string. Else, using the string array as is.
  if (typeof hyperFiler.options.removeCustomTagsByName === 'string') {
    customTagNames = hyperFiler.options.removeCustomTagsByName.split('|');
  } else {
    customTagNames = hyperFiler.options.removeCustomTagsByName;
  }

  await documentModifiers.removeCustomTagsByName(
    hyperFiler.document,
    customTagNames,
  );
}

/**
 * A plugin wrapper for the `removeCustomTagsByCssSelector` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeCustomTagsByCssSelectorPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  let customCssSelectors: string[];

  // If a pipe-separated string was passed, constructing an array from the
  // pipe-separated string. Else, using the string array as is.
  if (typeof hyperFiler.options.removeCustomTagsByCssSelector === 'string') {
    customCssSelectors = hyperFiler.options.removeCustomTagsByCssSelector
      .split('|');
  } else {
    customCssSelectors = hyperFiler.options.removeCustomTagsByCssSelector;
  }

  await documentModifiers.removeCustomTagsByCssSelector(
    hyperFiler.document,
    customCssSelectors,
  );
}

/**
 * A plugin wrapper for the `minifyHtml` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyHtmlPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  hyperFiler.html = await documentModifiers.minifyHtml(
    hyperFiler.document.documentElement.outerHTML,
    hyperFiler.options.minifyHtmlOptions,
  );
}

/**
 * A plugin wrapper for the `minifyCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyCssPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.minifyCss(
    hyperFiler.document,
    hyperFiler.options.minifyCssOptions,
  );
}

/**
 * A plugin wrapper for the `minifyJs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyJsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.minifyJs(
    hyperFiler.document,
    hyperFiler.options.minifyJsOptions,
  );
}

/**
 * A plugin wrapper for the `minifyGenericTagNames` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyGenericTagNamesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.minifyGenericTagNames(hyperFiler.document);
}

/**
 * A plugin wrapper for the `removeUnusedCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeUnusedCssPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.removeUnusedCss(hyperFiler.document);
}

/**
 * A plugin wrapper for the `collapseEmptyAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function collapseEmptyAttributesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.collapseEmptyAttributes(
    hyperFiler.document.documentElement.outerHTML,
  );
}

/**
 * A plugin wrapper for the `minifyClassNames` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyClassNamesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.minifyClassNames(hyperFiler.document);
}

/**
 * A plugin wrapper for the `minifyIDs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyIDsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.minifyIDs(hyperFiler.document);
}

/**
 * A plugin wrapper for the `minifyClassNamesAndIDsToAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyClassNamesAndIDsToAttributesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.minifyClassNamesAndIDsToAttributes(
    hyperFiler.document,
  );
}

/**
 * A plugin wrapper for the `beautifyHtml` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function beautifyHtmlPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  hyperFiler.html = await documentModifiers.beautifyHtml(
    hyperFiler.html,
    hyperFiler.options.beautifyHtmlOptions,
  );
}

/**
 * A plugin wrapper for the `beautifyCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function beautifyCssPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.beautifyCss(
    hyperFiler.document,
    hyperFiler.options.beautifyCssOptions,
  );
}

/**
 * A plugin wrapper for the `beautifyJs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function beautifyJsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.beautifyJs(
    hyperFiler.document,
    hyperFiler.options.beautifyJsOptions,
  );
}

/**
 * A plugin wrapper for the `transpileEs6ToEs5` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function transpileEs6ToEs5Plugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.transpileEs6ToEs5(
    hyperFiler.document,
    hyperFiler.options.transpileEs6ToEs5Options,
  );
}

/**
 * A plugin wrapper for the `convertImagesToSupportedImageFormats` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function convertImagesToSupportedImageFormatsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  const imageCache: ResourceCache = hyperFiler.createSubCache(
    ResourceType.IMAGE,
  );

  await imageModifiers.convertImagesToSupportedImageFormats(
    hyperFiler.document,
    imageCache,
  );
}

/**
 * A plugin wrapper for the `minifyImages` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyImagesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  const imageCache: ResourceCache = hyperFiler.createSubCache(
    ResourceType.IMAGE,
  );

  await imageModifiers.minifyImages(
    hyperFiler.document,
    imageCache,
    hyperFiler.options.jpegQuality,
    hyperFiler.options.allowWebp,
    hyperFiler.options.webpQuality,
  );
}

/**
 * A plugin wrapper for the `minifyAudio` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyAudioPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  const audioCache: ResourceCache = hyperFiler.createSubCache(
    ResourceType.AUDIO,
  );

  await audioModifiers.minifyAudio(audioCache);
}

/**
 * A plugin wrapper for the `minifyVideos` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyVideosPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  const videoCache: ResourceCache = hyperFiler.createSubCache(
    ResourceType.VIDEO,
  );

  await videoModifiers.minifyVideos(videoCache);
}

/**
 * A plugin wrapper for the `minifyFonts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function minifyFontsPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  const fontCache: ResourceCache = hyperFiler.createSubCache(
    ResourceType.FONT,
  );

  await fontModifiers.minifyFonts(
    hyperFiler.document,
    fontCache,
  );
}

/**
 * A plugin wrapper for the `removeMetadataFromResourceCache` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function removeMetadataFromResourceCachePlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await generalMediaModifiers.removeMetadataFromResourceCache(
    hyperFiler.resourceCache,
    hyperFiler.options.keepResourceIfLarger,
  );
}

/**
 * A plugin wrapper for the `grayscaleCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function grayscaleCssPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await documentModifiers.grayscaleCss(
    hyperFiler.document,
  );
}

/**
 * A plugin wrapper for the `grayscaleImages` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function grayscaleImagesPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  const imageCache: ResourceCache = hyperFiler.createSubCache(
    ResourceType.IMAGE,
  );

  await imageModifiers.grayscaleImages(
    hyperFiler.document,
    imageCache,
  );
}

/**
 * A plugin wrapper for the `grayscaleVideos` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function grayscaleVideosPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  const videoCache: ResourceCache = hyperFiler.createSubCache(
    ResourceType.VIDEO,
  );

  await videoModifiers.grayscaleVideos(
    videoCache,
  );
}

/**
 * A plugin wrapper for the `grayscale` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function grayscalePlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await grayscaleCssPlugin(hyperFiler);
  await grayscaleImagesPlugin(hyperFiler);
  await grayscaleVideosPlugin(hyperFiler);
}

/**
 * A plugin wrapper for the `injectCustomStyleSheet` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectCustomStyleSheetPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectCustomStyleSheet(
    hyperFiler.options.injectCustomStyleSheet,
    hyperFiler.document,
    {
      torTransport: hyperFiler.options.torTransport,
      socksProxyAgentString: hyperFiler.options.socksProxyAgentString,
    },
  );
}

/**
 * A plugin wrapper for the `injectHtml5Polyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectHtml5PolyfillPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectHtml5Polyfill(hyperFiler.document);
}

/**
 * A plugin wrapper for the `injectCssFlexboxPolyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectCssFlexboxPolyfillPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectCssFlexboxPolyfill(hyperFiler.document);
}

/**
 * A plugin wrapper for the `injectMediaQueryPolyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectMediaQueryPolyfillPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectMediaQueryPolyfill(hyperFiler.document);
}

/**
 * A plugin wrapper for the `injectCanvasPolyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectCanvasPolyfillPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectCanvasPolyfill(hyperFiler.document);
}

/**
 * A plugin wrapper for the `injectHtml5MediaPolyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectHtml5MediaPolyfillPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectHtml5MediaPolyfill(hyperFiler.document);
}

/**
 * A plugin wrapper for the `injectEs5Polyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectEs5PolyfillPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectEs5Polyfill(hyperFiler.document);
}

/**
 * A plugin wrapper for the `injectFlashPlayer` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectFlashPlayerPlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectFlashPlayer(hyperFiler.document);
}

/**
 * A plugin wrapper for the `injectCompiledPage` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
async function injectCompiledPagePlugin(
  hyperFiler: HyperFiler,
) : Promise<void> {
  await injectors.injectCompiledPage(
    hyperFiler.document,
    hyperFiler.options.minifyHtml,
    hyperFiler.options.minifyHtmlOptions,
    hyperFiler.options.minifyJs,
    hyperFiler.options.minifyJsOptions,
  );
}

/**
 * Builds a pipeline of plugins that will run during the
 * `PreCssInlineRemovals` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export function buildPreCssInlineRemovalsPluginPipeline(
  hyperFiler: HyperFiler,
) : HyperFilerPlugin[] {
  const plugins: HyperFilerPlugin[] = [];

  // Running the style removers if specified in the options.
  if (hyperFiler.options.removeStylesTags) {
    plugins.push(removeStylesTagsPlugin);
  }

  if (hyperFiler.options.removeAlternativeStylesTags) {
    plugins.push(removeAlternativeStylesTagsPlugin);
  }

  if (hyperFiler.options.removeInlineStyles) {
    plugins.push(removeInlineStylesPlugin);
  }

  if (hyperFiler.options.removeStyles) {
    plugins.push(removeStylesPlugin);
  }

  // Running the script removers if specified in the options.
  if (hyperFiler.options.removeScriptTags) {
    plugins.push(removeScriptTagsPlugin);
  }

  if (hyperFiler.options.removeNoscriptTags) {
    plugins.push(removeNoscriptTagsPlugin);
  }

  if (hyperFiler.options.removeInlineScripts) {
    plugins.push(removeInlineScriptsPlugin);
  }

  if (hyperFiler.options.removeHrefScripts) {
    plugins.push(removeHrefScriptsPlugin);
  }

  if (hyperFiler.options.removeScripts) {
    plugins.push(removeScriptsPlugin);
  }

  // Running the image removers if specified in the options.
  if (hyperFiler.options.removeImageSrcs) {
    plugins.push(removeImageSrcsPlugin);
  }

  if (hyperFiler.options.removeImageSrcsets) {
    plugins.push(removeImageSrcsetsPlugin);
  }

  if (hyperFiler.options.removeImageAlts) {
    plugins.push(removeImageAltsPlugin);
  }

  if (hyperFiler.options.removeImageAttributes) {
    plugins.push(removeImageAttributesPlugin);
  }

  // Running the frame removers if specified in the options.
  if (hyperFiler.options.removeFrames) {
    plugins.push(removeFramesPlugin);
  }

  // Running the video removers if specified in the options.
  if (hyperFiler.options.removeVideoSrcs) {
    plugins.push(removeVideoSrcsPlugin);
  }

  if (hyperFiler.options.removeVideos) {
    plugins.push(removeVideosPlugin);
  }

  // Running the audio removers if specified in the options.
  if (hyperFiler.options.removeAudioSrcs) {
    plugins.push(removeAudioSrcsPlugin);
  }

  if (hyperFiler.options.removeAudio) {
    plugins.push(removeAudioPlugin);
  }

  // Running the favicon removers if specified in the options.
  if (hyperFiler.options.removeFavicons) {
    plugins.push(removeFaviconsPlugin);
  }

  // Running the canvas removers if specified in the options.
  if (hyperFiler.options.removeCanvas) {
    plugins.push(removeCanvasPlugin);
  }

  // Running the comments removers if specified in the options.
  if (hyperFiler.options.removeConditionalComments) {
    plugins.push(removeConditionalCommentsPlugin);
  }

  if (hyperFiler.options.removeNonConditionalComments) {
    plugins.push(removeNonConditionalCommentsPlugin);
  }

  if (hyperFiler.options.removeComments) {
    plugins.push(removeCommentsPlugin);
  }

  // Running the form removers if specified in the options.
  if (hyperFiler.options.removeForms) {
    plugins.push(removeFormsPlugin);
  }

  if (hyperFiler.options.removeFormAttributes) {
    plugins.push(removeFormAttributesPlugin);
  }

  if (hyperFiler.options.removeFormTagsOnly) {
    plugins.push(removeFormTagsOnlyPlugin);
  }

  // Running the meta and link tag removers if specified in the options.
  if (hyperFiler.options.removeNonDisplayMetaTags) {
    plugins.push(removeNonDisplayMetaTagsPlugin);
  }

  if (hyperFiler.options.removeNonDisplayLinkTags) {
    plugins.push(removeNonDisplayLinkTagsPlugin);
  }

  if (hyperFiler.options.removeMetaRefreshTag) {
    plugins.push(removeMetaRefreshTagPlugin);
  }

  // Running the anchor link removers if specified in the options.
  if (hyperFiler.options.removeNonInlineAnchorHrefs) {
    plugins.push(removeNonInlineAnchorHrefsPlugin);
  }

  if (hyperFiler.options.removeAnchorHrefs) {
    plugins.push(removeAnchorHrefsPlugin);
  }

  // Running the general attribute removers if specified in the options.
  if (hyperFiler.options.removeDefaultAttributes) {
    plugins.push(removeDefaultAttributesPlugin);
  }

  if (hyperFiler.options.removeAriaAttributes) {
    plugins.push(removeAriaAttributesPlugin);
  }

  if (hyperFiler.options.removeDataAttributes) {
    plugins.push(removeDataAttributesPlugin);
  }

  if (hyperFiler.options.removeIntegrityCheckAttributes) {
    plugins.push(removeIntegrityCheckAttributesPlugin);
  }

  if (hyperFiler.options.removeEmptyNonDisplayElements) {
    plugins.push(removeEmptyNonDisplayElementsPlugin);
  }

  // Running the custom tag and selector removers if specified in the options.
  if (hyperFiler.options.removeCustomTagsByName) {
    plugins.push(removeCustomTagsByNamePlugin);
  }

  if (hyperFiler.options.removeCustomTagsByCssSelector) {
    plugins.push(removeCustomTagsByCssSelectorPlugin);
  }

  return plugins;
}

/**
 * Builds a pipeline of plugins that will run during the
 * `PostCssInlineRemovals` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export function buildPostCssInlineRemovalsPluginPipeline(
  hyperFiler: HyperFiler,
) : HyperFilerPlugin[] {
  const plugins: HyperFilerPlugin[] = [];

  // Removing images in the CSS stylesheets.
  if (hyperFiler.options.removeCssImages) {
    plugins.push(removeCssImagesPlugin);
  }

  if (hyperFiler.options.removeImages) {
    plugins.push(removeImagesPlugin);
  }

  // Removing fonts from the document.
  if (hyperFiler.options.removeFonts) {
    plugins.push(removeFontsPlugin);
  }

  // Removing cursors from the document.
  if (hyperFiler.options.removeCursors) {
    plugins.push(removeCursorsPlugin);
  }

  // Removing any hidden elements from the document.
  if (hyperFiler.options.removeHiddenElements) {
    plugins.push(removeHiddenElementsAndCssPlugin);
  }

  return plugins;
}

/**
 * Builds a pipeline of plugins that will run during the
 * `ResourceModifications` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export function buildResourceModificationsPluginPipeline(
  hyperFiler: HyperFiler,
) : HyperFilerPlugin[] {
  const plugins: HyperFilerPlugin[] = [];

  // Removing any images considered as tracking pixels.
  if (hyperFiler.options.removeTrackingPixels) {
    plugins.push(removeTrackingPixelsPlugin);
  }

  // Converting images to supported image formats
  if (hyperFiler.options.convertImagesToSupportedImageFormats) {
    plugins.push(convertImagesToSupportedImageFormatsPlugin);
  }

  // Minifying images in the image cache.
  if (hyperFiler.options.minifyImages) {
    plugins.push(minifyImagesPlugin);
  }

  // Minifying audio in the audio cache.
  if (hyperFiler.options.minifyAudio) {
    plugins.push(minifyAudioPlugin);
  }

  // Minifying videos in the video cache.
  if (hyperFiler.options.minifyVideos) {
    plugins.push(minifyVideosPlugin);
  }

  // Minifying fonts in the font cache.
  if (hyperFiler.options.minifyFonts) {
    plugins.push(minifyFontsPlugin);
  }

  // Remove metadata from resources in the resource cache.
  if (hyperFiler.options.removeResourceMetadata) {
    plugins.push(removeMetadataFromResourceCachePlugin);
  }

  // Grayscaling CSS, images, and videos.
  if (hyperFiler.options.grayscaleCss) {
    plugins.push(grayscaleCssPlugin);
  }

  if (hyperFiler.options.grayscaleImages) {
    plugins.push(grayscaleImagesPlugin);
  }

  if (hyperFiler.options.grayscaleVideos) {
    plugins.push(grayscaleVideosPlugin);
  }

  if (hyperFiler.options.grayscale) {
    plugins.push(grayscalePlugin);
  }

  return plugins;
}

/**
 * Builds a pipeline of plugins that will run during the
 * `FinalInlineModifications` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export function buildFinalInlineModificationsPluginPipeline(
  hyperFiler: HyperFiler,
) : HyperFilerPlugin[] {
  const plugins: HyperFilerPlugin[] = [];

  // Minifying tag names of generic elements.
  if (hyperFiler.options.minifyGenericTagNames) {
    plugins.push(minifyGenericTagNamesPlugin);
  }

  // Injects a custom CSS style sheet into the page.
  if (hyperFiler.options.injectCustomStyleSheet) {
    plugins.push(injectCustomStyleSheetPlugin);
  }

  // Injects an HTML5 polyfill into the page.
  if (hyperFiler.options.injectHtml5Polyfill) {
    plugins.push(injectHtml5PolyfillPlugin);
  }

  // Injects an HTML5 polyfill into the page.
  if (hyperFiler.options.injectHtml5Polyfill) {
    plugins.push(injectHtml5PolyfillPlugin);
  }

  // Injects a CSS Flexbox polyfill into the page.
  if (hyperFiler.options.injectCssFlexboxPolyfill) {
    plugins.push(injectCssFlexboxPolyfillPlugin);
  }

  // Injects a media query polyfill into the HTML page.
  if (hyperFiler.options.injectMediaQueryPolyfill) {
    plugins.push(injectMediaQueryPolyfillPlugin);
  }

  // Injects a `<video>` and `<audio>` tag polyfill into the HTML page.
  if (hyperFiler.options.injectHtml5MediaPolyfill) {
    plugins.push(injectHtml5MediaPolyfillPlugin);
  }

  // Injects a `<canvas>` tag polyfill into the HTML page.
  if (hyperFiler.options.injectCanvasPolyfill) {
    plugins.push(injectCanvasPolyfillPlugin);
  }

  // Injects an ES5 shim polyfill into the HTML page.
  if (hyperFiler.options.injectEs5Polyfill) {
    plugins.push(injectEs5PolyfillPlugin);
  }

  // Injects an ES3 shim polyfill into the page.
  if (hyperFiler.options.injectFlashPlayer) {
    plugins.push(injectFlashPlayerPlugin);
  }

  // Remove unused CSS code.
  if (hyperFiler.options.removeUnusedCss) {
    plugins.push(removeUnusedCssPlugin);
  }

  // Collapse empty HTML attributes.
  if (hyperFiler.options.collapseEmptyAttributes) {
    plugins.push(collapseEmptyAttributesPlugin);
  }

  // Minifying CSS class names.
  if (hyperFiler.options.minifyClassNames) {
    plugins.push(minifyClassNamesPlugin);
  }

  // Minifying CSS IDs.
  if (hyperFiler.options.minifyIDs) {
    plugins.push(minifyIDsPlugin);
  }

  // Minifying CSS class names and IDs to attributes.
  if (hyperFiler.options.minifyClassNamesAndIDsToAttributes) {
    plugins.push(minifyClassNamesAndIDsToAttributesPlugin);
  }

  // Minifying CSS code.
  if (hyperFiler.options.minifyCss) {
    plugins.push(minifyCssPlugin);
  }

  // Beautifying CSS code.
  if (hyperFiler.options.beautifyCss) {
    plugins.push(beautifyCssPlugin);
  }

  // Transpiling JS code to ES5 syntax.
  if (hyperFiler.options.transpileEs6ToEs5) {
    plugins.push(transpileEs6ToEs5Plugin);
  }

  // Minifying JS code.
  if (hyperFiler.options.minifyJs) {
    plugins.push(minifyJsPlugin);
  }

  // Minifying JS code.
  if (hyperFiler.options.beautifyJs) {
    plugins.push(beautifyJsPlugin);
  }

  return plugins;
}

/**
 * Builds a pipeline of plugins that will run during the
 * `FinalDocumentCreation` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export function buildFinalDocumentCreationPluginPipeline(
  hyperFiler: HyperFiler,
) : HyperFilerPlugin[] {
  const plugins: HyperFilerPlugin[] = [];

  // Adding Content-Security-Policies to the page to block the loading or
  // executing of page resources.
  if (hyperFiler.options.addStyleCSP) {
    plugins.push(addStyleCSPPlugin);
  }

  if (hyperFiler.options.addScriptCSP) {
    plugins.push(addScriptCSPPlugin);
  }

  if (hyperFiler.options.addImageCSP) {
    plugins.push(addImageCSPPlugin);
  }

  if (hyperFiler.options.addFrameCSP) {
    plugins.push(addFrameCSPPlugin);
  }

  if (hyperFiler.options.addVideoCSP) {
    plugins.push(addVideoCSPPlugin);
  }

  if (hyperFiler.options.addAudioCSP) {
    plugins.push(addAudioCSPPlugin);
  }

  if (hyperFiler.options.addFontCSP) {
    plugins.push(addFontCSPPlugin);
  }

  // Injecting a compiled page into the document.
  if (hyperFiler.options.injectCompiledPage) {
    plugins.push(injectCompiledPagePlugin);
  }

  return plugins;
}

/**
 * Builds a pipeline of plugins that will run during the
 * `FinalHtmlCreation` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
export function buildFinalHtmlCreationPluginPipeline(
  hyperFiler: HyperFiler,
) : HyperFilerPlugin[] {
  const plugins: HyperFilerPlugin[] = [];

  // Minifying the page HTML.
  if (hyperFiler.options.minifyHtml) {
    plugins.push(minifyHtmlPlugin);
  }

  // Beautifying the page HTML.
  if (hyperFiler.options.beautifyHtml) {
    plugins.push(beautifyHtmlPlugin);
  }

  return plugins;
}
