
import { Fragment } from 'react/jsx-runtime'
import { getMonth } from '../../utils'
import MonthViewBox from './monthViewBox'
import { useDateStore } from '../../store'

function Monthview() {
// const currenMonth = getMonth()
const { twoDMonthArray } = useDateStore()
  return (
   <section className='grid  grid-cols-7 grid-rows-5 lg:h-[100vh] w-full'>
{twoDMonthArray.map((row, index) => (
    <Fragment  key={index}>
{
    row.map((day, i) => (
        <MonthViewBox day={day} rowIndex={index} index={i} />
    
    ))
}
    </Fragment>
))}
   </section>
  )
}

export default Monthview