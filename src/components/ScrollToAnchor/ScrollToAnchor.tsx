'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export const ScrollToAnchor = (): null => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash') || '';

  useEffect(() => {
    // Extrai o hash da URL (formato #section ou ?hash=section)
    const urlHash = window.location.hash || `#${hash}`;

    if (urlHash) {
      const id = urlHash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Timeout para garantir que o elemento esteja renderizado
        setTimeout(() => {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          // Foco no elemento para acessibilidade
          element.focus({ preventScroll: true });
        }, 100);
      }
    }
  }, [pathname, hash]); // Executa quando a rota ou hash mudar

  return null;
};