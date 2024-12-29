import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
interface ViewStoreType {
    selectedView: string,
    setViewType: (value: string) => void
}

interface ViewStoreType {
    selectedView: string;
    setViewType: (value: string) => void;
}

export const useViewStore = create<ViewStoreType>()(
    devtools(
        persist(
            (set) => ({
                selectedView: "month",
                setViewType: (value: string) => {
                    set({ selectedView: value });
                },
            }),
            { name: "calendar_view", skipHydration: true }
        )
    )
);
