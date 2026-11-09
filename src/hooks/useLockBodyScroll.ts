import { useEffect } from 'react';

export function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    if (!isLocked) return;

    // Sauvegarder les styles initiaux
    const originalStyle = window.getComputedStyle(document.body).overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Calculer la largeur de la scrollbar pour éviter le décalage de layout
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // Bloquer le scroll natif
    document.body.style.overflow = 'hidden';

    // Mettre en pause Lenis si actif
    const win = window as unknown as { __lenis?: { stop: () => void; start: () => void } };
    if (win.__lenis) {
      win.__lenis.stop();
    }

    return () => {
      document.body.style.overflow = originalStyle;
      document.body.style.paddingRight = originalPaddingRight;
      if (win.__lenis) {
        win.__lenis.start();
      }
    };
  }, [isLocked]);
}
