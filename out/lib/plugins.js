"use strict";
/**
 * This file contains the source code for the all of the base wrapper plugins
 * available by default in HyperFiler, as well as plugin builders for building
 * pipelines of plugins at various stages of the hyper filing process.
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
exports.buildFinalHtmlCreationPluginPipeline = exports.buildFinalDocumentCreationPluginPipeline = exports.buildFinalInlineModificationsPluginPipeline = exports.buildResourceModificationsPluginPipeline = exports.buildPostCssInlineRemovalsPluginPipeline = exports.buildPreCssInlineRemovalsPluginPipeline = void 0;
const resource_1 = require("./resource");
const documentModifiers = require("./modifiers/document/index");
const imageModifiers = require("./modifiers/media/images/index");
const audioModifiers = require("./modifiers/media/audio/index");
const videoModifiers = require("./modifiers/media/video/index");
const fontModifiers = require("./modifiers/media/fonts/index");
const generalMediaModifiers = require("./modifiers/media/general/index");
const injectors = require("./injectors/index");
/**
 * A plugin wrapper for the `removeStylesTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeStylesTagsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeStylesTags(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeAlternativeStylesTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeAlternativeStylesTagsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeAlternativeStylesTags(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeInlineStyles` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeInlineStylesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeInlineStyles(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeStyles` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeStylesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeStyles(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `addStyleCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function addStyleCSPPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.addStyleCSP(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeScriptTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeScriptTagsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeScriptTags(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeNoscriptTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeNoscriptTagsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeNoscriptTags(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeInlineScripts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeInlineScriptsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeInlineScripts(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeHrefScripts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeHrefScriptsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeHrefScripts(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeScripts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeScriptsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeScripts(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `addScriptCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function addScriptCSPPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.addScriptCSP(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeImageSrcs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeImageSrcsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeImageSrcs(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeImageSrcsets` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeImageSrcsetsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeImageSrcsets(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeImageAlts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeImageAltsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeImageAlts(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeImageAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeImageAttributesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeImageAttributes(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeCssImages` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeCssImagesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeCssImages(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeImages` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeImagesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeImages(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `addImageCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function addImageCSPPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.addImageCSP(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeFrames` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeFramesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeFrames(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `addFrameCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function addFrameCSPPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.addFrameCSP(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeVideoSrcs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeVideoSrcsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeVideoSrcs(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeVideos` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeVideosPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeVideos(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `addVideoCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function addVideoCSPPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.addVideoCSP(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeAudioSrcs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeAudioSrcsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeAudioSrcs(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeAudio` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeAudioPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeAudio(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `addAudioCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function addAudioCSPPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.addAudioCSP(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeFonts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeFontsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeFonts(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `addFontCSP` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function addFontCSPPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.addFontCSP(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeCursors` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeCursorsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeCursors(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeFavicons` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeFaviconsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeFavicons(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeCanvas` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeCanvasPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeCanvas(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeConditionalComments` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeConditionalCommentsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeConditionalComments(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeNonConditionalComments` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeNonConditionalCommentsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeNonConditionalComments(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeComments` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeCommentsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeComments(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeForms` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeFormsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeForms(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeFormAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeFormAttributesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeFormAttributes(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeFormTagsOnly` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeFormTagsOnlyPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeFormTagsOnly(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeNonDisplayMetaTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeNonDisplayMetaTagsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeNonDisplayMetaTags(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeNonDisplayLinkTags` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeNonDisplayLinkTagsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeNonDisplayLinkTags(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeMetaRefreshTag` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeMetaRefreshTagPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeMetaRefreshTag(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeNonInlineAnchorHrefs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeNonInlineAnchorHrefsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeNonInlineAnchorHrefs(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeAnchorHrefs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeAnchorHrefsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeAnchorHrefs(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeDefaultAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeDefaultAttributesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeDefaultAttributes(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeAriaAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeAriaAttributesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeAriaAttributes(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeDataAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeDataAttributesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeDataAttributes(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeIntegrityCheckAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeIntegrityCheckAttributesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeIntegrityCheckAttributes(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeEmptyNonDisplayElements` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeEmptyNonDisplayElementsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeEmptyNonDisplayElements(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeTrackingPixels` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeTrackingPixelsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageCache = hyperFiler.createSubCache(resource_1.ResourceType.IMAGE);
        yield imageModifiers.removeTrackingPixels(imageCache);
    });
}
/**
 * A plugin wrapper for the `removeHiddenElementsAndCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeHiddenElementsAndCssPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeHiddenElementsAndCss(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeCustomTagsByName` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeCustomTagsByNamePlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        let customTagNames;
        // If a pipe-separated string was passed, constructing an array from the
        // pipe-separated string. Else, using the string array as is.
        if (typeof hyperFiler.options.removeCustomTagsByName === 'string') {
            customTagNames = hyperFiler.options.removeCustomTagsByName.split('|');
        }
        else {
            customTagNames = hyperFiler.options.removeCustomTagsByName;
        }
        yield documentModifiers.removeCustomTagsByName(hyperFiler.document, customTagNames);
    });
}
/**
 * A plugin wrapper for the `removeCustomTagsByCssSelector` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeCustomTagsByCssSelectorPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        let customCssSelectors;
        // If a pipe-separated string was passed, constructing an array from the
        // pipe-separated string. Else, using the string array as is.
        if (typeof hyperFiler.options.removeCustomTagsByCssSelector === 'string') {
            customCssSelectors = hyperFiler.options.removeCustomTagsByCssSelector
                .split('|');
        }
        else {
            customCssSelectors = hyperFiler.options.removeCustomTagsByCssSelector;
        }
        yield documentModifiers.removeCustomTagsByCssSelector(hyperFiler.document, customCssSelectors);
    });
}
/**
 * A plugin wrapper for the `minifyHtml` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyHtmlPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        hyperFiler.html = yield documentModifiers.minifyHtml(hyperFiler.document.documentElement.outerHTML, hyperFiler.options.minifyHtmlOptions);
    });
}
/**
 * A plugin wrapper for the `minifyCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyCssPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.minifyCss(hyperFiler.document, hyperFiler.options.minifyCssOptions);
    });
}
/**
 * A plugin wrapper for the `minifyJs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyJsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.minifyJs(hyperFiler.document, hyperFiler.options.minifyJsOptions);
    });
}
/**
 * A plugin wrapper for the `minifyGenericTagNames` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyGenericTagNamesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.minifyGenericTagNames(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `removeUnusedCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeUnusedCssPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.removeUnusedCss(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `collapseEmptyAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function collapseEmptyAttributesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.collapseEmptyAttributes(hyperFiler.document.documentElement.outerHTML);
    });
}
/**
 * A plugin wrapper for the `minifyClassNames` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyClassNamesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.minifyClassNames(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `minifyIDs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyIDsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.minifyIDs(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `minifyClassNamesAndIDsToAttributes` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyClassNamesAndIDsToAttributesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.minifyClassNamesAndIDsToAttributes(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `beautifyHtml` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function beautifyHtmlPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        hyperFiler.html = yield documentModifiers.beautifyHtml(hyperFiler.html, hyperFiler.options.beautifyHtmlOptions);
    });
}
/**
 * A plugin wrapper for the `beautifyCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function beautifyCssPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.beautifyCss(hyperFiler.document, hyperFiler.options.beautifyCssOptions);
    });
}
/**
 * A plugin wrapper for the `beautifyJs` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function beautifyJsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.beautifyJs(hyperFiler.document, hyperFiler.options.beautifyJsOptions);
    });
}
/**
 * A plugin wrapper for the `transpileEs6ToEs5` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function transpileEs6ToEs5Plugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.transpileEs6ToEs5(hyperFiler.document, hyperFiler.options.transpileEs6ToEs5Options);
    });
}
/**
 * A plugin wrapper for the `convertImagesToSupportedImageFormats` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function convertImagesToSupportedImageFormatsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageCache = hyperFiler.createSubCache(resource_1.ResourceType.IMAGE);
        yield imageModifiers.convertImagesToSupportedImageFormats(hyperFiler.document, imageCache);
    });
}
/**
 * A plugin wrapper for the `minifyImages` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyImagesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageCache = hyperFiler.createSubCache(resource_1.ResourceType.IMAGE);
        yield imageModifiers.minifyImages(hyperFiler.document, imageCache, hyperFiler.options.jpegQuality, hyperFiler.options.allowWebp, hyperFiler.options.webpQuality);
    });
}
/**
 * A plugin wrapper for the `minifyAudio` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyAudioPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const audioCache = hyperFiler.createSubCache(resource_1.ResourceType.AUDIO);
        yield audioModifiers.minifyAudio(audioCache);
    });
}
/**
 * A plugin wrapper for the `minifyVideos` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyVideosPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const videoCache = hyperFiler.createSubCache(resource_1.ResourceType.VIDEO);
        yield videoModifiers.minifyVideos(videoCache);
    });
}
/**
 * A plugin wrapper for the `minifyFonts` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function minifyFontsPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const fontCache = hyperFiler.createSubCache(resource_1.ResourceType.FONT);
        yield fontModifiers.minifyFonts(hyperFiler.document, fontCache);
    });
}
/**
 * A plugin wrapper for the `removeMetadataFromResourceCache` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function removeMetadataFromResourceCachePlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield generalMediaModifiers.removeMetadataFromResourceCache(hyperFiler.resourceCache, hyperFiler.options.keepResourceIfLarger);
    });
}
/**
 * A plugin wrapper for the `grayscaleCss` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function grayscaleCssPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield documentModifiers.grayscaleCss(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `grayscaleImages` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function grayscaleImagesPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageCache = hyperFiler.createSubCache(resource_1.ResourceType.IMAGE);
        yield imageModifiers.grayscaleImages(hyperFiler.document, imageCache);
    });
}
/**
 * A plugin wrapper for the `grayscaleVideos` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function grayscaleVideosPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const videoCache = hyperFiler.createSubCache(resource_1.ResourceType.VIDEO);
        yield videoModifiers.grayscaleVideos(videoCache);
    });
}
/**
 * A plugin wrapper for the `grayscale` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function grayscalePlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield grayscaleCssPlugin(hyperFiler);
        yield grayscaleImagesPlugin(hyperFiler);
        yield grayscaleVideosPlugin(hyperFiler);
    });
}
/**
 * A plugin wrapper for the `injectCustomStyleSheet` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectCustomStyleSheetPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectCustomStyleSheet(hyperFiler.options.injectCustomStyleSheet, hyperFiler.document, {
            torTransport: hyperFiler.options.torTransport,
            socksProxyAgentString: hyperFiler.options.socksProxyAgentString,
        });
    });
}
/**
 * A plugin wrapper for the `injectHtml5Polyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectHtml5PolyfillPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectHtml5Polyfill(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `injectCssFlexboxPolyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectCssFlexboxPolyfillPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectCssFlexboxPolyfill(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `injectMediaQueryPolyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectMediaQueryPolyfillPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectMediaQueryPolyfill(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `injectCanvasPolyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectCanvasPolyfillPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectCanvasPolyfill(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `injectHtml5MediaPolyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectHtml5MediaPolyfillPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectHtml5MediaPolyfill(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `injectEs5Polyfill` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectEs5PolyfillPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectEs5Polyfill(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `injectFlashPlayer` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectFlashPlayerPlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectFlashPlayer(hyperFiler.document);
    });
}
/**
 * A plugin wrapper for the `injectCompiledPage` function.
 *
 * @param hyperFiler a hyperfiler object that will be modified in place.
 */
function injectCompiledPagePlugin(hyperFiler) {
    return __awaiter(this, void 0, void 0, function* () {
        yield injectors.injectCompiledPage(hyperFiler.document, hyperFiler.options.minifyHtml, hyperFiler.options.minifyHtmlOptions, hyperFiler.options.minifyJs, hyperFiler.options.minifyJsOptions);
    });
}
/**
 * Builds a pipeline of plugins that will run during the
 * `PreCssInlineRemovals` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
function buildPreCssInlineRemovalsPluginPipeline(hyperFiler) {
    const plugins = [];
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
exports.buildPreCssInlineRemovalsPluginPipeline = buildPreCssInlineRemovalsPluginPipeline;
/**
 * Builds a pipeline of plugins that will run during the
 * `PostCssInlineRemovals` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
function buildPostCssInlineRemovalsPluginPipeline(hyperFiler) {
    const plugins = [];
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
exports.buildPostCssInlineRemovalsPluginPipeline = buildPostCssInlineRemovalsPluginPipeline;
/**
 * Builds a pipeline of plugins that will run during the
 * `ResourceModifications` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
function buildResourceModificationsPluginPipeline(hyperFiler) {
    const plugins = [];
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
exports.buildResourceModificationsPluginPipeline = buildResourceModificationsPluginPipeline;
/**
 * Builds a pipeline of plugins that will run during the
 * `FinalInlineModifications` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
function buildFinalInlineModificationsPluginPipeline(hyperFiler) {
    const plugins = [];
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
exports.buildFinalInlineModificationsPluginPipeline = buildFinalInlineModificationsPluginPipeline;
/**
 * Builds a pipeline of plugins that will run during the
 * `FinalDocumentCreation` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
function buildFinalDocumentCreationPluginPipeline(hyperFiler) {
    const plugins = [];
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
exports.buildFinalDocumentCreationPluginPipeline = buildFinalDocumentCreationPluginPipeline;
/**
 * Builds a pipeline of plugins that will run during the
 * `FinalHtmlCreation` stage of hyper filing process.
 *
 * @param hyperFiler a hyperfiler object.
 */
function buildFinalHtmlCreationPluginPipeline(hyperFiler) {
    const plugins = [];
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
exports.buildFinalHtmlCreationPluginPipeline = buildFinalHtmlCreationPluginPipeline;
//# sourceMappingURL=plugins.js.map