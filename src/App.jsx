import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Kategori from './components/kategori'
import Blog from './components/Blog'
import Footer from './components/footer'
import Footer2 from './components/footer2'
import CopyRight from './components/copyRight'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Kategori></Kategori>
    <Blog></Blog>
    <Footer></Footer>
    <Footer2></Footer2>
    <CopyRight></CopyRight>
    </>
  )
}

export default App
