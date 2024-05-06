import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {
  
  return (
    < >
    <div className=' text-center' >
    <h1 >Learn redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
      
    </>
  )
}

export default App
