import React, { useContext, useState } from 'react'

import CartItem from '../CartItem'
import { Link } from 'react-router-dom'
import CartContext from '../Context/CartContext'

// import { myCartState } from '../../features/addtoCartSlice'

const initialArray=[
    {id:1,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",title:"Fjallraven",price:100,numberofItem:12},
    {id:2,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",title:"Fjallraven",price:100,numberofItem:12},
    {id:3,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",title:"Fjallraven",price:100,numberofItem:12},
    {id:4,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",title:"Fjallraven",price:100,numberofItem:12},
]

const Cart = () => {
   
   const myCartList = useContext(CartContext)
   const {cartList}=myCartList
   
   const totlamount=cartList.reduce((total,each)=>{
    return total+(each.price*each.quant)
   },0)
    //  console.log("length is ",)
    // console.log("my whole state",cartList)

   const handlePayment=()=>{
    console.log("Activated")
    
   
    

   }
  return (
    <div className='w-[30%] flex flex-col items-center p-[10px] mt-[10px] mr-[30px] bg-[#ECFCCB] rounded-[8px] min-h-[30vh]'>
        <h1 className='my-[10px] text-2xl font-[500]  text-black-600  font-[Oswald]'>Cart Item</h1>
        <ul className='list-none'>
            {cartList.map((each)=>{
                return <CartItem key={each.id} eachCartItem={each}/>
        })}
    </ul>

        <p className='text-base font-[700] font-[Roboto] '>Total Amount:{`$ ${totlamount.toFixed(2)}`}</p>
        <Link to="product">
        <button onClick={handlePayment} className='
        hover:scale-[1.2] shadow-xl shadow-indigo-500/40  duration-[600ms] 
        text-center h-[30px] w-[170px] my-[12px] bg-blue-500 rounded-md text-base font-[500]  text-black-600'>Preceed for payment</button>
        </Link>
    </div>
  )
}

export default Cart