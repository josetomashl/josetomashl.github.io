import { useEffect } from 'react';

export function useTitle(title: string) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title + ' | JTHL';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
}
