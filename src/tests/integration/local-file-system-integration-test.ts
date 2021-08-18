/**
 * This file contains the source code for running an integration test using
 * an HTML page and resources on the local file system.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import * as fs from 'fs';
import * as path from 'path';
import test from 'ava';
import { HyperFiler } from '../../lib/hyperfiler';

test(
  'HyperFiler.run() => HyperFiler successfully bundles a page in the local '
+ 'file system.',
  async (t) => {
    // Describing various resources that will be linked to in the HTML page.
    const resources: { [url: string]: {
      bytes: Buffer,
    }} = {
      'test.html': {
        bytes: Buffer.from(`
          <html>
            <head>
              <link rel="shortcut icon" href="test.gif">
              <link rel="stylesheet" href="test.css">
              <script src="test.js"></script>
            </head>
            <body>
              <img src="test.jpeg">
            </body>
          </html>
        `),
      },
      'test.gif': {
        bytes: Buffer.from(
          'R0lGODdhCgAKAIABAAAAAP8AACwAAAAACgAKAAACCISPqcvtD2MrADs=',
          'base64',
        ),
      },
      'test.css': {
        bytes: Buffer.from(`
          .test1 {
            color: #000;
          }

          .test2 {
            cursor: url("test.png");
          }
        `),
      },
      'test.png': {
        bytes: Buffer.from(
          'iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAIAAAACUFjqAAAABmJLR0QA/wD/AP+gvaeTAAAADUlEQVQYlWNgGAWkAwABNgABxYufBwAAAABJRU5ErkJggg==',
          'base64',
        ),
      },
      'test.js': {
        bytes: Buffer.from(`
          console.log('test2');
        `),
      },
      'test.jpeg': {
        bytes: Buffer.from(
          '/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAKAAoDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5/ooooA//2Q==',
          'base64',
        ),
      },
    };

    // Writing all of the above resources to the local file system.
    for (const url in resources) {
      const absoluteUrl: string = path.join(__dirname, url);
      const bytes: Buffer = resources[url].bytes;

      fs.writeFileSync(absoluteUrl, bytes);
    }

    // Creating the entry and out URLs and using them to create a new
    // HyperFiler object.
    const entryUrl: string = path.join(__dirname, 'test.html');
    const outUrl: string = path.join(__dirname, 'out.html');
    const hyperFiler: HyperFiler = new HyperFiler({
      url: entryUrl,
      out: outUrl,
      silent: true,
    });

    // Running the hyper filing process.
    await hyperFiler.run();

    // Reading the outputted HyperFiler bundle from the file system.
    const bundle: string = fs.readFileSync(outUrl).toString();

    // Deleting the bundled page from the local file system.
    fs.unlinkSync(outUrl);

    // Deleting all of the resources created above from the local file system.
    for (const url in resources) {
      const absoluteUrl: string = path.join(__dirname, url);

      fs.unlinkSync(absoluteUrl);
    }

    // Running all of the tests.
    const testResult: boolean = true
      // Testing that favicon GIF was correctly encoded and added to the
      // bundle.
      && bundle
        .includes(
          `<link rel="shortcut icon" href="data:image/gif;base64,${resources['test.gif'].bytes.toString('base64')}">`,
        )

      // Testing that both the style sheet was correctly inlined, and that the
      // cursor in the style sheet was correctly encoded and added to the
      // bundle.
      && bundle
        .includes(
          `cursor:url("data:image/png;base64,${resources['test.png'].bytes.toString('base64')}")`,
        )

      // Testing that the script was correctly inlined.
      && bundle
        .match(/<script>.*?<[/]script>/gms)
        .pop()
        .includes(resources['test.js'].bytes.toString())

      // Testing that JPEG image was correctly encoded and added to the bundle.
      && bundle
        .includes(
          `<img src="data:image/jpeg;base64,${resources['test.jpeg'].bytes.toString('base64')}">`,
        );

    t.is(testResult, true);
  },
);
