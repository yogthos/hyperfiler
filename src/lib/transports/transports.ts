/**
 * This file contains the source code for fetching resources using a variety
 * of different protocols and transport options.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import { logger } from '../logger';
import { ResourceResponse, TransportOptions } from '../resource';
import { fetchFileResource } from './file-transport';
import { fetchHttpResource } from './http-transport';
import { fetchHeadlessBrowserResource } from './headless-browser-transport';
import { fetchTorResource } from './tor-transport';
import { fetchDataResource } from './data-transport';

/**
 * Fetches a single resource at a given URL using the protocol specified.
 *
 * @param absoluteUrl the absolute URL of the resource that will be fetched.
 * @param protocol the protocol of the resource that will be fetched.
 * @param options additional options used to modify the transport.
 */
export async function fetchResource(
  absoluteUrl: string,
  protocol: string,
  options?: TransportOptions,
) : Promise<ResourceResponse> {
  // Creating the empty resource response.
  let response: ResourceResponse;

  // Fetching the resource using the protocol and options specified. If a case
  // for the protocol is not found, a default failed status and null bytes will
  // be returned.
  switch (protocol) {
    case 'file:': {
      response = await fetchFileResource(absoluteUrl);

      break;
    }

    case 'http:':
    case 'https:': {
      if (options.headlessBrowserTransport) {
        response = await fetchHeadlessBrowserResource(
          options.browser,
          absoluteUrl,
        );
      } else if (options.torTransport) {
        response = await fetchTorResource(
          absoluteUrl,
          options.headers,
          options.socksProxyAgentString,
        );
      } else {
        response = await fetchHttpResource(absoluteUrl, options.headers);
      }

      break;
    }

    case 'data:': {
      response = await fetchDataResource(absoluteUrl);

      break;
    }

    default: {
      const bytes: Buffer = null;
      const status: boolean = false;
      const statusCode: number = 404;

      response = {
        bytes,
        status,
        statusCode,
      };
    }
  }

  // Logging the result of the fetch to the logger.
  if (response.status === true) {
    logger.log(
      'ok',
      `Fetched (${response.statusCode}) => ${absoluteUrl}`,
      { depth: 1 },
    );
  } else {
    logger.log(
      'error',
      `Failed  (${response.statusCode}) => ${absoluteUrl}`,
      { depth: 1 },
    );
  }

  return response;
}
