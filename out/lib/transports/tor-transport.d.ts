/**
 * This file contains the source code for fetching resources over the Tor
 * network using a Tor proxy.
 *
 * @author ChowderMan
 * @license AGPLv3
 */
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
export declare function fetchTorResource(absoluteUrl: string, headers: {
    [header: string]: string;
}, socksProxyAgentString?: string): Promise<ResourceResponse>;
//# sourceMappingURL=tor-transport.d.ts.map