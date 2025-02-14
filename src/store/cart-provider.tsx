'use client';

import { createContext, useRef, useContext } from 'react';
import type { ReactNode } from 'react';
import { useStore } from 'zustand';

import { createCartStore, initCartStore } from './cart';
import type { CartStore } from './cart';

export type CartStoreApi = ReturnType<typeof createCartStore>;

export const CartStoreContext = createContext<CartStoreApi | undefined>(
  undefined
);

export interface CartStoreProviderProps {
  children: ReactNode;
}

export const CartStoreProvider = ({ children }: CartStoreProviderProps) => {
  const storeRef = useRef<CartStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createCartStore(initCartStore());
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  );
};

export const useCartStore = <T,>(selector: (store: CartStore) => T): T => {
  const counterStoreContext = useContext(CartStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCartStore must be used within CartStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
