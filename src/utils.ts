import { getYear, getMonth as getMonthFns, startOfMonth, getDay, addDays } from 'date-fns';

export function getMonth(month = getMonthFns(new Date())) {
    month = Math.floor(month);
    const year = getYear(new Date());
    const firstDayOfTheMonth = getDay(startOfMonth(new Date(year, month)));
    let currentMonthCount = 0 - firstDayOfTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return addDays(new Date(year, month, 1), currentMonthCount - 1);
        });
    });

    return daysMatrix;
}