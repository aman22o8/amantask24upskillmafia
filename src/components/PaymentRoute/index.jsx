import React, { useContext, useState } from 'react'

import { Link } from 'react-router-dom'
import CartContext from '../Context/CartContext'

const initialArray=[
    {id:1,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",title:"Fjallraven",price:100,numberofItem:12},
    {id:2,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",title:"Fjallraven",price:100,numberofItem:12},
    {id:3,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",title:"Fjallraven",price:100,numberofItem:12},
    {id:4,imageUrl:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",title:"Fjallraven",price:100,numberofItem:12},
]

const PaymentOption=[
    {id:"COD",title:"Cash On Delivery"},
    {id:"CC",title:"Credit Card"}
]

const PaymentRoute = () => {
    const [cardDetails, setcardDetails] = useState({paymentOption:PaymentOption[0].id,cardNumber:"",cardExpirey:"",cardcvv:""})

    const {cartList} = useContext(CartContext)
    
    const totlamount=cartList.reduce((total,each)=>{
        return total+(each.price*each.quant)
       },0)
    const handleChange=(event)=>{
        // console.log(event.target.value)
        
        const {name,value}=event.target
        // console.log(name,value)
        // console.log(event.target)

        setcardDetails((prevState)=>{
            return {...prevState,[name]:value}
        })

    }
    console.log(cardDetails)
    // console.log("cart Summary")
  return (
    <div className='flex justify-between mt-[30px] mx-[20px]'>
        <div className=' w-[40vw] flex flex-col items-center '>
            
                <ul className=' list-none px-[15px] w-[full] justify-between flex '>{
                    PaymentOption.map((each)=>{
                        return (
                            <li key={each.id}>
                                        <input  onChange={handleChange} name="paymentOption" value={each.id} type="radio"  id={each.title} />
                                        <label htmlFor={each.title}>{each.title}</label>
                            </li>
                        )
                    })
                    }</ul>

                <div className=' bg-red-400 rounded-[5px] p-[20px] pl-[30px] mt-[10px] flex flex-col '>
                    <label className=' mt-[15px] text-[16px] font-semibold fon-[Roboto]' htmlFor="cardNumber">Enter Your Card Number :</label>
                    <input className='mt-[8px] h-[35px] w-[70%] rounded-[5px]' onChange={handleChange} value={cardDetails.cardNumber} type="number" name="cardNumber" id="cardNumber" />

                    <label className=' mt-[15px] text-[16px] font-semibold fon-[Roboto]' htmlFor="cardExpirey">Enter Your Card Expiery Date :</label>
                    <input className='mt-[8px] h-[35px] w-[70%] rounded-[5px]' onChange={handleChange} value={cardDetails.cardExpirey} type='date' name="cardExpirey" id="cardExpirey" />
                 
                    <label className=' mt-[15px] text-[16px] font-semibold fon-[Roboto]' htmlFor="cardcvv">Enter Your Card CVV Number :</label>
                    <input className='mt-[8px] h-[35px] w-[70%] rounded-[5px]' onChange={handleChange} value={cardDetails.cardcvv} type="number" name="cardcvv" id="cardcvv" />

                    </div> 
                <button className=' hover:scale-[1.3] shadow-xl shadow-indigo-500/40  duration-[600ms]  text-center h-[40px] w-[150px] mt-[20px] bg-blue-500 rounded-[35px] text-base font-[500]  text-black-600'>Confirm Payment</button>  
            
        </div>
        <div className=' bg-[#ECFCCB] rounded-[10px] p-[15px] mr-[5vw] w-[38%] flex flex-col items-center'>
            <h1 className='my-[10px] text-2xl font-[500]  text-black-600  font-[Oswald]'>Cart Summary</h1>
            <ul className='list-none'>{
                cartList.map((each)=>{
                    return (
                        <li className='p-[5px] border-2 rounded-xl mb-2 border-zinc-700' key={each.id}>
                            <img src={each.image} className=' rounded-[5px] mix-blend-multiply h-[35px] w-[30px]' alt="cartImage" />
                            <h1 className='text-base font-[700] font-[Roboto]'>{each.title}</h1>
                            <h1 className='text-base font-[700] font-[Roboto]'>{`$ ${each.price}`}</h1>
                            
                        </li>
                    )
                })

                }</ul>
                <h1 className=' text-2xl my-[10px] font-[700] font-[Roboto] '>{`Total : $ ${totlamount.toFixed(2)}`}</h1>

                <Link to="/">
                <button className='hover:scale-[1.2] shadow-xl shadow-indigo-500/40  duration-[600ms] text-center h-[35px] w-[170px] bg-blue-500 rounded-md text-base font-[500]  text-black-600'>Go Back To Shopping</button>
                </Link>

        </div>
    </div>
  )
}

export default PaymentRoute