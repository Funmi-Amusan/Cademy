import React from 'react'

function MonthViewBox({day, rowIndex, index}: { day: Date, rowIndex: number, index: number}) {
  return (
    <div className='w-8 aspect-square border flex flex-col items-center hover:bg-zinc-200 transition-all'>
{rowIndex === 0 && (
    <h3>{day.toLocaleDateString('en-NG', {
        weekday: 'short'
     } )}</h3>
)


}
<h3>{day.toLocaleDateString('en-NG', {
    day: 'numeric'
 } )}</h3>
    </div>
  )
}

export default MonthViewBox