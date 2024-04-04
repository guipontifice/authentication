/**
 * An array of routes that are public
 * Do not require authentication
 * @type {string[]}
 */

import path from "path";

export const publicRoutes = [
    "/"
]

/**
 * An array of routes that are protected
 * Require authentication
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
]

export const apiAuthPrefix = "/api/auth";

/**
* Default redirecting path after login
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";