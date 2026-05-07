import React from 'react'
import Hero from './Home/Hero/Hero'
import Nav from './Home/Navication/Nav'

function App() {
  return (
    <div className='sm:flex bg-black text-white font-Nunito w-full hidden'>
        <Nav/>
        <Hero/>
    </div>
  )
}

export default App