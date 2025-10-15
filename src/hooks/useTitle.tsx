import { useEffect, useState } from 'react';

export function useTitle(defaultTitle: string) {
  const [title, setTitle] = useState(defaultTitle);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = title + ' | JTHL';

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return { title, setTitle };
}
