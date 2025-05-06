import React from 'react'

const Grid = () => {
  return (
    <>
    <div class='md:grid grid-cols-10 gap-4 ml-2 mr-2 mt-1.5 lg:grid lg:grid-cols-12 lg:gap-4 lg:ml-2 lg:mr-2 lg:mt-1.5'>
          <div className='col-span-4 bg-amber-400 rounded-b-md p-2 text-amber-900 font-extrabold'>Jayesh</div>
          <div className='col-span-6 bg-amber-700 p-2 rounded-b-md text-amber-50 font-bold mt-1'>Papa</div>
          <div className='col-span-2 bg-amber-900 p-2 rounded-b-md text-amber-50 font-bold mt-1'>Nattu</div>
      </div>
      <div className=''></div>
    </>
  )
}

export default Grid