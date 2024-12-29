
//import { Fragment } from 'react/jsx-runtime'
import { getMonth } from '../../utils'
import MonthViewBox from './monthViewBox'

function Monthview() {
const currenMonth = getMonth()
  return (
   <section className='grid grid-cols-7 grid-rows-5 lg:h-[100vh] w-full'>
{currenMonth.map((row, index) => (
    <div  key={index}>
{
    row.map((day, i) => (
        <MonthViewBox day={day} rowIndex={i} />
    
    ))
}
    </div>
))}
   </section>
  )
}

export default Monthview