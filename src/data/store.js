import { create } from "zustand";

const useStore = create((set) => ({
    kites: [],
    isHamburgerOpen: false, 
    setKites: (newKites) =>
        set((state) => ({
            kites: newKites,
        })),
    toggleHamburger: () =>
        set((state) => ({
            isHamburgerOpen: !state.isHamburgerOpen,
        })),
}));

export { useStore };