import React from 'react'
import Carousel from './Carousel'
import CarouselProduct from './CarouselProduct'
import Navbar from './Navbar'

function Homepage() {
  return (
    <div className='max-w-[1600px] min-w-[1000px] bg-slate-300'>
      {/* <Navbar /> */}
<Carousel />
<h1 className='m-4'>The product card will be here</h1>
<CarouselProduct />
    </div>
  )
}

export default Homepage