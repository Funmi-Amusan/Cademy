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

export type CalenderEventType = {
    id: string;
    title: string;
    date: Date;
    description: string;
}

type EventStore = {
    events: CalenderEventType[];
    isPopoverOpen: boolean;
    isEventSummaryOpen: boolean;
    selectedEvent: CalenderEventType | null;
    setEvents: (events: CalenderEventType[]) => void;
    openPopover: () => void;
    closePopover: () => void;
    openEventsSummary: (event: CalenderEventType) => void;
    closeEventsSummary: () => void;
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

export const useEventStore = create<EventStore>((set) => ({
    events: [],
    isPopoverOpen: false,
    isEventSummaryOpen: false,
    selectedEvent: null,
    setEvents: (events) => set({ events }),
    openPopover: () => set({ isPopoverOpen: true }),
    closePopover: () => set({ isPopoverOpen: false }),
    openEventsSummary: (event) => set({ isEventSummaryOpen: true, selectedEvent: event }),
    closeEventsSummary: () => set({ isEventSummaryOpen: false, selectedEvent: null }),
}))