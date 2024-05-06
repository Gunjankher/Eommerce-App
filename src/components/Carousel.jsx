import React from 'react'
import 'swiper/css'
import { Navigation,Autoplay,Pagination } from 'swiper/modules'
import 'swiper/css/navigation';
import { Swiper,SwiperSlide } from 'swiper/react'


function Carousel() {
  return (
    <div className='h-[600px]'>
<Swiper
className='h-[60%]'
navigation = {true}
spaceBetween={0}
pagination = {{
clickable : true
}}
loop = {true}

autoplay = {{
  delay : 2500
}}

modules={[Navigation,Autoplay,Pagination]}
>

<SwiperSlide><img src="../images/carousel_1.jpg" /></SwiperSlide>
<SwiperSlide><img src="../images/carousel_2.jpg" /></SwiperSlide>
<SwiperSlide><img src="../images/carousel_3.jpg" /></SwiperSlide>
<SwiperSlide><img src="../images/carousel_4.jpg" /></SwiperSlide>
<SwiperSlide><img src="../images/carousel_5.jpg" /></SwiperSlide>


</Swiper>


    </div>
  )
}

export default Carousel