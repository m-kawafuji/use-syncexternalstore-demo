import { useCallback, useRef, useSyncExternalStore } from 'react';

export default function useMediaQuery(mediaQueryString: string) {
  const mediaQueryListRef = useRef<MediaQueryList | null>(null);

  const subscribe = useCallback(
    (callback: () => void) => {
      mediaQueryListRef.current = window.matchMedia(mediaQueryString);
      mediaQueryListRef.current?.addEventListener('change', callback);
      return () => {
        mediaQueryListRef.current?.removeEventListener('change', callback);
      };
    },
    [mediaQueryString],
  );

  return useSyncExternalStore(
    subscribe,
    () =>
      mediaQueryListRef.current !== null && mediaQueryListRef.current.matches,
    () => false,
  );
}
