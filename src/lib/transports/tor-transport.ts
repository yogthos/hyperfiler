/**
 * This file contains the source code for fetching resources over the Tor
 * network using a Tor proxy.
 *
 * @author ChowderMan
 * @license AGPLv3
 */

import axios, { AxiosResponse } from 'axios';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { ResourceResponse } from '../resource';

/**
 * Fetches a single resource at the given HTTP(S) URL through the Tor network.
 * If no `socksProxyAgentString` is specified, the default proxy will be
 * through an open instance of the Tor Browser. Additionally, if no headers are
 * specified, the default `User-Agent` and `Accept-Language` header will be the
 * ones found in the Tor Browser.
 *
 * @param absoluteUrl the absolute URL of the Resource that will be fetched.
 * @param socksProxyAgentString the socks proxy agent. See the
 * `socks-proxy-agent` library for additional info on this parameter.
 * @returns the bytes and status of the fetch.
 */
export async function fetchTorResource(
  absoluteUrl: string,
  headers: { [header: string]: string },
  socksProxyAgentString: string = 'socks5h://localhost:9150',
) : Promise<ResourceResponse> {
  // Setting default headers found in the Tor Browser as of 2021-04 if these
  // headers are not specified.
  if (!headers['User-Agent']) {
    headers['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; rv:78.0) Gecko/20100101 Firefox/78.0';
  }

  if (!headers['Accept-Language']) {
    headers['Accept-Language'] = 'en-US,en;q=0.5';
  }

  // Creating a socks5 proxy agent to proxy through the Tor network.
  const socksProxyAgent: SocksProxyAgent = new SocksProxyAgent(
    socksProxyAgentString,
  );

  // Trying to fetch a using at a give HTTP(S) or Onion URL. If the fetch
  // fails, return null bytes and a failed status.
  let response: AxiosResponse;

  try {
    response = await axios.get(absoluteUrl, {
      responseType: 'arraybuffer',
      httpsAgent: socksProxyAgent,

      // Setting the headers for the request.
      headers,
    });
  } catch (error: unknown) {
    const bytes: Buffer = null;
    const status: boolean = false;
    const statusCode: number = 404;

    return {
      bytes,
      status,
      statusCode,
    };
  }

  // If the fetch succeeded, check the HTTP status code to determine the bytes
  // were correctly fetched.
  const statusCode: number = response.status;
  const status: boolean = statusCode >= 200 && statusCode < 300;

  // If bytes were fetched, returning the fetched bytes.
  if (status === true) {
    const bytes: Buffer = Buffer.from(response.data);

    return {
      bytes,
      status,
      statusCode,
    };
  }

  // If the bytes were not fetched and something failed, return null bytes and
  // a failed status.
  const bytes: Buffer = null;

  return {
    bytes,
    status,
    statusCode,
  };
}
