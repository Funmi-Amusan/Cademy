
import { Fragment } from 'react/jsx-runtime'
import { getMonth } from '../../utils'

function Monthview() {
const currenMonth = getMonth()
  return (
   <section className='grid grid-cols-7 grid-rows-5 lg:h-[100vh] w-full'>
{currenMonth.map((row, index) => (
    <div  key={index}>
{
    row.map((day, i) => (
        <h3 key={i}>{day.toLocaleDateString('en-NG', {
           day: 'numeric'
        } )}</h3>
    ))
}
    </div>
))}
   </section>
  )
}

export default Monthview