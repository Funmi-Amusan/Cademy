
function Reminders() {

  
  return (
    <div className='flex flex-col  gap-2  p-4 rounded-lg w-full'>
 <div className=" bg-teal-700 text-white p-6 rounded-xl">
    <div className=" text-start">
        <h1 className=" text-3xl font-semibold">Welcome back, Tomi</h1>
        <p className=" w-1/2 font-light">You’ve learned  
        <span className=" font-bold"> 70% </span>
          of your goal this week!
        Keep it up and improve your progeress.</p>
    </div>
 </div>

 <div className=" bg-teal-700 text-white p-6 rounded-xl">
    <div className=" text-start">
        <h1 className=" text-3xl font-semibold">Join a club today</h1>
        <p className=" w-1/2 font-light">  Eco-Warriors, PremLeaGeng, Foodies, Health4All and more are looking for member.</p>
        <button className=" bg-white text-black px-4 py-2 rounded-md">Explore Clubs</button>
    </div>
 </div>

 <div className=" bg-teal-700 text-white p-6 rounded-xl">
    <div className=" text-start">
        <h1 className=" text-3xl font-semibold">Student Union Elections</h1>
        <p className=" w-1/2 font-light"> The election day for the unuversity student union holds tomorrow. Cast your vote</p>
    </div>
 </div>

    </div>
  )
}

export default Reminders 