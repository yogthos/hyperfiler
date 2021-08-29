/**
 * This file contains the source code for running unit tests on internal
 * HyperFiler methods.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import test from 'ava';
import { JSDOM } from 'jsdom';
import { HyperFiler } from '../../lib/hyperfiler';
import { ResourceCache, ResourceType } from '../../lib/resource';

test(
  'HyperFiler.getProtocol() => `http:` returned from `http://test.test/`.',
  async (t) => {
    const baseUrl: string = 'http://test.test/';
    const url: string = 'http://test.test/';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const protocol: string = hyperFiler.getProtocol(url);

    t.is(protocol === 'http:', true);
  },
);

test(
  'HyperFiler.getProtocol() => `file:` returned from `./test.html`.',
  async (t) => {
    const baseUrl: string = './test.html';
    const url: string = './test.html';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const protocol: string = hyperFiler.getProtocol(url);

    t.is(protocol === 'file:', true);
  },
);

test(
  'HyperFiler.getProtocol() => `data:` returned from `data:test`.',
  async (t) => {
    const baseUrl: string = 'data:test';
    const url: string = 'data:test';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const protocol: string = hyperFiler.getProtocol(url);

    t.is(protocol === 'data:', true);
  },
);

test(
  'HyperFiler.getProtocol() => `http:` returned from `test.html` with base '
+ 'URL of `http://test.test`.',
  async (t) => {
    const baseUrl: string = 'http://test.test';
    const url: string = 'test.html';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const protocol: string = hyperFiler.getProtocol(url);

    t.is(protocol === 'http:', true);
  },
);

test(
  'HyperFiler.getProtocol() => `http:` returned from '
+ '`http://test.test/:/file:test.html`',
  async (t) => {
    const baseUrl: string = 'http://test.test/:/file:test.html';
    const url: string = 'http://test.test/:/file:test.html';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const protocol: string = hyperFiler.getProtocol(url);

    t.is(protocol === 'http:', true);
  },
);

test(
  'HyperFiler.correctUrl() => Corrects backslashes in `\\\\test.html` to '
+ 'forward slashes `//test.html`.',
  async (t) => {
    const baseUrl: string = 'http://test.test';
    const url: string = '\\\\test.html';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const correctedUrl: string = hyperFiler.correctUrl(url);

    t.is(correctedUrl === '//test.html', true);
  },
);

test(
  'HyperFiler.resolveAbsoluteUrl() => Absolute URL `http://test.test` '
+ 'resolved to `http://test.test` with base URL `http://base.test`.',
  async (t) => {
    const baseUrl: string = 'http://base.test';
    const url: string = 'http://test.test';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const resolvedUrl: string = hyperFiler.resolveAbsoluteUrl(url);

    t.is(resolvedUrl === 'http://test.test', true);
  },
);

test(
  'HyperFiler.resolveAbsoluteUrl() => Relative URL `test.html` resolved to '
+ '`http://base.test/test.html` with base URL `http://base.test`.',
  async (t) => {
    const baseUrl: string = 'http://base.test';
    const url: string = 'test.html';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const resolvedUrl: string = hyperFiler.resolveAbsoluteUrl(url);

    t.is(resolvedUrl === 'http://base.test/test.html', true);
  },
);

test(
  'HyperFiler.createCacheResource() => A single resource is successfully '
+ 'added to the resource cache.',
  async (t) => {
    const baseUrl: string = 'http://test.test';
    const url: string = 'test.png';
    const hyperFiler = new HyperFiler({ url: baseUrl });
    const type: ResourceType = ResourceType.IMAGE;
    hyperFiler.createCacheResource(url, type);

    t.is(Object.keys(hyperFiler.resourceCache).length === 1, true);
  },
);

test(
  'HyperFiler.createSubCache() => A single image resource is added to the '
+ 'resource cache, and a subcache is successfully created with that image '
+ 'resource.',
  async (t) => {
    const baseUrl: string = 'http://test.test';
    const hyperFiler = new HyperFiler({ url: baseUrl });

    hyperFiler.createCacheResource('test.png', ResourceType.IMAGE);
    hyperFiler.createCacheResource('test.ogg', ResourceType.AUDIO);
    hyperFiler.createCacheResource('test.js', ResourceType.SCRIPT);

    const imageCache: ResourceCache = hyperFiler.createSubCache(
      ResourceType.IMAGE,
    );

    t.is(imageCache['test.png'] !== undefined, true);
  },
);

test(
  'HyperFiler.cacheCss() => All CSS resources are added to the cache.',
  async (t) => {
    const html: string = `
      <html>
        <head>
          <link rel="stylesheet" href="test1.css">
          <link rel="stylesheet" href="/test2.css">
          <link rel="stylesheet" href="http://test.test/test3.css">
        </head>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheCss();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test1.css'] !== undefined
      && hyperFiler.resourceCache['/test2.css'] !== undefined
      && hyperFiler.resourceCache['http://test.test/test3.css'] !== undefined;

    t.is(testResult, true);
  },
);

test(
  'HyperFiler.cacheScripts() => All script resources are added to the cache.',
  async (t) => {
    const html: string = `
      <html>
        <head>
          <script src="test1.js"></script>
          <script src="/test2.js"></script>
          <script src="http://test.test/test3.js"></script>
        </head>
        <body>
          <script src="test4.js"></script>
        </body>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheScripts();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test1.js'] !== undefined
      && hyperFiler.resourceCache['/test2.js'] !== undefined
      && hyperFiler.resourceCache['http://test.test/test3.js'] !== undefined
      && hyperFiler.resourceCache['test4.js'] !== undefined;

    t.is(testResult, true);
  },
);

test(
  'HyperFiler.cacheHtmlImages() => All images in HTML tags are added to the '
+ 'cache.',
  async (t) => {
    const html: string = `
      <html>
        <head>
          <style>
              [test] {
                background-image: url("test1.gif");
              }
          </style>
        </head>
        <body>
          <img src="test2.png">
          <img src="/test3.jpeg" />
          <picture>
            <source src="http://test.test/test4.tiff"></source>
            <img src="test5.webp">
          </picture>
          <img
            src="test6.png" 
            srcset="
              test7.png 1x,
              test8.svg 2x
            "
          >
        </body>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheHtmlImages();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test2.png'] !== undefined
      && hyperFiler.resourceCache['/test3.jpeg'] !== undefined
      && hyperFiler.resourceCache['http://test.test/test4.tiff'] !== undefined
      && hyperFiler.resourceCache['test5.webp'] !== undefined
      && hyperFiler.resourceCache['test6.png'] !== undefined
      && hyperFiler.resourceCache['test7.png'] !== undefined
      && hyperFiler.resourceCache['test8.svg'] !== undefined;

    t.is(testResult, true);
  },
);

test(
  'HyperFiler.cacheCssImages() => All images in the CSS stylesheets are added '
+ 'to the cache.',
  async (t) => {
    const html: string = `
      <html>
        <head>
          <style>
            [test1] {
              background-image: url("test1.png");
            }

            [test2] {
              border-image: url(http://test.test/test2.png);
            }
          </style>
        </head>
        <body></body>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheCssImages();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test1.png'] !== undefined
      && hyperFiler.resourceCache['http://test.test/test2.png'] !== undefined;

    t.is(testResult, true);
  },
);

test(
  'HyperFiler.cacheAudio() => All audio files in the document are added to '
+ 'the cache.',
  async (t) => {
    const html: string = `
      <html>
        <body>
          <audio src="test1.ogg"></audio>
          <audio>
            <source src="/test2.ogg"></source>
            <source src="http://test.test/test3.mp3"></source>
          </audio>
        </body>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheAudio();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test1.ogg'] !== undefined
      && hyperFiler.resourceCache['/test2.ogg'] !== undefined
      && hyperFiler.resourceCache['http://test.test/test3.mp3'] !== undefined;

    t.is(testResult, true);
  },
);

test(
  'HyperFiler.cacheVideos() => All videos in the document are added to the '
+ 'cache.',
  async (t) => {
    const html: string = `
      <html>
        <body>
          <video src="test1.mp4"></video>
          <video>
            <source src="/test2.mkv"></source>
            <source src="http://test.test/test3.webm"></source>
          </video>
        </body>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheVideos();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test1.mp4'] !== undefined
      && hyperFiler.resourceCache['/test2.mkv'] !== undefined
      && hyperFiler.resourceCache['http://test.test/test3.webm'] !== undefined;

    t.is(testResult, true);
  },
);

test(
  'HyperFiler.cacheFonts() => All fonts in the CSS style sheets are added to '
+ 'the cache.',
  async (t) => {
    const html: string = `
      <html>
        <head>
          <style>
            @font-face {
              src: url("test1.tff") format("tff")
                   url("/test2.woff") format("woff")
                   url("http://test.test/test3.woff2") format("woff2");
            }

            @font-face {
              src: url(test4.otf);
            }
          </style>
        </head>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheFonts();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test1.tff'] !== undefined
      && hyperFiler.resourceCache['/test2.woff'] !== undefined
      && hyperFiler.resourceCache['http://test.test/test3.woff2'] !== undefined
      && hyperFiler.resourceCache['test4.otf'] !== undefined;

    t.is(testResult, true);
  },
);

test(
  'HyperFiler.cacheCursors() => All cursors in the CSS style sheets are added '
+ 'to the cache.',
  async (t) => {
    const html: string = `
      <html>
        <head>
          <style>
            [test1] {
              cursor: url(test1.cur) url(/test2.png);
            }

            [test2] {
              cursor: url('http://test.test/test3.svg');
            }
          </style>
        </head>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheCursors();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test1.cur'] !== undefined
      && hyperFiler.resourceCache['/test2.png'] !== undefined
      && hyperFiler.resourceCache['http://test.test/test3.svg'] !== undefined;

    t.is(testResult, true);
  },
);

test(
  'HyperFiler.cacheFavicons() => All favicons in the document are added to '
+ 'the cache.',
  async (t) => {
    const html: string = `
      <html>
        <head>
          <link rel="icon" href="test1.png">
          <link rel="shortcut icon" href="/test2.png">
          <link rel="apple-touch-icon" href="test3.svg">
          <link rel="apple-touch-startup-image" href="test4.ico">
          <link rel="apple-touch-icon-precomposed" href="test5.png">
        </head>
      </html>
    `;

    const document: Document = new JSDOM(html).window.document;
    const hyperFiler = new HyperFiler({ url: '' });
    hyperFiler.document = document;

    hyperFiler.cacheFavicons();

    const testResult: boolean = true
      && hyperFiler.resourceCache['test1.png'] !== undefined
      && hyperFiler.resourceCache['/test2.png'] !== undefined
      && hyperFiler.resourceCache['test3.svg'] !== undefined
      && hyperFiler.resourceCache['test4.ico'] !== undefined
      && hyperFiler.resourceCache['test5.png'] !== undefined;

    t.is(testResult, true);
  },
);
