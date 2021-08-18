/**
 * This file contains the source code for fetching resources using a headless
 * browser.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
import { Browser } from 'puppeteer-core';
import { ResourceResponse } from '../resource';
export declare function fetchHeadlessBrowserResource(browser: Browser, absoluteUrl: string): Promise<ResourceResponse>;
//# sourceMappingURL=headless-browser-transport.d.ts.map