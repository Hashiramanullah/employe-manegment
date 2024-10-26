import React from 'react'
import { useTheme } from '../../context/ThemeContext'
const Header = () => {
   const {theme , toggleTheme} = useTheme();
   console.log(theme);
   
  return (
    <div>
        <div className={`flex items-end justify-between  ${theme == 'light' ? 'bg-slate-200 text-black' :'body'}`}>
        <h1 className={`text-2xl font-medium ${theme}`}>Hello <br /> <span className='text-3xl font-semibold'>Hashir 👋</span> </h1>
         <div className=''>
        <button className='bg-red-500 m-2 text-white px-5 py-3 rounded-sm text-lg font-medium'>Log Out</button>
        <button 
          onClick={toggleTheme}
        className='bg-red-500 text-white px-5 py-3 rounded-sm text-lg font-medium'>
           {theme == 'light' ? 'Dark Mode' : 'Light Mode'}
           </button>
    
         </div>
    </div>
    </div>
  )
}

export default Header