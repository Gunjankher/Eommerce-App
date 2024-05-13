import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'

function Search() {
  return (
    <div className='w-[100%]'>
        <div className='bg-amazonclone-yellow rounded flex items-center h-10'>

        <select className='bg-gray-400 text-black text-xs xl:text-base p-2'>
<option>All</option>
<option>Deals</option>
<option>Amazon</option>
<option>Fashion</option>
<option>Computers</option>
<option>Home</option>
<option>Mobiles</option>
        </select>

<input
 type="text"
className='flex grow items-center h-[100%] rounded-l text-black'
/>

<button>
    <MagnifyingGlassIcon className='h-[27px] m-auto stroke-slate-900 ' />

</button>


        </div>

        

    </div>
  )
}

export default Search