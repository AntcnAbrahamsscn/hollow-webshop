import { create } from "zustand";

const useStore = create((set) => ({
    kites: [],
    setKites: (newKites) =>
        set((state) => ({
            kites: newKites,
        })),
}));

export { useStore };