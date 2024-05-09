import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-col justify-between px-4 py-2'> 
      <div className="flex items-center justify-end"> 
        <ul className="flex space-x-4 text-sm"> 
          <li>Help</li>
          <li>Orders & Returns</li>
          <li>Hi,</li>
        </ul>
      </div>
      <div className="flex items-center justify-between">
        <h1 className='text-3xl font-bold'>ECOMMERCE</h1>
        <ul className='flex space-x-8 mt-4 items-center justify-center font-bold'>
          <li >Categories</li>
          <li>Sale</li>
          <li>Clearance</li>
          <li>New Stock</li>
          <li>Trending</li>
        </ul>
   
      <div className="flex space-x-8 ">
        <div>🔍</div>
        <div>🛒</div>
      </div>
      </div>

       <div className='flex bg-gray-300 justify-center items-center'>
             <p className=''> &lt;  &nbsp;&nbsp; Get 10% business sign up  &nbsp;&nbsp;&gt;</p>
        </div>

    </div>
  )
}

export default Header
