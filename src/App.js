import './App.css'
import React from 'react'
import NavBar from './Components/Components/NavBar/NavBar'
import {originals,action,comedy,horror,romance,documentaries} from './urls'
import Banner from './Components/Components/Banner/Banner'
import RowPost from './Components/Components/RowPost/RowPost'


function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={comedy} title='Comedy' isSmall />
      <RowPost url={horror} title='Horror' isSmall />
      <RowPost url={romance} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />

    </div>
  )
}

export default App