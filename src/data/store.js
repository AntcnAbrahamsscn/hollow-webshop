import { create } from "zustand";

const useStore = create((set) => ({
    kites: [],
    setKites: (newKites) =>
    set((state) => ({
        kites: newKites,
    })),
    isHamburgerOpen: false, 
    toggleHamburger: () =>
        set((state) => ({
            isHamburgerOpen: !state.isHamburgerOpen,
        })),
}));

export { useStore };