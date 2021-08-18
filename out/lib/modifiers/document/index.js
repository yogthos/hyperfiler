"use strict";
/**
 * This file contains the source code importing and re-exporting the document
 * modifier code.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeForms = exports.removeComments = exports.removeNonConditionalComments = exports.removeConditionalComments = exports.removeCanvas = exports.removeFavicons = exports.removeCursors = exports.removeFonts = exports.removeAudio = exports.removeAudioSrcs = exports.removeVideos = exports.removeVideoSrcs = exports.removeFrames = exports.removeImages = exports.removeCssImages = exports.removeImageAttributes = exports.removeImageAlts = exports.removeImageSrcsets = exports.removeImageSrcs = exports.removeScripts = exports.removeHrefScripts = exports.removeInlineScripts = exports.removeNoscriptTags = exports.removeScriptTags = exports.removeStyles = exports.removeInlineStyles = exports.removeAlternativeStylesTags = exports.removeStylesTags = exports.removeElementsByCssSelector = exports.removeElementsByTagName = exports.grayscaleCss = exports.addFontCSP = exports.addAudioCSP = exports.addVideoCSP = exports.addFrameCSP = exports.addImageCSP = exports.addScriptCSP = exports.addStyleCSP = exports.beautifyJs = exports.beautifyCss = exports.beautifyHtml = exports.transpileEs6ToEs5 = exports.minifyGenericTagNames = exports.minifyJs = exports.minifyCss = exports.minifyHtml = exports.collapseEmptyAttributes = exports.minifyClassNamesAndIDsToAttributes = exports.minifyIDs = exports.minifyClassNames = void 0;
exports.removeUnusedCss = exports.removeHiddenElementsAndCss = exports.removeCustomTagsByCssSelector = exports.removeCustomTagsByName = exports.removeEmptyNonDisplayElements = exports.removeIntegrityCheckAttributes = exports.removeDataAttributes = exports.removeAriaAttributes = exports.removeDefaultAttributes = exports.removeAnchorHrefs = exports.removeNonInlineAnchorHrefs = exports.removeMetaRefreshTag = exports.removeNonDisplayLinkTags = exports.removeNonDisplayMetaTags = exports.removeFormTagsOnly = exports.removeFormAttributes = void 0;
const class_id_minifier_1 = require("./minifiers/class-id-minifier");
Object.defineProperty(exports, "minifyClassNames", { enumerable: true, get: function () { return class_id_minifier_1.minifyClassNames; } });
Object.defineProperty(exports, "minifyIDs", { enumerable: true, get: function () { return class_id_minifier_1.minifyIDs; } });
Object.defineProperty(exports, "minifyClassNamesAndIDsToAttributes", { enumerable: true, get: function () { return class_id_minifier_1.minifyClassNamesAndIDsToAttributes; } });
const source_code_minifiers_1 = require("./minifiers/source-code-minifiers");
Object.defineProperty(exports, "collapseEmptyAttributes", { enumerable: true, get: function () { return source_code_minifiers_1.collapseEmptyAttributes; } });
Object.defineProperty(exports, "minifyHtml", { enumerable: true, get: function () { return source_code_minifiers_1.minifyHtml; } });
Object.defineProperty(exports, "minifyCss", { enumerable: true, get: function () { return source_code_minifiers_1.minifyCss; } });
Object.defineProperty(exports, "minifyJs", { enumerable: true, get: function () { return source_code_minifiers_1.minifyJs; } });
Object.defineProperty(exports, "minifyGenericTagNames", { enumerable: true, get: function () { return source_code_minifiers_1.minifyGenericTagNames; } });
const source_code_transpilers_1 = require("./modifiers/source-code-transpilers");
Object.defineProperty(exports, "transpileEs6ToEs5", { enumerable: true, get: function () { return source_code_transpilers_1.transpileEs6ToEs5; } });
const source_code_beautifiers_1 = require("./modifiers/source-code-beautifiers");
Object.defineProperty(exports, "beautifyHtml", { enumerable: true, get: function () { return source_code_beautifiers_1.beautifyHtml; } });
Object.defineProperty(exports, "beautifyCss", { enumerable: true, get: function () { return source_code_beautifiers_1.beautifyCss; } });
Object.defineProperty(exports, "beautifyJs", { enumerable: true, get: function () { return source_code_beautifiers_1.beautifyJs; } });
const content_security_policy_modifier_1 = require("./modifiers/content-security-policy-modifier");
Object.defineProperty(exports, "addStyleCSP", { enumerable: true, get: function () { return content_security_policy_modifier_1.addStyleCSP; } });
Object.defineProperty(exports, "addScriptCSP", { enumerable: true, get: function () { return content_security_policy_modifier_1.addScriptCSP; } });
Object.defineProperty(exports, "addImageCSP", { enumerable: true, get: function () { return content_security_policy_modifier_1.addImageCSP; } });
Object.defineProperty(exports, "addFrameCSP", { enumerable: true, get: function () { return content_security_policy_modifier_1.addFrameCSP; } });
Object.defineProperty(exports, "addVideoCSP", { enumerable: true, get: function () { return content_security_policy_modifier_1.addVideoCSP; } });
Object.defineProperty(exports, "addAudioCSP", { enumerable: true, get: function () { return content_security_policy_modifier_1.addAudioCSP; } });
Object.defineProperty(exports, "addFontCSP", { enumerable: true, get: function () { return content_security_policy_modifier_1.addFontCSP; } });
const css_grayscaler_1 = require("./modifiers/css-grayscaler");
Object.defineProperty(exports, "grayscaleCss", { enumerable: true, get: function () { return css_grayscaler_1.grayscaleCss; } });
const general_markup_removers_1 = require("./removers/general-markup-removers");
Object.defineProperty(exports, "removeElementsByTagName", { enumerable: true, get: function () { return general_markup_removers_1.removeElementsByTagName; } });
Object.defineProperty(exports, "removeElementsByCssSelector", { enumerable: true, get: function () { return general_markup_removers_1.removeElementsByCssSelector; } });
Object.defineProperty(exports, "removeStylesTags", { enumerable: true, get: function () { return general_markup_removers_1.removeStylesTags; } });
Object.defineProperty(exports, "removeAlternativeStylesTags", { enumerable: true, get: function () { return general_markup_removers_1.removeAlternativeStylesTags; } });
Object.defineProperty(exports, "removeInlineStyles", { enumerable: true, get: function () { return general_markup_removers_1.removeInlineStyles; } });
Object.defineProperty(exports, "removeStyles", { enumerable: true, get: function () { return general_markup_removers_1.removeStyles; } });
Object.defineProperty(exports, "removeScriptTags", { enumerable: true, get: function () { return general_markup_removers_1.removeScriptTags; } });
Object.defineProperty(exports, "removeNoscriptTags", { enumerable: true, get: function () { return general_markup_removers_1.removeNoscriptTags; } });
Object.defineProperty(exports, "removeInlineScripts", { enumerable: true, get: function () { return general_markup_removers_1.removeInlineScripts; } });
Object.defineProperty(exports, "removeHrefScripts", { enumerable: true, get: function () { return general_markup_removers_1.removeHrefScripts; } });
Object.defineProperty(exports, "removeScripts", { enumerable: true, get: function () { return general_markup_removers_1.removeScripts; } });
Object.defineProperty(exports, "removeImageSrcs", { enumerable: true, get: function () { return general_markup_removers_1.removeImageSrcs; } });
Object.defineProperty(exports, "removeImageSrcsets", { enumerable: true, get: function () { return general_markup_removers_1.removeImageSrcsets; } });
Object.defineProperty(exports, "removeImageAlts", { enumerable: true, get: function () { return general_markup_removers_1.removeImageAlts; } });
Object.defineProperty(exports, "removeImageAttributes", { enumerable: true, get: function () { return general_markup_removers_1.removeImageAttributes; } });
Object.defineProperty(exports, "removeCssImages", { enumerable: true, get: function () { return general_markup_removers_1.removeCssImages; } });
Object.defineProperty(exports, "removeImages", { enumerable: true, get: function () { return general_markup_removers_1.removeImages; } });
Object.defineProperty(exports, "removeFrames", { enumerable: true, get: function () { return general_markup_removers_1.removeFrames; } });
Object.defineProperty(exports, "removeVideoSrcs", { enumerable: true, get: function () { return general_markup_removers_1.removeVideoSrcs; } });
Object.defineProperty(exports, "removeVideos", { enumerable: true, get: function () { return general_markup_removers_1.removeVideos; } });
Object.defineProperty(exports, "removeAudioSrcs", { enumerable: true, get: function () { return general_markup_removers_1.removeAudioSrcs; } });
Object.defineProperty(exports, "removeAudio", { enumerable: true, get: function () { return general_markup_removers_1.removeAudio; } });
Object.defineProperty(exports, "removeFonts", { enumerable: true, get: function () { return general_markup_removers_1.removeFonts; } });
Object.defineProperty(exports, "removeCursors", { enumerable: true, get: function () { return general_markup_removers_1.removeCursors; } });
Object.defineProperty(exports, "removeFavicons", { enumerable: true, get: function () { return general_markup_removers_1.removeFavicons; } });
Object.defineProperty(exports, "removeCanvas", { enumerable: true, get: function () { return general_markup_removers_1.removeCanvas; } });
Object.defineProperty(exports, "removeConditionalComments", { enumerable: true, get: function () { return general_markup_removers_1.removeConditionalComments; } });
Object.defineProperty(exports, "removeNonConditionalComments", { enumerable: true, get: function () { return general_markup_removers_1.removeNonConditionalComments; } });
Object.defineProperty(exports, "removeComments", { enumerable: true, get: function () { return general_markup_removers_1.removeComments; } });
Object.defineProperty(exports, "removeForms", { enumerable: true, get: function () { return general_markup_removers_1.removeForms; } });
Object.defineProperty(exports, "removeFormAttributes", { enumerable: true, get: function () { return general_markup_removers_1.removeFormAttributes; } });
Object.defineProperty(exports, "removeFormTagsOnly", { enumerable: true, get: function () { return general_markup_removers_1.removeFormTagsOnly; } });
Object.defineProperty(exports, "removeNonDisplayMetaTags", { enumerable: true, get: function () { return general_markup_removers_1.removeNonDisplayMetaTags; } });
Object.defineProperty(exports, "removeNonDisplayLinkTags", { enumerable: true, get: function () { return general_markup_removers_1.removeNonDisplayLinkTags; } });
Object.defineProperty(exports, "removeMetaRefreshTag", { enumerable: true, get: function () { return general_markup_removers_1.removeMetaRefreshTag; } });
Object.defineProperty(exports, "removeNonInlineAnchorHrefs", { enumerable: true, get: function () { return general_markup_removers_1.removeNonInlineAnchorHrefs; } });
Object.defineProperty(exports, "removeAnchorHrefs", { enumerable: true, get: function () { return general_markup_removers_1.removeAnchorHrefs; } });
Object.defineProperty(exports, "removeDefaultAttributes", { enumerable: true, get: function () { return general_markup_removers_1.removeDefaultAttributes; } });
Object.defineProperty(exports, "removeAriaAttributes", { enumerable: true, get: function () { return general_markup_removers_1.removeAriaAttributes; } });
Object.defineProperty(exports, "removeDataAttributes", { enumerable: true, get: function () { return general_markup_removers_1.removeDataAttributes; } });
Object.defineProperty(exports, "removeIntegrityCheckAttributes", { enumerable: true, get: function () { return general_markup_removers_1.removeIntegrityCheckAttributes; } });
Object.defineProperty(exports, "removeEmptyNonDisplayElements", { enumerable: true, get: function () { return general_markup_removers_1.removeEmptyNonDisplayElements; } });
Object.defineProperty(exports, "removeCustomTagsByName", { enumerable: true, get: function () { return general_markup_removers_1.removeCustomTagsByName; } });
Object.defineProperty(exports, "removeCustomTagsByCssSelector", { enumerable: true, get: function () { return general_markup_removers_1.removeCustomTagsByCssSelector; } });
const hidden_element_remover_1 = require("./removers/hidden-element-remover");
Object.defineProperty(exports, "removeHiddenElementsAndCss", { enumerable: true, get: function () { return hidden_element_remover_1.removeHiddenElementsAndCss; } });
const unused_css_remover_1 = require("./removers/unused-css-remover");
Object.defineProperty(exports, "removeUnusedCss", { enumerable: true, get: function () { return unused_css_remover_1.removeUnusedCss; } });
//# sourceMappingURL=index.js.map