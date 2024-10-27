import React from 'react'

const FailedTask = () => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5  bg-slate-400 rounded-xl">
    <div className='flex justify-between'>
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>High</h3>
    <h4 className='text-sm'>20 feb 2024</h4>
    
    </div>
    
    <h2 className='mt-2 text-xl font-semibold'>Make Youtube video</h2>
    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem atque tempore id ullam suscipit pariatur hic ipsum ea quasi odit.</p>
    <div className="mt-2">
        <button className='w-full'>Completed</button>
    </div>
  </div>
  )
}

export default FailedTask