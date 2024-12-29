import { format, isFirstDayOfMonth, isSameDay } from "date-fns";


function MonthViewBox({day, rowIndex, index}: { day: Date, rowIndex: number, index: number}) {
    const isCurrentDay = isSameDay( day, new Date())
    const isFirstDayOftheMonth = isFirstDayOfMonth(day)
  return (
    <div className='w-8 aspect-square border flex flex-col items-center hover:bg-zinc-200 transition-all'>
{rowIndex === 0 && (
    <h3>{day.toLocaleDateString('en-NG', {
        weekday: 'short'
     } )}</h3>
)

}
{
isFirstDayOftheMonth ? (
<h3 className={` ${isCurrentDay ? 'bg-teal-600 text-white rounded-full p-2 ' : ''}`}>{format(day, 'MMM d')}</h3>
): (
<h3 className={` ${isCurrentDay ? 'bg-teal-600 text-white rounded-full p-2 ' : ''}`}>{day.toLocaleDateString('en-US', {
    day: 'numeric'
 } )}</h3>
)
}
    </div>
  )
}

export default MonthViewBox