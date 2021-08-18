/**
 * This file contains the source code importing and re-exporting the document
 * modifier code.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
import { minifyClassNames, minifyIDs, minifyClassNamesAndIDsToAttributes } from './minifiers/class-id-minifier';
import { collapseEmptyAttributes, minifyHtml, minifyCss, minifyJs, minifyGenericTagNames } from './minifiers/source-code-minifiers';
import { transpileEs6ToEs5 } from './modifiers/source-code-transpilers';
import { beautifyHtml, beautifyCss, beautifyJs } from './modifiers/source-code-beautifiers';
import { addStyleCSP, addScriptCSP, addImageCSP, addFrameCSP, addVideoCSP, addAudioCSP, addFontCSP } from './modifiers/content-security-policy-modifier';
import { grayscaleCss } from './modifiers/css-grayscaler';
import { removeElementsByTagName, removeElementsByCssSelector, removeStylesTags, removeAlternativeStylesTags, removeInlineStyles, removeStyles, removeScriptTags, removeNoscriptTags, removeInlineScripts, removeHrefScripts, removeScripts, removeImageSrcs, removeImageSrcsets, removeImageAlts, removeImageAttributes, removeCssImages, removeImages, removeFrames, removeVideoSrcs, removeVideos, removeAudioSrcs, removeAudio, removeFonts, removeCursors, removeFavicons, removeCanvas, removeConditionalComments, removeNonConditionalComments, removeComments, removeForms, removeFormAttributes, removeFormTagsOnly, removeNonDisplayMetaTags, removeNonDisplayLinkTags, removeMetaRefreshTag, removeNonInlineAnchorHrefs, removeAnchorHrefs, removeDefaultAttributes, removeAriaAttributes, removeDataAttributes, removeIntegrityCheckAttributes, removeEmptyNonDisplayElements, removeCustomTagsByName, removeCustomTagsByCssSelector } from './removers/general-markup-removers';
import { removeHiddenElementsAndCss } from './removers/hidden-element-remover';
import { removeUnusedCss } from './removers/unused-css-remover';
export { minifyClassNames, minifyIDs, minifyClassNamesAndIDsToAttributes, collapseEmptyAttributes, minifyHtml, minifyCss, minifyJs, minifyGenericTagNames, transpileEs6ToEs5, beautifyHtml, beautifyCss, beautifyJs, addStyleCSP, addScriptCSP, addImageCSP, addFrameCSP, addVideoCSP, addAudioCSP, addFontCSP, grayscaleCss, removeElementsByTagName, removeElementsByCssSelector, removeStylesTags, removeAlternativeStylesTags, removeInlineStyles, removeStyles, removeScriptTags, removeNoscriptTags, removeInlineScripts, removeHrefScripts, removeScripts, removeImageSrcs, removeImageSrcsets, removeImageAlts, removeImageAttributes, removeCssImages, removeImages, removeFrames, removeVideoSrcs, removeVideos, removeAudioSrcs, removeAudio, removeFonts, removeCursors, removeFavicons, removeCanvas, removeConditionalComments, removeNonConditionalComments, removeComments, removeForms, removeFormAttributes, removeFormTagsOnly, removeNonDisplayMetaTags, removeNonDisplayLinkTags, removeMetaRefreshTag, removeNonInlineAnchorHrefs, removeAnchorHrefs, removeDefaultAttributes, removeAriaAttributes, removeDataAttributes, removeIntegrityCheckAttributes, removeEmptyNonDisplayElements, removeCustomTagsByName, removeCustomTagsByCssSelector, removeHiddenElementsAndCss, removeUnusedCss, };
//# sourceMappingURL=index.d.ts.map