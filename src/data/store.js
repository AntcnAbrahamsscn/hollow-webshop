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
    cart: [],
    addToCart: (kite, quantity = 1) => {
        set((state) => ({
            cart: [...state.cart, ...Array(quantity).fill({ ...kite, id: Date.now() })],
        }));
    },
    deleteFromCart: (kite) =>
    set((state) => ({
        cart: state.cart.filter((item) => item.id !== kite),
    })),
}));

export { useStore };
