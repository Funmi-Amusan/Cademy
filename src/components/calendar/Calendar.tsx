import { IoChevronBack, IoChevronForward  } from "react-icons/io5";
import { eachDayOfInterval, endOfWeek, isToday, startOfWeek } from 'date-fns';

function Calendar() {
  const currentDate = new Date();
  const weekStart = startOfWeek(currentDate);
  const weekEnd = endOfWeek(currentDate);
  const daysInWeek = eachDayOfInterval({ start: weekStart, end: weekEnd });
  
  return (
    <div className='flex flex-col items-center gap-2 bg-zinc-200 p-4 rounded-lg'>
      <div className="flex items-center justify-between w-full">
      <IoChevronBack  />
      <h1>{new Date().toLocaleDateString('en-NG', { month: 'long', year: 'numeric' })}</h1>
<IoChevronForward />
      </div>
      <div className='flex gap-2'>
{daysInWeek.map((day) => (
  <div key={day.toISOString()} className={`flex flex-col font-thin items-center gap-4 p-2  ${isToday(day) && 'bg-black text-white rounded-full'}`}>
    <h2>{day.toLocaleDateString('en-NG', { weekday: 'short' })}</h2>
    <h2 className={`bg-white p-1 aspect-square text-center rounded-full ${isToday(day) && 'bg-teal-600 text-black'} `} >{day.getDate()}</h2>
  </div>
))}
      </div>
    </div>
  )
}

export default Calendar