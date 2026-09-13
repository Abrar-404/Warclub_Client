const isLocal =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1');

export const LOCAL_API_URL = 'http://localhost:5001';
export const CLOUD_API_URL = 'https://server-sigma-ten-76.vercel.app';

export const API_BASE_URL = isLocal ? LOCAL_API_URL : CLOUD_API_URL;

/**
 * Robust fetch helper that:
 * - Uses localhost in local dev (falling back to cloud if local server is down)
 * - Directly uses the production cloud API when deployed to avoid Mixed Content errors
 */
export async function apiFetch(endpoint, options = {}) {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

  if (!isLocal) {
    return await fetch(`${CLOUD_API_URL}${cleanEndpoint}`, options);
  }

  try {
    const res = await fetch(`${LOCAL_API_URL}${cleanEndpoint}`, options);
    if (!res.ok && res.status >= 500) {
      throw new Error(`Local server returned ${res.status}`);
    }
    return res;
  } catch (localErr) {
    console.warn(
      `[apiFetch] Local server unreachable (${LOCAL_API_URL}${cleanEndpoint}), falling back to cloud:`,
      localErr.message
    );
    return await fetch(`${CLOUD_API_URL}${cleanEndpoint}`, options);
  }
}
