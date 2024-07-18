
import {  Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MainRoute from './components/MainRoute'
import PaymentRoute from './components/PaymentRoute'
import CartContext from './components/Context/CartContext'
import { useState } from 'react'

const  App=()=> {
  
  const [cartList, setcartList] = useState([])

  const addCartItem=(product)=>{
    // console.log("add List Item1",product)
    const productItem = cartList.find(each => each.id === product.id)
    // console.log("product Item1",productItem)

    if (productItem) {
      setcartList((prevState)=>{
        // console.log("my prev state1",prevState)
       return  prevState.map((each)=>{
          if (productItem.id === each.id) {
            // const updatedQuantity = each.quant + productItem.quant
            const updatedQuantity = each.quant + 1
            return {...each, quant: updatedQuantity}
          
            
          } else {
            return each
          }
        })
          // return [...prevState]
      })
    } else if (productItem === undefined) {
      setcartList(prevState =>{
        // console.log("my prev state2",prevState)
        return [...prevState,product]
      })
    }

  }
  const removeCartItem=()=>{
    console.log("remove List Item")
  }
  const incrementCartItemQuantity=(id)=>{
    console.log('increment id', id)
    setcartList((prevState) => {
      return  prevState.map(each => {
        if (each.id === id) {
          const updatedQuantity = each.quant + 1
          return {...each, quant: updatedQuantity}
        }
        return each
      })
    }
    
    )
    // console.log("add each List Item")
  }
  const decrementCartItemQuantity=(id)=>{
    // console.log('decrement id', id)
    const productDetails = cartList.find(each => each.id === id)
    if(productDetails.quant>1){

      setcartList((prevState) => {
        return  prevState.map(each => {
          if (each.id === id  && each.quant > 1) {
            const updatedQuantity = each.quant - 1
            return {...each, quant: updatedQuantity}
          }
          return each
        })
      }
      
      )
    }else{
      
    const filteredItems = cartList.filter(each => each.id !== id)
    setcartList(filteredItems)
      
    }
    // console.log("add each List Item")
  }
  // console.log("cartList",cartList)

  return (
    <CartContext.Provider value={{cartList,
      addCartItem,
      removeCartItem,
      incrementCartItemQuantity,
      decrementCartItemQuantity}}>
     <div >
     <Header/>
     
      <Routes>
        <Route path='/' element={<MainRoute/>}/>
        <Route path='/product' element={<PaymentRoute/>}/>
    
    
      </Routes>
     </div>

    
        
    </CartContext.Provider>
  )
}

export default App
