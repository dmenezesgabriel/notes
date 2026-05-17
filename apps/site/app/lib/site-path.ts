const PUBLIC_BASE_PATH = '/notes';

interface SplitPathResult {
  pathname: string;
  search: string;
  hash: string;
}

function splitPath(rawPath: string): SplitPathResult {
  let path = rawPath.trim();
  let hash = '';
  let search = '';

  const hashIndex = path.indexOf('#');
  if (hashIndex !== -1) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  const searchIndex = path.indexOf('?');
  if (searchIndex !== -1) {
    search = path.slice(searchIndex);
    path = path.slice(0, searchIndex);
  }

  if (!path.startsWith('/')) {
    path = `/${path}`;
  }

  return {
    pathname: path || '/',
    search,
    hash,
  };
}

function stripPublicBasePath(pathname: string): string {
  if (pathname === PUBLIC_BASE_PATH || pathname === `${PUBLIC_BASE_PATH}/`) {
    return '/';
  }

  if (pathname.startsWith(`${PUBLIC_BASE_PATH}/`)) {
    return pathname.slice(PUBLIC_BASE_PATH.length) || '/';
  }

  return pathname || '/';
}

function maybeAddTrailingSlash(pathname: string): string {
  if (pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname : `${pathname}/`;
}

/**
 * Returns a public URL path used by raw anchors/web components.
 * The public site contract is always `/notes/...`, including in local dev.
 */
export function publicPath(rawPath: string): string {
  const { pathname, search, hash } = splitPath(rawPath);
  const normalizedPath = stripPublicBasePath(pathname);
  const prefixedPath =
    normalizedPath === '/' ? PUBLIC_BASE_PATH : `${PUBLIC_BASE_PATH}${normalizedPath}`;
  const finalPath = maybeAddTrailingSlash(prefixedPath);

  return `${finalPath}${search}${hash}`;
}

/**
 * Returns a route path for Next.js Link/router usage.
 * Next.js adds the `/notes` basePath automatically, so callers should stay
 * root-relative inside the app router.
 */
export function linkPath(rawPath: string): string {
  const { pathname, search, hash } = splitPath(rawPath);
  const normalizedPath = stripPublicBasePath(pathname);
  const finalPath = maybeAddTrailingSlash(normalizedPath);

  return `${finalPath}${search}${hash}`;
}
