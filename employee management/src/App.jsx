import React from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { useTheme } from './context/ThemeContext'
 const App = () => {
    const {theme , toggelTheme} = useTheme();

  return (
    <>
   <div className={` ${theme == 'light' ? 'bg-slate-200 text-black' :'body'}  `}>
   
     {/* <Login/> */} 
    {/* <EmployeeDashboard/> */}
    <AdminDashboard/>
   </div>
   
    </>
  )
}

export default App

// import React from 'react';
// import { ThemeProvider, useTheme } from './context/ThemeContext';
// import Navbar from './components/Navbar';
// import Home from './components/Home';

// function ThemedApp() {
//   const { theme } = useTheme();

//   return (
//     <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'} min-h-screen`}>
//       <Navbar />
//       <Home />
//     </div>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <ThemedApp />
//     </ThemeProvider>
//   );
// }

// export default App;
