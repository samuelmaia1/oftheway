import { useState } from 'react'
import AppStyle from './App.module.css'
import { Header } from './components/Header/Header'
import { Appresentation } from './components/Appresentation/Appresentation'
import { Spacer } from '@chakra-ui/react'
function App() {

  return (
    <>
      <Header />

      <Spacer height={24}/>
      
      <Appresentation />
    </>
  )
}

export default App