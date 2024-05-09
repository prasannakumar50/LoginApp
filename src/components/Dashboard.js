

import React from 'react'
import Header from './Header'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className='w-3/6 p-12 border border-gray-400 my-12 mx-auto right-0 left-0 text-black rounded-2xl'>
      <p className="text-black font-bold text-2xl flex justify-center mt-4 p-1">Please mark your Interests</p>
      <p className='text-black  text-xl flex justify-center'>We will keep you notified</p>
      <p className='text-black  text-xl flex  m-2 p-2'>My saved interests!</p>
      <form className=' m-1 p-1 text-black font-bold'>
          <div>
            <input type="checkbox" id="shoes" name="category" value="shoes" checked />
            <label htmlFor="shoes">Shoes</label>
          </div>
          <div>
            <input type="checkbox" id="ment-shirt" name="category" value="mtshirts" />
            <label htmlFor="mtshirts">Men T-shirts</label>
          </div>
          <div>
            <input type="checkbox" id="jwelery" name="category" value="jwelery"checked />
            <label htmlFor="jwelery">Jewellery</label>
          </div>
          <div>
            <input type="checkbox" id="makeup" name="category" value="makeup"checked />
            <label htmlFor="makeup">Makeup</label>
          </div>
          <div>
            <input type="checkbox" id="wtshirts" name="category" value="wtshirts" />
            <label htmlFor="mwtshirts">Women T-shitrts</label>
          </div>
          <div>
            <input type="checkbox" id="Furniture" name="category" value="Furniture" checked/>
            <label htmlFor="Furniture">Furniture</label>
          </div>

          <div className="pagination text-gray-400 m-2 p-2">
    &lt;&lt;
    &lt;
    <span>1</span>{' '}
    <span>2</span>{' '}
    <span>3</span>{' '}
    <span>4</span>{' '}
    <span>5</span>{' '}
    <span>6</span>{' '}
    ...
    &gt;
    &gt;&gt;
  </div>
        </form>



      </div>

   
    </div>
  )
}

export default Dashboard
