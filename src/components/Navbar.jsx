import React from 'react'
import {ShoppingCartIcon} from '@heroicons/react/24/outline'
import Search from './Search'

function Navbar() {
  return (
   <header className='max-w-[1600px]'>
<div className='bg-amazonclone text-white flex h-[60px]' >
  {/* left   */}
<div className='flex items-center'>

<div className='flex pl-4'>
    <img className = 'w-[100px] h-[35px]' src="../images/amazon.png" alt="" />
</div>

<div className=' pr-4 pl-4'>
    <div className='text-xs xl:text-base'>Deliver To</div>
    <div className='text-sm xl:text-base font-bold'>Surendranagar</div>
</div>



</div>

{/* middle */}
<div className=''>

<Search />
</div>

{/* right */}
<div className='flex items-center'>

<div className=' pr-4 pl-4'>
    <div className='text-xs xl:text-base'>Hello, Sign in </div>
    <div className='text-xs xl:text-base font-bold'>Account & lists</div>
</div>

<div className=' pr-4 pl-4'>
    <div className='text-sm xl:text-base'>Returns</div>
    <div className='text-sm xl:text-base font-bold'>&Orders</div>
</div>

<div  className='flex items-center'>
<ShoppingCartIcon  className='h-[48px] flex'/>
<div className='relative'> 
<div className='absolute right-[9px] font-bold m-2 -mt-4 text-orange-400'>
0
</div>
</div>



<div>
    cart
</div>

</div>


</div>



</div>


   </header>
  )
}

export default Navbar