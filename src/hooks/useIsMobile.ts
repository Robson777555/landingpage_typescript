import { useEffect, useState } from 'react';

/**
 * Hook personalizado para detectar se a tela está em modo mobile
 * @param breakpoint - Largura em pixels que define o breakpoint para mobile (padrão: 768)
 * @returns boolean - Retorna true se a largura da tela for menor ou igual ao breakpoint
 */
export function useIsMobile(breakpoint: number = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    
    // Verificação inicial
    handleResize();
    
    // Adiciona listener para redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Cleanup function
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isMobile;
}