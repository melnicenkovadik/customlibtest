import { createContext, useContext } from 'react';

interface DrawerContextType {
  direction: 'left' | 'right' | 'top' | 'bottom';
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useDrawerContext must be used within a DrawerProvider');
  }
  return context;
};

export const DrawerProvider = DrawerContext.Provider;
