import { useState } from 'react'
import './App.css'
import Interruptor from './components/Interruptor'
import ElPortero from './components/ElPortero'
import PassValidator from './components/PassValidator'

function App() {

  return (
    <>
      <Interruptor />
      <ElPortero />
      <PassValidator />
    </>
  )
}

export default App