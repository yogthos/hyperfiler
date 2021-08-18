"use strict";
/**
 * This file contains the source code for running unit tests on the compiled
 * page injector functionality.
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
const ava_1 = require("ava");
const jsdom_1 = require("jsdom");
const compiled_page_injector_1 = require("../../../lib/injectors/compiled-page-injector");
ava_1.default('injectCompiledPage() => A compiled version of the page is injected into '
    + 'the document.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const html = `
      <html>
        <body>
          <p>test</p>
        </body>
      </html>
    `;
    const document = new jsdom_1.JSDOM(html).window.document;
    compiled_page_injector_1.injectCompiledPage(document);
    const testResult = document
        .documentElement
        .outerHTML
        .includes('t(T<80.07?000000015U2=');
    t.is(testResult, true);
}));
//# sourceMappingURL=compiled-page-injector.js.map