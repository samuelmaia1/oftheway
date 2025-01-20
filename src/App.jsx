import { useState } from 'react'
import AppStyle from './App.module.css'
import { Header } from './components/Header/Header'
import { Appresentation } from './components/Appresentation/Appresentation'
import { Spacer } from '@chakra-ui/react'
import { HomeCard } from './components/HomeCard/HomeCard'
import { HomePageCarousel } from './components/HomePageCarousel/HomePageCarousel'
function App() {

  return (
    <>
      <Header />

      <Spacer height={16}/>
      
      <Appresentation />

      <Spacer height={16}/>

      <HomePageCarousel />
    </>
  )
}

export default App