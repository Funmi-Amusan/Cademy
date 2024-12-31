import { startOfToday } from 'date-fns';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { getMonth } from './utils';
interface ViewStoreType {
    selectedView: string,
    setViewType: (value: string) => void
}

interface ViewStoreType {
    selectedView: string;
    setViewType: (value: string) => void;
}

interface DateStoreType {
    userSelectedDate: Date;
    setDate: (value: Date) => void;
    twoDMonthArray: Date[][];
    selectedMonthIndex: number;
    setMonth: (index: number) => void;
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

export const useDateStore = create<DateStoreType>()(
    devtools(
        persist(
            (set) => ({
                userSelectedDate: startOfToday(),
                twoDMonthArray: getMonth(),
                selectedMonthIndex: new Date().getMonth(),
                setDate: (value: Date) => {
                    set({ userSelectedDate: value });
                },
                setMonth: (index) => {
                    set({ twoDMonthArray: getMonth(index), selectedMonthIndex: index });
                },
            }),
            { name: "date_data", skipHydration: true },
        ),
    ),
);