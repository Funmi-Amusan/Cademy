import {
    isSameDay, getYear, getMonth as getMonthFns, startOfWeek,
    startOfDay, startOfMonth, getDay, addHours, addDays, getWeek,
    isBefore,
    isEqual,
} from 'date-fns';

// export function getMonth(month = getMonthFns(new Date())) {
//     month = Math.floor(month);
//     const year = getYear(new Date());
//     const firstDayOfTheMonth = getDay(startOfMonth(new Date(year, month)));
//     let currentMonthCount = 0 - firstDayOfTheMonth;
//     const daysMatrix = new Array(5).fill([]).map(() => {
//         return new Array(7).fill(null).map(() => {
//             currentMonthCount++;
//             return addDays(new Date(year, month, 1), currentMonthCount - 1);
//         });
//     });
//     return daysMatrix;
// }



export const isCurrentDay = (day: Date) => {
    return isSameDay(day, new Date());
};

export const getMonth = (month = new Date().getMonth()) => {
    const year = getYear(new Date());
    const firstDayOfMonth = getDay(startOfMonth(new Date(year, month)));
    let dayCounter = -firstDayOfMonth;

    return Array.from({ length: 5 }, () =>
        Array.from({ length: 7 }, () => new Date(year, month, ++dayCounter))
    );
};

export const getWeekDays = (date: Date) => {
    const startDay = startOfWeek(date);
    const weekDates = [];

    for (let i = 0; i < 7; i++) {
        const currentDate = addDays(startDay, i);
        weekDates.push({
            currentDate,
            today: isSameDay(currentDate, new Date()),
            isCurrentDay,
        });
    }

    return weekDates;
};

export const getHours = Array.from({ length: 24 }, (_, i) =>
    addHours(startOfDay(new Date()), i)
);

export const getWeeks = (monthIndex: number) => {
    const year = getYear(new Date());
    const firstDayOfMonth = new Date(year, monthIndex, 1);
    const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
    const weeks: number[] = [];

    let currentDay = firstDayOfMonth;

    while (isBefore(currentDay, lastDayOfMonth) || isEqual(currentDay, lastDayOfMonth)) {
        const weekNumber = getWeek(currentDay);
        if (!weeks.includes(weekNumber)) {
            weeks.push(weekNumber);
        }
        currentDay = addDays(currentDay, 1);
    }

    return weeks;
};