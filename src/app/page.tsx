import React from 'react'
import Hero from './Components/Hero'

import Services from './Components/Services'
import Arrival from './Components/Arrival'
import Deal from './Components/Deal'

import Seller from './Seller/page'
import Products from './products/page'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Services/>
      <Deal/>
      <Products/>
      <Arrival/>
      <Seller/>
     
    </div>
  )
}

export default Home
