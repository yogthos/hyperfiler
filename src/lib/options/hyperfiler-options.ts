/**
 * This file contains the hyperfiler options types and default hyperfiler
 * options.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import { HyperFiler } from '../hyperfiler';

/**
 * A plugin that can be run while the HyperFiler process is running.
 */
export type HyperFilerPlugin = {
  (hyperFiler: HyperFiler): Promise<void>,
}

/**
 * Configuration options for HyperFiler.
 */
export type HyperFilerOptions = {
  /**
   * The entry URL used to generate the single file.
   */
  url: string,

  /**
   * The path of the file that the single HTML bundle will be written to.
   */
  out?: string,

  /**
   * Silences all of the console output.
   */
  silent?: boolean,

  /**
   * Removes `<style>` tags from the HTML page.
   */
  removeStylesTags?: boolean,

  /**
   * Removes alternative style sheets from the HTML page.
   */
  removeAlternativeStylesTags?: boolean,

  /**
   * Removes inline `style` attributes.
   */
  removeInlineStyles?: boolean,

  /**
   * Removes all styles from the HTML page.
   */
  removeStyles?: boolean,

  /**
   * Sets a style `Content-Security-Policy` to block styles.
   */
  addStyleCSP?: boolean,

  /**
   * Removes `<script>` tags from the HTML page.
   */
  removeScriptTags?: boolean,

  /**
   * Removes `<noscript>` tags from the HTML page.
   */
  removeNoscriptTags?: boolean,

  /**
   * Removes inline script event handler `on*` attributes and `href` attributes
   * with `javascript:` protocols.
   */
  removeInlineScripts?: boolean,

  /**
   * Removes scripts in the `href` attributes that use the `javascript:`
   * protocol.
   */
  removeHrefScripts?: boolean,

  /**
   * Removes all scripts from the HTML page.
   */
  removeScripts?: boolean,

  /**
   * Sets a script `Content-Security-Policy` to block scripts.
   */
  addScriptCSP?: boolean,

  /**
   * Removes the `src` attribute from image tags.
   */
  removeImageSrcs?: boolean,

  /**
   * Removes the `srcset` attribute from image tags.
   */
  removeImageSrcsets?: boolean,

  /**
   * Removes the `alt` attribute from image tags.
   */
  removeImageAlts?: boolean,

  /**
   * Removes `src`, `srcset`, and `alt` attributes from image tags.
   */
  removeImageAttributes?: boolean,

  /**
   * Removes images from CSS style sheets.
   */
  removeCssImages?: boolean,

  /**
   * Removes all images from the HTML page, including in the CSS style sheets.
   */
  removeImages?: boolean,

  /**
   * Sets an image `Content-Security-Policy` to block images.
   */
  addImageCSP?: boolean,

  /**
   * Removes all frames from the HTML page.
   */
  removeFrames?: boolean,

  /**
   * Sets a frame `Content-Security-Policy` to block frames.
   */
  addFrameCSP?: boolean,

  /**
   * Removes the `src` attribute from video tags.
   */
  removeVideoSrcs?: boolean,

  /**
   * Removes all videos from the HTML page.
   */
  removeVideos?: boolean,

  /**
   * Sets a video `Content-Security-Policy` to block videos.
   */
  addVideoCSP?: boolean,

  /**
   * Removes the `src` attribute from audio tags.
   */
  removeAudioSrcs?: boolean,

  /**
   * Removes all audio from the HTML page.
   */
  removeAudio?: boolean,

  /**
   * Sets an audio `Content-Security-Policy` to block audio.
   */
  addAudioCSP?: boolean,

  /**
   * Removes all fonts from the HTML page.
   */
  removeFonts?: boolean,

  /**
   * Sets a font `Content-Security-Policy` to block fonts.
   */
  addFontCSP?: boolean,

  /**
   * Removes all cursors from the HTML page.
   */
  removeCursors?: boolean,

  /**
   * Removes all favicons from the HTML page.
   */
  removeFavicons?: boolean,

  /**
   * Removes all `<canvas>` tags from the HTML page.
   */
  removeCanvas?: boolean,

  /**
   * Removes conditional comments from the HTML page.
   */
  removeConditionalComments?: boolean,

  /**
   * Removes non-conditional comments from the HTML page.
   */
  removeNonConditionalComments?: boolean,

  /**
   * Removes all comments from the HTML page.
   */
  removeComments?: boolean,

  /**
   * Removes all `<form>` tags from the HTML page.
   */
  removeForms?: boolean,

  /**
   * Removes all attributes from `<form>` tags in the HTML page.
   */
  removeFormAttributes?: boolean,

  /**
   * Removes `<form>` tags, but no nested tags, from the HTML page.
   */
  removeFormTagsOnly?: boolean,

  /**
   * Removes non-display `<meta>` tags from the HTML page.
   */
  removeNonDisplayMetaTags?: boolean,

  /**
   * Removes non-display `<link>` tags from the HTML page.
   */
  removeNonDisplayLinkTags?: boolean,

  /**
   * Removes refresh `<meta>` tags from the HTML page.
   */
  removeMetaRefreshTag?: boolean,

  /**
   * Removes the `href` attribute from `<a>` tags that link to external files,
   * but not the links to internal sections of the HTML page.
   */
  removeNonInlineAnchorHrefs?: boolean,

  /**
   * Removes the `href` attribute from `<a>` tags.
   */
  removeAnchorHrefs?: boolean,

  /**
   * Removes any redundant default attributes from all tags in the HTML page.
   */
  removeDefaultAttributes?: boolean,

  /**
   * Removes all WAI-ARIA attributes from the HTML page.
   */
  removeAriaAttributes?: boolean,

  /**
   * Removes all Data attributes from the HTML page.
   */
  removeDataAttributes?: boolean

  /**
   * Removes all integrity check attributes from the HTML page.
   */
  removeIntegrityCheckAttributes?: boolean,

  /**
   * Removes empty elements that don't have an effect on page rendering. For
   * example, and empty `<style></style>` will be removed.
   */
  removeEmptyNonDisplayElements?: boolean,

  /**
   * Removes all tracking pixels from the HTML page.
   */
  removeTrackingPixels?: boolean,

  /**
   * Removes all hidden elements from the HTML page.
   */
  removeHiddenElements?: boolean,

  /**
   * Removes all tags from the HTML page in the provided pipe-delimited string
   * of custom tags. For example, `foo|bar` will remove all `<foo>` and `<bar>`
   * tags. When used programmatically, a JavaScript string[] array can be used.
   */
  removeCustomTagsByName?: string[] | string,

  /**
   * Removes all tags from the HTML page in the provided pipe-delimited string
   * of custom CSS selectors. For example, `[foo]|[bar]` will remove all tags
   * with the `foo` attribute and all tags with the `bar` attribute. When used
   * programmatically, a JavaScript string[] array can be used.
   */
  removeCustomTagsByCssSelector?: string[] | string,

  /**
   * Removes all CSS code from the style sheets that are no used in the HTML
   * page.
   */
  removeUnusedCss?: boolean,

  /**
   * Collapses empty HTML attribute values. For example,
   * `<input type="radio" checked="">` will collapse the empty attribute into
   * `<input type="radio" checked>`.
   */
  collapseEmptyAttributes?: boolean,

  /**
   * Minifies the HTML in the HTML page.
   */
  minifyHtml?: boolean,

  /**
   * HTML minification options used in the `html-minifier` library.
   */
  minifyHtmlOptions?: any,

  /**
   * Minifies the CSS in the HTML page.
   */
  minifyCss?: boolean,

  /**
   * CSS minification options used in the `clean-css` library.
   */
  minifyCssOptions?: any,

  /**
   * Minifies the JavaScript in the HTML page.
   */
  minifyJs?: boolean,

  /**
   * JavaScript minification options used in the `terser` library.
   */
  minifyJsOptions?: any,

  /**
   * Minifies tag names for non-semantic elements such as `<div>` and `<span>`.
   */
  minifyGenericTagNames?: boolean,

  /**
   * Minifies all class names in the stylesheets and HTML page.
   */
  minifyClassNames?: boolean,

  /**
   * Minifies all IDs in the stylesheets and HTML page.
   */
  minifyIDs?: boolean,

  /**
   * Minifies all class names and IDs in the stylesheets and HTML page into
   * attributes and CSS attribute selectors.
   */
  minifyClassNamesAndIDsToAttributes?: boolean,

  /**
   * Beautifies the HTML in the HTML page.
   */
  beautifyHtml?: boolean,

  /**
   * HTML beautification options used in the `js-beautify` library.
   */
  beautifyHtmlOptions?: any,

  /**
   * Beautifies the CSS in the HTML page.
   */
  beautifyCss?: boolean,

  /**
   * CSS beautification options used in the `js-beautify` library.
   */
  beautifyCssOptions?: any,

  /**
   * Beautifies the JavaScript in the HTML page.
   */
  beautifyJs?: boolean,

  /**
   * JavaScript beautification options used in the `js-beautify` library.
   */
  beautifyJsOptions?: any,

  /**
   * Transpiles ES6 to ES5 JavaScript code in the HTML page.
   */
  transpileEs6ToEs5?: boolean,

  /**
   * JavaScript transpilation options used in the `babel` library.
   */
  transpileEs6ToEs5Options?: any,

  /**
   * Converts all images in the HTML into formats supported by most browsers
   * (PNG, JPEG, and GIF). For example, WEBP and TIFF images will be converted,
   * as these types are only supported by a subset of browsers.
   */
  convertImagesToSupportedImageFormats?: boolean,

  /**
   * Minifies images in the HTML page.
   */
  minifyImages?: boolean,

  /**
   * When minifying images, sets the JPEG quality value. The default value is
   * `40`.
   */
  jpegQuality?: number,

  /**
   * When minifying images, allows the conversion to the WEBP image to improve
   * minification. By default the WEBP image type will not be used.
   */
  allowWebp?: boolean,

  /**
   * When minifying images, sets the WEBP quality value. The default value is
   * `20`.
   */
  webpQuality?: number,

  /**
   * Minifies audio in the HTML page.
   */
  minifyAudio?: boolean,

  /**
   * Minifies videos in the HTML page.
   */
  minifyVideos?: boolean,

  /**
   * Minifies fonts in the HTML page.
   */
  minifyFonts?: boolean,

  /**
   * Remove metadata from resources in the HTML page.
   */
  removeResourceMetadata?: boolean,

  /**
   * When removing resource metadata, if set will keep the new resource with
   * the removed metadata even if the resource is larger after the
   * modification.
   */
  keepResourceIfLarger?: boolean,

  /**
   * Grayscales all CSS colors in the HTML page.
   */
  grayscaleCss?: boolean,

  /**
   * Grayscales all images in the HTML page.
   */
  grayscaleImages?: boolean,

  /**
   * Grayscales all videos in the HTML page.
   */
  grayscaleVideos?: boolean,

  /**
   * Grayscales the HTML page.
   */
  grayscale?: boolean,

  /**
   * Injects a custom style sheet into the HTML page.
   */
  injectCustomStyleSheet?: string,

  /**
   * Injects an HTML5 polyfill into the HTML page.
   */
  injectHtml5Polyfill?: boolean,

  /**
   * Injects a CSS flexbox polyfill into the HTML page.
   */
  injectCssFlexboxPolyfill?: boolean,

  /**
   * Injects a media query polyfill into the HTML page.
   */
  injectMediaQueryPolyfill?: boolean,

  /**
   * Injects a `<video>` and `<audio>` tag polyfill into the HTML page.
   */
  injectHtml5MediaPolyfill?: boolean,

  /**
   * Injects a `<canvas>` tag polyfill into the HTML page.
   */
  injectCanvasPolyfill?: boolean,

  /**
   * Injects an ES5 shim polyfill into the HTML page.
   */
  injectEs5Polyfill?: boolean,

  /**
   * Injects a Ruffle flash player into that page that will play flash content
   * embedded in the page.
   */
  injectFlashPlayer?: boolean,

  /**
   * Injects a compiled version of the HTML page as a self-extracting script
   * into the HTML page.
   */
  injectCompiledPage?: boolean,

  /**
   * A pipe-delimited string of HTTP headers used in the requests. For example,
   * `User-Agent:custom-ua|Accept-Language:en-US` will pass `User-Agent` with
   * the value `custom-ua` and `Accept-Language` with the value `en-US` as
   * headers in the request. When used programmatically, a JavaScript object
   * of { [header: string]: string } can be used.
   */
  headers?: { [header: string]: string } | string,

  /**
   * Uses the Tor network when fetching the HTML page and all the page
   * resources.
   */
  torTransport?: boolean,

  /**
   * Specifies the socks proxy agent when using the Tor transport. The default
   * value uses an open instance of the Tor browser (using the
   * `socks5h://localhost:9150` agent).
   */
  socksProxyAgentString?: string,

  /**
   * Uses a headless browser when fetching the HTML page and all the page
   * resources. Note that if this option is specified, the executable path must
   * be specified using the `--headless-browser-executable-path` argument.
   * Additional arguments may be passed to the headless browser via the
   * `--headless-browser-args` path as a pipe-separated string. Additionally,
   * if the `--tor-transport` argument is specified, resources will be fetched
   * using the Tor network on chromium-based browsers.
   */
  headlessBrowserTransport?: boolean,

  /**
   * The path to the headless browser executable.
   */
  headlessBrowserExecutablePath?: string,

  /**
   * Arguments passed to the headless browser as a pipe-separated string. For
   * example, `--headless-browser-args '--arg1 value1|--arg2 value2'` will pass
   * the arguments `--arg1 value1` and `--arg2 value2` to the headless browser.
   */
  headlessBrowserArgs?: string[] | string,

  /**
   * Plugins that can be used to run code at various stages of the hyper filing
   * process.
   */
  plugins?: {
    /**
     * Plugins that will run during the stage of the hyper filing process
     * before the entry HTML page has been fetched.
     */
    beforeInitialFetch: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process after
     * the entry HTML page has been fetched.
     */
    afterInitialFetch: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * before built-in removal plugins have run prior to any CSS code being
     * inlined in the document.
     */
    beforePreCssInlineRemoval: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after built-in removal plugins have run prior to any CSS code being
     * inlined in the document.
     */
    afterPreCssInlineRemoval: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * before the CSS code is inlined in the document.
     */
    beforeCssInlines: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after the CSS code is inlined in the document.
     */
    afterCssInlines: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * before built-in removal plugins have run after the CSS code has been
     * inlined in the document.
     */
    beforePostCssInlineRemoval: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after built-in removal plugins have run after the CSS code has been
     * inlined in the document.
     */
    afterPostCssInlineRemoval: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after all of the CSS code has been inlined, but before the remaining
     * document resources have been fetched.
     */
    beforePostCssInlineResourceFetch: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after all of the CSS code has been inlined and after the remaining
     * document resources have been fetched.
     */
    afterPostCssInlineResourceFetch: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * before any of the resources have been modified.
     */
    beforeResourceModifications: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after the resources have been modified.
     */
    afterResourceModifications: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * before the remaining resources have been encoded and inlined.
     */
    beforeResourceInlines: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after the remaining resources have been encoded and inlined.
     */
    afterResourceInlines: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * before the final inline modifications are run.
     */
    beforeFinalInlineModifications: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after the final inline modifications are run.
     */
    afterFinalInlineModifications: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * before the final HTML page bundle is created.
     */
    beforeFinalHtmlCreation: HyperFilerPlugin[],

    /**
     * Plugins that will run during the stage of the hyper filing process
     * after the final HTML page bundle is created.
     */
    afterFinalHtmlCreation: HyperFilerPlugin[],
  },

  /**
   * A prebuilt set of options intended to sanitize an HTML page by removing
   * scripts, frames, canvases, comments, forms, and resource metadata, as well
   * as adding security policies to block scripts and frames in order to make
   * the page safe for offline viewing.
   */
  sanitize?: boolean,

  /**
   * A prebuilt set of options intended to polyfill an HTML page and convert
   * resources in the page into formats compatible with older browsers.
   */
  compatibility?: boolean,

  /**
   * A prebuilt set of options intended to perform simple minifications on an
   * HTML page to make it smaller without breaking any page functionality.
   */
  simpleMinification?: boolean,

  /**
   * A prebuilt set of options intended to perform advanced minifications on an
   * HTML page to make it smaller using more aggressive minifications that may
   * result in breaking page functionality.
   */
  advancedMinification?: boolean,

  /**
   * A prebuilt set of options intended to perform hyper minifications on an
   * HTML page applying as many minifications as possible, regardless of how
   * much functionality breaks in the process. Scripting, form submission, and
   * hyper linking functionality of the page will be broken, image quality
   * may be reduced, and rendering may differ from the original page.
   */
  hyperMinification?: boolean,
}

/**
 * The default set of HyperFiler options.
 */
const defaultOptionSet: HyperFilerOptions = {
  url: null,
  out: null,
  silent: false,
  removeStylesTags: false,
  removeAlternativeStylesTags: false,
  removeInlineStyles: false,
  removeStyles: false,
  addStyleCSP: false,
  removeScriptTags: false,
  removeNoscriptTags: false,
  removeInlineScripts: false,
  removeHrefScripts: false,
  removeScripts: false,
  addScriptCSP: false,
  removeImageSrcs: false,
  removeImageSrcsets: false,
  removeImageAlts: false,
  removeImageAttributes: false,
  removeCssImages: false,
  removeImages: false,
  addImageCSP: false,
  removeFrames: false,
  addFrameCSP: false,
  removeVideoSrcs: false,
  removeVideos: false,
  addVideoCSP: false,
  removeAudioSrcs: false,
  removeAudio: false,
  addAudioCSP: false,
  removeFonts: false,
  addFontCSP: false,
  removeCursors: false,
  removeFavicons: false,
  removeCanvas: false,
  removeConditionalComments: false,
  removeNonConditionalComments: false,
  removeComments: false,
  removeForms: false,
  removeFormAttributes: false,
  removeFormTagsOnly: false,
  removeNonDisplayMetaTags: false,
  removeNonDisplayLinkTags: false,
  removeMetaRefreshTag: false,
  removeNonInlineAnchorHrefs: false,
  removeAnchorHrefs: false,
  removeDefaultAttributes: false,
  removeAriaAttributes: false,
  removeDataAttributes: false,
  removeIntegrityCheckAttributes: false,
  removeEmptyNonDisplayElements: false,
  removeTrackingPixels: false,
  removeHiddenElements: false,
  removeCustomTagsByName: '',
  removeCustomTagsByCssSelector: '',
  removeUnusedCss: false,
  minifyHtml: false,
  minifyHtmlOptions: {
    caseSensitive: true,
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    conservativeCollapse: true,
    continueOnParseError: true,
    html5: true,
    keepClosingSlash: false,
    minifyURLs: false,
    preserveLineBreaks: false,
    removeAttributeQuotes: true,
    removeComments: true,
    removeEmptyAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    trimCustomFragments: true,
    useShortDoctype: true,
  },
  minifyCss: false,
  minifyCssOptions: {
    level: {
      1: {
        cleanupCharsets: true,
        normalizeUrls: true,
        optimizeBackground: true,
        optimizeBorderRadius: true,
        optimizeFilter: true,
        optimizeFont: true,
        optimizeFontWeight: true,
        optimizeOutline: true,
        removeEmpty: true,
        removeNegativePaddings: true,
        removeQuotes: true,
        removeWhitespace: true,
        replaceMultipleZeros: true,
        replaceTimeUnits: true,
        replaceZeroUnits: true,
        roundingPrecision: false,
        selectorsSortingMethod: 'standard',
        specialComments: 'all',
        tidyAtRules: true,
        tidyBlockScopes: true,
        tidySelectors: true,
        semicolonAfterLastProperty: false,
      },
      2: {
        mergeAdjacentRules: true,
        mergeIntoShorthands: true,
        mergeMedia: true,
        mergeNonAdjacentRules: true,
        mergeSemantically: false,
        overrideProperties: true,
        removeEmpty: true,
        reduceNonAdjacentRules: true,
        removeDuplicateFontRules: true,
        removeDuplicateMediaBlocks: true,
        removeDuplicateRules: true,
        removeUnusedAtRules: false,
        restructureRules: false,
        skipProperties: [],
      },
    },
  },
  minifyJs: false,
  minifyJsOptions: {
    compress: {
      pure_funcs: [
        'Math.abs',
        'Math.acos',
        'Math.acosh',
        'Math.asin',
        'Math.asinh',
        'Math.atan',
        'Math.atanh',
        'Math.atan2',
        'Math.cbrt',
        'Math.ceil',
        'Math.clz32',
        'Math.cos',
        'Math.cosh',
        'Math.exp',
        'Math.expm1',
        'Math.floor',
        'Math.fround',
        'Math.hypot',
        'Math.imul',
        'Math.log',
        'Math.log1p',
        'Math.log10',
        'Math.log2',
        'Math.max',
        'Math.min',
        'Math.pow',
        'Math.random',
        'Math.round',
        'Math.sign',
        'Math.sin',
        'Math.sinh',
        'Math.sqrt',
        'Math.tan',
        'Math.tanh',
        'Math.trunc',
        'Number.isNaN',
        'Number.isFinite',
        'Number.isInteger',
        'Number.isSafeInteger',
        'Number.parseFloat',
        'Number.parseInt',
        'Array.from',
        'Array.isArray',
        'Array.of',
        'Date.now',
        'Date.parse',
        'Date.UTC',
        'Error.captureStackTrace',
        'JSON.parse',
        'JSON.stringify',
        'Object.assign',
        'Object.create',
        'Object.defineProperty',
        'Object.defineProperties',
        'Object.entries',
        'Object.freeze',
        'Object.fromEntries',
        'Object.getOwnPropertyDescriptor',
        'Object.getOwnPropertyDescriptors',
        'Object.getOwnPropertyNames',
        'Object.getOwnPropertySymbols',
        'Object.getPrototypeOf',
        'Object.is',
        'Object.isExtensible',
        'Object.isFrozen',
        'Object.isSealed',
        'Object.keys',
        'Object.preventExtensions',
        'Object.seal',
        'Object.setPrototypeOf',
        'Object.values',
        'String.fromCharCode',
        'String.fromCodePoint',
      ],
    },
  },
  minifyGenericTagNames: false,
  minifyClassNames: false,
  minifyIDs: false,
  minifyClassNamesAndIDsToAttributes: false,
  beautifyHtml: false,
  beautifyHtmlOptions: {},
  beautifyCss: false,
  beautifyCssOptions: {},
  beautifyJs: false,
  beautifyJsOptions: {},
  transpileEs6ToEs5: false,
  transpileEs6ToEs5Options: {},
  convertImagesToSupportedImageFormats: false,
  minifyImages: false,
  jpegQuality: 40,
  allowWebp: false,
  webpQuality: 20,
  minifyAudio: false,
  minifyVideos: false,
  minifyFonts: false,
  removeResourceMetadata: false,
  keepResourceIfLarger: true,
  grayscaleCss: false,
  grayscaleImages: false,
  grayscaleVideos: false,
  grayscale: false,
  injectCustomStyleSheet: undefined,
  injectHtml5Polyfill: false,
  injectCssFlexboxPolyfill: false,
  injectMediaQueryPolyfill: false,
  injectHtml5MediaPolyfill: false,
  injectCanvasPolyfill: false,
  injectEs5Polyfill: false,
  injectFlashPlayer: false,
  injectCompiledPage: false,
  headers: {},
  torTransport: false,
  socksProxyAgentString: 'socks5h://localhost:9150',
  headlessBrowserTransport: false,
  headlessBrowserExecutablePath: undefined,
  headlessBrowserArgs: undefined,
  plugins: {
    beforeInitialFetch: [],
    afterInitialFetch: [],
    beforePreCssInlineRemoval: [],
    afterPreCssInlineRemoval: [],
    beforeCssInlines: [],
    afterCssInlines: [],
    beforePostCssInlineRemoval: [],
    afterPostCssInlineRemoval: [],
    beforePostCssInlineResourceFetch: [],
    afterPostCssInlineResourceFetch: [],
    beforeResourceModifications: [],
    afterResourceModifications: [],
    beforeResourceInlines: [],
    afterResourceInlines: [],
    beforeFinalInlineModifications: [],
    afterFinalInlineModifications: [],
    beforeFinalHtmlCreation: [],
    afterFinalHtmlCreation: [],
  },
  sanitize: false,
  compatibility: false,
  simpleMinification: false,
  advancedMinification: false,
  hyperMinification: false,
};

/**
 * A set of options used for sanitizing an HTML file of executable and external
 * resources.
 */
const sanitizeOptionSet: HyperFilerOptions = {
  url: null,
  removeAlternativeStylesTags: true,
  removeScripts: true,
  addScriptCSP: true,
  removeFrames: true,
  addFrameCSP: true,
  removeCanvas: true,
  removeComments: true,
  removeFormTagsOnly: true,
  removeNonDisplayMetaTags: true,
  removeNonDisplayLinkTags: true,
  removeMetaRefreshTag: true,
  removeNonInlineAnchorHrefs: true,
  removeResourceMetadata: true,
};

/**
 * A set of options for adding shims and polyfills, transpiling code, and
 * converting other page resources into formats supported by older browsers.
 */
const compatibilityOptionSet: HyperFilerOptions = {
  url: null,
  convertImagesToSupportedImageFormats: true,
  transpileEs6ToEs5: true,
  injectHtml5Polyfill: true,
  injectCssFlexboxPolyfill: true,
  injectMediaQueryPolyfill: true,
  injectHtml5MediaPolyfill: true,
  injectCanvasPolyfill: true,
  injectEs5Polyfill: true,
};

/**
 * A set of options for simple page minifications that are unlikely to break
 * any page functionality or have an effect on page rendering.
 */
const simpleMinificationOptionSet: HyperFilerOptions = {
  url: null,
  minifyHtml: true,
  minifyCss: true,
  minifyJs: true,
};

/**
 * A set of options for advanced page minifications that may break some page
 * functionality or have an effect on page rendering.
 */
const advancedMinificationOptionSet: HyperFilerOptions = {
  url: null,
  removeNonConditionalComments: true,
  removeDefaultAttributes: true,
  removeUnusedCss: true,
  removeEmptyNonDisplayElements: true,
  minifyGenericTagNames: true,
  minifyClassNamesAndIDsToAttributes: true,
  minifyImages: true,
  minifyAudio: true,
  minifyVideos: true,
  minifyFonts: true,
  removeResourceMetadata: true,
  keepResourceIfLarger: false,
};

/**
 * A set of options for hyper page minification that will very likely break
 * page functionality and have an effect on page rendering.
 */
const hyperMinificationOptionSet: HyperFilerOptions = {
  url: null,
  addScriptCSP: false,
  addFrameCSP: false,
  removeImageAlts: true,
  removeImageSrcsets: true,
  removeFonts: true,
  removeCursors: true,
  removeAriaAttributes: true,
  removeDataAttributes: true,
  removeIntegrityCheckAttributes: true,
  removeTrackingPixels: true,
  removeHiddenElements: true,
  allowWebp: true,
  injectCompiledPage: true,
};

/**
 * Various prebuilt options for running HyperFiler. Option sets are combined
 * here to create higher order HyperFiler functionality.
 */
export const HyperFilerPrebuiltOptions: {
  DEFAULT: HyperFilerOptions,
  SANITIZE: HyperFilerOptions,
  COMPATIBILITY: HyperFilerOptions,
  SIMPLE_MINIFICATION: HyperFilerOptions,
  ADVANCED_MINIFICATION: HyperFilerOptions,
  HYPER_MINIFICATION: HyperFilerOptions,
} = {
  DEFAULT: {
    ...defaultOptionSet,
  },
  SANITIZE: {
    ...defaultOptionSet,
    ...sanitizeOptionSet,
  },
  COMPATIBILITY: {
    ...defaultOptionSet,
    ...compatibilityOptionSet,
  },
  SIMPLE_MINIFICATION: {
    ...defaultOptionSet,
    ...simpleMinificationOptionSet,
  },
  ADVANCED_MINIFICATION: {
    ...defaultOptionSet,
    ...simpleMinificationOptionSet,
    ...advancedMinificationOptionSet,
  },
  HYPER_MINIFICATION: {
    ...defaultOptionSet,
    ...sanitizeOptionSet,
    ...simpleMinificationOptionSet,
    ...advancedMinificationOptionSet,
    ...hyperMinificationOptionSet,
  },
};
