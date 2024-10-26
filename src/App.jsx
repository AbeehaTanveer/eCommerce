import React from 'react'
import Header from './Components/Header'
import ServiceSection from './Components/ServiceSection'
import Product from './Components/Product'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Cart from './Components/Cart'
import CartContex from './Context/CartContex'

const App = () => {
  return (
    <div>
      
<CartContex>
      <Header/>
      <Banner/>
  

      <Product/>
      <ServiceSection/>
      <Footer/>
      <Cart/>
</CartContex>
    </div>
  )
}

export default App
