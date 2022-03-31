import React,{useState} from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Routes from './components/Routes';



const App = () => {

  
  const[darkTheme,setDarkTheme]= useState(false);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray 200 min-h-screen'>
         <Nav darkTheme={darkTheme} toggleTheme={setDarkTheme}/>
         <Routes/>
         <Footer/>
      </div>
  

    </div>
  )
}

export default App