"use strict";
/**
 * This file contains the source code for running the HyperFiler program from
 * the command line.
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
/* eslint-disable prefer-template */
const commander_1 = require("commander");
const index_1 = require("./lib/index");
if (require.main === module) {
    (() => __awaiter(void 0, void 0, void 0, function* () {
        // Creating the CLI program.
        const program = new commander_1.Command();
        // Setting the version number.
        program.version('1.1.3', '-v, --version');
        // Adding all of the arguments to the CLI.
        program
            .arguments('<url>')
            .description(String.raw `
               _    _                       ______ _ _           
              | |  | |                     |  ____(_) |          
              | |__| |_   _ _ __   ___ _ __| |__   _| | ___ _ __ 
              |  __  | | | | '_ \ / _ \ '__|  __| | | |/ _ \ '__|
              | |  | | |_| | |_) |  __/ |  | |    | | |  __/ |   
              |_|  |_|\__, | .__/ \___|_|  |_|    |_|_|\___|_|   
                       __/ | |                                   
                      |___/|_|                                   
        `
            + '\n'
            + 'HyperFiler is a program for bundling web page into a single HTML '
            + 'file. All style sheets, scripts, images, audio files, videos '
            + 'favicons, cursors, and all other page resources are encoded and '
            + 'included in the HTML page bundle, allowing you to easily package, '
            + 'share, and archive web pages and apps.', {
            url: 'The URL of the page that will be bundled. Can be either a '
                + 'network URL (such as https://example.com) or a file URL (such '
                + 'as ./file.html or C:\\file.html).',
        });
        // Adding all of the options. These options and the description of the
        // options should mirror the options in the `hyperfiler-options.ts` file.
        program
            // Meta options.
            .option('-o --out <type>', 'The path of the file that the single HTML bundle will be written to.')
            .option('-s --silent', 'Silences all of the console output.')
            .option('-c --check-dependencies', 'Checks which dependencies used by HyperFiler are available on the '
            + 'platform.')
            // Remover and CSP options.
            .option('--remove-style-tags', 'Removes `<style>` tags from the HTML page.')
            .option('--remove-alternative-styles-tags', 'Removes alternative style sheets from the HTML page.')
            .option('--remove-inline-styles', 'Removes inline `style` attributes.')
            .option('--remove-styles', 'Removes all styles from the HTML page.')
            .option('--add-style-csp', 'Sets a style `Content-Security-Policy` to block styles.')
            .option('--remove-script-tags', 'Removes `<script>` tags from the HTML page.')
            .option('--remove-noscript-tags', 'Removes `<noscript>` tags from the HTML page.')
            .option('--remove-inline-scripts', 'Removes inline script event handler `on*` attributes and `href` '
            + 'attributes with `javascript:` protocols.')
            .option('--remove-href-scripts', 'Removes scripts in the `href` attributes that use the `javascript:` '
            + 'protocol.')
            .option('--remove-scripts', 'Removes all scripts from the HTML page.')
            .option('--add-script-csp', 'Sets a script `Content-Security-Policy` to block scripts.')
            .option('--remove-image-srcs', 'Removes the `src` attribute from image tags.')
            .option('--remove-image-srcsets', 'Removes the `srcset` attribute from image tags.')
            .option('--remove-image-alts', 'Removes the `alt` attribute from image tags.')
            .option('--remove-image-attributes', 'Removes `src`, `srcset`, and `alt` attributes from image tags.')
            .option('--remove-css-images', 'Removes images from CSS style sheets.')
            .option('--remove-images', 'Removes all images from the HTML page, including in the CSS style '
            + 'sheets.')
            .option('--add-image-csp', 'Sets an image `Content-Security-Policy` to block images.')
            .option('--remove-frames', 'Removes all frames from the HTML page.')
            .option('--add-frame-csp', 'Sets a frame `Content-Security-Policy` to block frames.')
            .option('--remove-video-srcs', 'Removes the `src` attribute from video tags.')
            .option('--remove-videos', 'Removes all videos from the HTML page.')
            .option('--add-video-csp', 'Sets a video `Content-Security-Policy` to block videos.')
            .option('--remove-audio-srcs', 'Removes the `src` attribute from audio tags.')
            .option('--remove-audio', 'Removes all audio from the HTML page.')
            .option('--add-audio-csp', 'Sets an audio `Content-Security-Policy` to block audio.')
            .option('--remove-fonts', 'Removes all fonts from the HTML page.')
            .option('--add-font-csp', 'Sets a font `Content-Security-Policy` to block fonts.')
            .option('--remove-cursors', 'Removes all cursors from the HTML page.')
            .option('--remove-favicons', 'Removes all favicons from the HTML page.')
            .option('--remove-canvas', 'Removes all `<canvas>` tags from the HTML page.')
            .option('--remove-conditional-comments', 'Removes conditional comments from the HTML page.')
            .option('--remove-non-conditional-comments', 'Removes non-conditional comments from the HTML page.')
            .option('--remove-comments', 'Removes all comments from the HTML page.')
            .option('--remove-forms', 'Removes all `<form>` tags from the HTML page.')
            .option('--remove-form-attributes', 'Removes all attributes from `<form>` tags in the HTML page.')
            .option('--remove-form-tags-only', 'Removes `<form>` tags, but no nested tags, from the HTML page.')
            .option('--remove-non-display-meta-tags', 'Removes non-display `<meta>` tags from the HTML page.')
            .option('--remove-non-display-link-tags', 'Removes non-display `<link>` tags from the HTML page.')
            .option('--remove-meta-refresh-tag', 'Removes refresh `<meta>` tags from the HTML page.')
            .option('--remove-non-inline-anchor-hrefs', 'Removes the `href` attribute from `<a>` tags that link to external '
            + 'files, but not the links to internal sections of the HTML page.')
            .option('--remove-anchor-hrefs', 'Removes the `href` attribute from `<a>` tags.')
            .option('--remove-default-attributes', 'Removes any redundant default attributes from all tags in the HTML '
            + 'page.')
            .option('--remove-aria-attributes', 'Removes all WAI-ARIA attributes from the HTML page.')
            .option('--remove-data-attributes', 'Removes all Data attributes from the HTML page.')
            .option('--remove-integrity-check-attributes', 'Removes all integrity check attributes from the HTML page.')
            .option('--remove-empty-non-display-elements', 'Removes empty elements that don\'t have an effect on page rendering. '
            + 'For example, and empty `<style></style>` will be removed.')
            .option('--remove-tracking-pixels', 'Removes all tracking pixels from the HTML page.')
            .option('--remove-hidden-elements', 'Removes all hidden elements from the HTML page.')
            .option('--remove-custom-tags-by-name <type>', 'Removes all tags from the HTML page in the provided pipe-delimited '
            + 'string of custom tags. For example, `foo|bar` will remove all `<foo>` '
            + 'and `<bar>` tags. When used programmatically, a JavaScript string[] '
            + 'array can be used.')
            .option('--remove-custom-tags-by-css-selector <type>', 'Removes all tags from the HTML page in the provided pipe-delimited '
            + 'string of custom CSS selectors. For example, `[foo]|[bar]` will '
            + 'remove all tags with the `foo` attribute and all tags with the `bar` '
            + 'attribute. When used programmatically, a JavaScript string[] array '
            + 'can be used.')
            .option('--remove-unused-css', 'Removes all CSS code from the style sheets that are no used in the '
            + 'HTML page.')
            // Text minifier options.
            .option('--collapse-empty-attributes', 'Collapses empty HTML attribute values. For example, '
            + '`<input type="radio" checked="">` will collapse the empty attribute '
            + 'into `<input type="radio" checked>`.')
            .option('--minify-html', 'Minifies the HTML in the HTML page.')
            .option('--minify-css', 'Minifies the CSS in the HTML page.')
            .option('--minify-js', 'Minifies the JavaScript in the HTML page.')
            .option('--minify-generic-tag-names', 'Minifies tag names for non-semantic elements such as `<div>` and '
            + '`<span>`.')
            .option('--minify-class-names', 'Minifies all class names in the stylesheets and HTML page.')
            .option('--minify-ids', 'Minifies all IDs in the stylesheets and HTML page.')
            .option('--minify-class-names-and-ids-to-attributes', 'Minifies all class names and IDs in the stylesheets and HTML page '
            + 'into attributes and CSS attribute selectors.')
            // Text beautifier options.
            .option('--beautify-html', 'Beautifies the HTML in the HTML page.')
            .option('--beautify-css', 'Beautifies the CSS in the HTML page.')
            .option('--beautify-js', 'Beautifies the JavaScript in the HTML page.')
            // Image options.
            .option('--convert-images-to-supported-image-formats', 'Converts all images in the HTML into formats supported by most '
            + 'browsers (PNG, JPEG, and GIF). For example, WEBP and TIFF images '
            + 'will be converted, as these types are only supported by a subset of '
            + 'browsers')
            .option('--minify-images', 'Minifies images in the HTML page.')
            .option('--jpeg-quality', 'When minifying images, sets the JPEG quality value. The default value '
            + 'is `40`.')
            .option('--allow-webp', 'When minifying images, allows the conversion to the WEBP image to '
            + 'improve minification. By default the WEBP image type will not be '
            + 'used.')
            .option('--webp-quality', 'When minifying images, sets the WEBP quality value. The default '
            + 'value is `20`.')
            // Audio and video options.
            .option('--minify-audio', 'Minifies audio in the HTML page.')
            .option('--minify-videos', 'Minifies videos in the HTML page.')
            // Font options.
            .option('--minify-fonts', 'Minifies fonts in the HTML page.')
            // General resource options.
            .option('--remove-resource-metadata', 'Remove metadata from resources in the HTML page.')
            .option('--keep-resource-if-larger', 'When removing resource metadata, if set will keep the new resource '
            + 'with the removed metadata even if the resource is larger after the '
            + 'modification.')
            // Transpilation options.
            .option('--transpile-es6-to-es5', 'Transpiles ES6 to ES5 JavaScript code in the HTML page.')
            // Grayscale options.
            .option('--grayscale-css', 'Grayscales all CSS colors in the HTML page.')
            .option('--grayscale-images', 'Grayscales all images in the HTML page.')
            .option('--grayscale-videos', 'Grayscales all videos in the HTML page.')
            .option('--grayscale', 'Grayscales the HTML page, including CSS colors, images, and videos.')
            // Injection options.
            .option('--inject-custom-style-sheet <type>', 'Injects a custom style sheet into the HTML page.')
            .option('--inject-html5-polyfill', 'Injects an HTML5 polyfill into the HTML page.')
            .option('--inject-css-flexbox-polyfill', 'Injects a CSS flexbox polyfill into the HTML page.')
            .option('--inject-media-query-polyfill', 'Injects a media query polyfill into the HTML page.')
            .option('--inject-html5-media-polyfill', 'Injects a `<video>` and `<audio>` tag polyfill into the HTML page.')
            .option('--inject-canvas-polyfill', 'Injects a `<canvas>` tag polyfill into the HTML page.')
            .option('--inject-es5-polyfill', 'Injects an ES5 shim polyfill into the HTML page.')
            .option('--inject-flash-player', 'Injects a Ruffle flash player into that page that will play flash '
            + 'content embedded in the page.')
            .option('--inject-compiled-page', 'Injects a compiled version of the HTML page as a self-extracting '
            + 'script into the HTML page.')
            // Transport options.
            .option('--headers <type>', 'A pipe-delimited string of HTTP headers used in the requests. For '
            + 'example, `User-Agent:custom-ua|Accept-Language:en-US` will pass '
            + '`User-Agent` with the value `custom-ua` and `Accept-Language` with '
            + 'the value `en-US` as headers in the request. When used '
            + 'programmatically, a JavaScript object of '
            + '{ [header: string]: string } can be used.')
            .option('--tor-transport', 'Uses the Tor network when fetching the HTML page and all the page '
            + 'resources.')
            .option('--socks-proxy-agent-string <type>', 'Specifies the socks proxy agent when using the Tor transport. The '
            + 'default value uses an open instance of the Tor browser (using the '
            + '`socks5h://localhost:9150` agent).')
            .option('--headless-browser-transport', 'Uses a headless browser when fetching the HTML page and all the page '
            + 'resources. Note that if this option is specified, the executable '
            + 'path must be specified using the '
            + '`--headless-browser-executable-path` argument. Additional arguments '
            + 'may be passed to the headless browser via the '
            + '`--headless-browser-args` path as a pipe-separated string. '
            + 'Additionally, if the `--tor-transport` argument is specified, '
            + 'resources will be fetched using the Tor network on '
            + 'chromium-based browsers.')
            .option('--headless-browser-executable-path <type>', 'The path to the headless browser executable.')
            .option('--headless-browser-args <type>', 'Arguments passed to the headless browser as a pipe-separated string. '
            + 'For example, `--headless-browser-args "--arg1 value1|--arg2 value2"` '
            + 'will pass the arguments `--arg1 value1` and `--arg2 value2` to the '
            + 'headless browser.')
            // Prebuilt HyperFiler option sets.
            .option('--sanitize', 'A prebuilt set of options intended to sanitize an HTML page by '
            + 'removing scripts, frames, canvases, comments, forms, and resource '
            + 'metadata, as well as adding security policies to block scripts and '
            + 'frames in order to make the page safe for offline viewing.')
            .option('--compatibility', 'A prebuilt set of options intended to polyfill an HTML page and '
            + 'convert resources in the page into formats compatible with older '
            + 'browsers.')
            .option('--simple-minification', 'A prebuilt set of options intended to perform simple minifications '
            + 'on an HTML page to make it smaller without breaking any page '
            + 'functionality.')
            .option('--advanced-minification', 'A prebuilt set of options intended to perform advanced minifications '
            + 'on an HTML page to make it smaller using more aggressive '
            + 'minifications that may result in breaking page functionality.')
            .option('--hyper-minification', 'A prebuilt set of options intended to perform hyper minifications on '
            + 'an HTML page applying as many minifications as possible, regardless '
            + 'of how much functionality breaks in the process. Scripting, form '
            + 'submission, and hyper linking functionality of the page will be '
            + 'broken, image quality may be reduced, and rendering may differ from '
            + 'the original page.');
        // Parsing out the passed arguments and options.
        program.parse(process.argv);
        const args = program.args;
        const options = program.opts();
        // Checking if no arguments are provided, and printing the help message if
        // this is the case.
        const noArgumentsProvides = (program.args.length === 0);
        if (noArgumentsProvides === true) {
            program.help();
        }
        // If the `-c` or `--check-dependencies` argument is provided, check the
        // dependencies and stop execution of the program.
        if (options.checkDependencies === true) {
            index_1.checkHyperFilerDependencies();
            process.exit();
        }
        // Creating hyper filer options from the passed options.
        const hyperFilerOptions = Object.assign({ url: args[0] }, options);
        // Creating the hyper filer object and running the hyper filing process.
        const hyperFiler = new index_1.HyperFiler(hyperFilerOptions);
        yield hyperFiler.run();
    }))();
}
//# sourceMappingURL=cli.js.map