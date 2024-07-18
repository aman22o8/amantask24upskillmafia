import React from 'react'
import AllProduct from '../AllProduct'
import Cart from '../Cart'


const MainRoute = () => {
  return (
    <div className='flex justify-between  items-start'>
        <AllProduct/>
        <Cart/>
    </div>
  )
}

export default MainRoute