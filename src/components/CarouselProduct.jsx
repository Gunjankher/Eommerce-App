import React from 'react'
import 'swiper/css'
import { Navigation,Pagination } from 'swiper/modules'
import 'swiper/css/navigation';
import { Swiper,SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom';

function CarouselProduct() {
  return (
    <div className='bg-white m-3'>
        <div className='m-4 text-xl xl:text-lg font-semibold pt-2'>Best Seller</div>
        
        <Swiper
        className='m-4'
        navigation = {true}
        pagination = {{
            clickable : true
        }}
        slidesPerView={6}
        modules={[Navigation , Pagination]}
        spaceBetween={30}
        >

{Array.from({length : 9}, (_, i)=>
(
  <SwiperSlide key={i}>
<Link  to={`/product/ ${i}`}>
<img src={`../images/product_${i}_small.jpg`}/>
</Link>
  </SwiperSlide>
)

)}


        </Swiper>

    </div>
  )
}

export default CarouselProduct