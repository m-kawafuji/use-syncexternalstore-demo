import { useCallback, useSyncExternalStore } from 'react';

export default function useMediaQuery(mediaQueryString: string) {
  const subscribe = useCallback(
    (callback: () => void) => {
      const mediaQueryList = window.matchMedia(mediaQueryString);
      mediaQueryList.addEventListener('change', callback);
      return () => {
        mediaQueryList.removeEventListener('change', callback);
      };
    },
    [mediaQueryString],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(mediaQueryString).matches,
    () => undefined,
  );
}
