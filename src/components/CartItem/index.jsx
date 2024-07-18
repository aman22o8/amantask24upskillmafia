import React, { useContext } from 'react'
import CartContext from '../Context/CartContext'




const CartItem = (props) => {
    const {incrementCartItemQuantity,decrementCartItemQuantity} = useContext(CartContext)
    const {eachCartItem}=props
    // console.log("each Crd item",eachCartItem)
    const {id,image,title,price,quant}=eachCartItem
   
  
    const increaseHandle=()=>{
       
       (incrementCartItemQuantity(id))
    }
    const decreaseHandle=()=>{
    
       (decrementCartItemQuantity(id))
    }   
    // console.log("my current state",)
    
  return (
    <li className='p-[5px] border-2 rounded-xl mb-2 border-zinc-700'  >
        <h1 className='text-base font-[700] font-[Roboto]'>{title}</h1>
                    <div className='flex my-[15px] justify-between'>

                <img src={image} alt="image" className=' rounded-[5px] mix-blend-multiply h-[35px] w-[30px]' />
                <div className='mr-[20px] flex items-center flex-row'>
                    <button className='text-center h-[30px] w-[25px] bg-blue-500 rounded-md text-base font-[700]  text-black-600' onClick={decreaseHandle}>-</button>
                    <p className='mx-[10px] text-base font-[700] font-[Roboto]'>{quant}</p>
                    <button className='text-center h-[30px] w-[25px] bg-blue-500 rounded-md text-base font-[700]  text-black-600' onClick={increaseHandle}>+</button>
                </div>
                    </div>
                <p className='text-base font-[700] font-[Roboto]'>{`$ ${price}`}</p>
            </li> 
  )
}

export default CartItem

