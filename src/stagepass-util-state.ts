import create from "zustand";
import { combine } from "zustand/middleware";

type CartProperties = {
  counter: number;
};

type CartMethods = {
  increment: () => void;
  decrement: () => void;
};

const store = combine<CartProperties, CartMethods>(
  {
    counter: 1,
  },
  (set) => ({
    increment: () => set((state) => ({ counter: state.counter + 1 })),
    decrement: () => set((state) => ({ counter: state.counter - 1 })),
  })
);

export const useStore = create(store);
