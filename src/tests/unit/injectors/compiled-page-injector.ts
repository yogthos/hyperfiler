/**
 * This file contains the source code for running unit tests on the compiled
 * page injector functionality.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import test from 'ava';
import { JSDOM } from 'jsdom';
import {
  injectCompiledPage,
} from '../../../lib/injectors/compiled-page-injector';

test(
  'injectCompiledPage() => A compiled version of the page is injected into '
+ 'the document.',
  async (t) => {
    const html: string = `
      <html>
        <body>
          <p>test</p>
        </body>
      </html>
    `;

    const document = new JSDOM(html).window.document;

    injectCompiledPage(document);

    const testResult: boolean = document
      .documentElement
      .outerHTML
      .includes('t(T<80.07?000000015U2=');

    t.is(testResult, true);
  },
);
