import { create } from "zustand";

interface Expanse {
  id: number;
  description: string;
  amount: number;
}

interface ExpanseStore {
  expanse: Expanse[];
  addExpanse: (expanse: Expanse) => void;
  removeExpanse: (id: number) => void;
}

export const useStore = create<ExpanseStore>((set) => ({
  expanse: [],
  addExpanse: (expanse) =>
    set((state) => ({
      expanse: [...state.expanse, expanse],
    })),
  removeExpanse: (id) =>
    set((state) => ({
      expanse: state.expanse.filter((expansee) => expansee.id !== id),
    })),
}));
