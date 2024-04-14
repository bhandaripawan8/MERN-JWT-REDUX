import React from 'react'
import Header from './components/Header'
import {Outlet} from 'react-router-dom'
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <>
      {/* <h1>MERN AUTH</h1> */}
      <Container className='my-2'>
          <Header/>
          <Outlet/>
      </Container>
    </>
  )
}

export default App