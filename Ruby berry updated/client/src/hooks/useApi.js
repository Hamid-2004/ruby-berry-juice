import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || '';

/**
 * Small fetch hook for the Ruby Berry API. Falls back gracefully so the
 * UI still renders (from local fallback data passed in) if the backend
 * isn't running yet.
 */
export default function useApi(endpoint, fallbackData = []) {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(`${API_URL}${endpoint}`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const json = await res.json();
        if (!cancelled) setData(json.data || fallbackData);
      } catch (err) {
        if (!cancelled) {
          setError(err);
          setData(fallbackData); // graceful fallback
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return { data, loading, error };
}
