import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useUserStore = create(
    persist(
        (set) => ({
            user: null,

            setUser: (userData) => set({ user: userData }),

            clearUser: () => {
                set({ user: null });
                import('js-cookie').then((Cookies) => Cookies.default.remove('user_name'));
            },
        }),
        {
            name: 'finscale-user-storage',
        }
    )
);