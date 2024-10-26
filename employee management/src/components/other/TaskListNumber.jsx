import React from 'react'
import TaskList from '../TaskList/TaskList'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 screen gap-5 justify-between flex-wrap'>
   <div className='rounded-xl w-[45%] p-10  bg-red-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>

   <div className='rounded-xl w-[45%] p-10  bg-blue-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>
   <div className='rounded-xl w-[45%] p-10  bg-green-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>
   <div className='rounded-xl w-[45%] p-10  bg-yellow-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>
   <div className='rounded-xl w-[45%] p-10  bg-gray-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>

   <div className='rounded-xl w-[45%] p-10  bg-emerald-400'>
   <h2 className='text-3xl font-semibold'>0</h2>
   <h3 className='text-xl font-medium'>New Task</h3>
   </div>
    </div>
  )
}

export default TaskListNumber