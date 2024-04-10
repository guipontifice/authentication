/**
 * An array of routes that are public
 * Do not require authentication
 * @type {string[]}
 */

import path from "path";

export const publicRoutes = [
    "/",
    "/auth/new-verification"
]

/**
 * An array of routes that are protected
 * Require authentication
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
]

export const apiAuthPrefix = "/api/auth";

/**
* Default redirecting path after login
*/
export const DEFAULT_LOGIN_REDIRECT = "/settings";