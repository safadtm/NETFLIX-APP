import './App.css'
import React from 'react'
import NavBar from './Components/Components/NavBar/NavBar'
import Banner from './Components/Components/Banner/Banner'
import RowPost from './Components/Components/RowPost/RowPost'


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost/>

    </div>
  )
}

export default App