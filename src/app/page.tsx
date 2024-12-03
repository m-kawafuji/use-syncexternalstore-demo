'use client';

import useMediaQuery from '@/hooks/useMediaQuery';

export default function Home() {
  const mediaQueryString = '(max-width: 768px)';
  const matches = useMediaQuery(mediaQueryString);

  return (
    <main>
      <h1>useSyncExternalStore Demo</h1>
      {matches !== undefined && (
        <p>
          <code>
            {mediaQueryString}: {JSON.stringify(matches)}
          </code>
        </p>
      )}
    </main>
  );
}
