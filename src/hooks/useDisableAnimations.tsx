import { useEffect } from 'react';

export const useDisableAnimations = (shouldDisable: boolean) => {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (shouldDisable) {
      const style = document.createElement('style');
      style.textContent = `
        * {
          transition: none !important;
          animation: none !important;
        }
      `;
      document.head.appendChild(style);
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [shouldDisable]);
};
