import { useState } from 'react'
import { Homepage, Navbar } from './components'
import { Outlet } from 'react-router'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Homepage />
    </>
  )
}

export default App
