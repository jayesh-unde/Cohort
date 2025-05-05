import React from 'react'

const Screen = () => {
  return (
    <>
        <div className='h-screen bg-gradient-to-b from-blue-600 to-blue-950 flex flex-col items-center gap-4'>
            <div className='text-2xl mt-12'><span className='font-bold text-blue-300'>Logo</span><span className='text-amber-50'>.jayesh</span></div>
            <div className='mt-15 text-xl font-bold text-white'>Verify your Age</div>
            <div className='flex flex-col items-center gap-2 mt-5'>
                <span className='text-sm font-light text-blue-200'>Please confirm your birth year. The data will not be stored</span>
                <div>
                <input
  className="bg-blue-950 text-white placeholder-blue-300 
             pl-4 pr-4 pt-2 pb-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
  type="text"
  placeholder="Enter your Age"
/>

                </div>
                <div className='mt-6'>
                    <button className='bg-blue-200 text-blue-950 pb-1 pt-1 pl-18 pr-18 rounded-lg'>Continue</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Screen