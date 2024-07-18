import React, { useContext, useEffect, useReducer, useState } from 'react'


import { ThreeDots } from 'react-loader-spinner'
import CartContext from '../Context/CartContext'


const apiconstant = [
  {initial: 'INITIAL'},
  {inprogress: 'PROGRESS'},
  {success: 'SUCCESS'},
  {failure: 'FAILURE'},
]

const myReducerFunction=(state,action)=>{
  // console.log(action)
  switch (action.type) {
    // case "FETCHED_DATA":
    //   return {...state,initialData:action.payload};
    
    case "IN_PROGRESS":
      return {...state,myActiveApi: action.payload};
    case "SUCCESS":
      return {...state,myActiveApi:action.payload};
    case "FAILURE":
      return {...state,myActiveApi:action.payload};


    }
    
  
    throw Error('Unknown action: ');
}

const currentState= {myActiveApi: apiconstant[0].initial}


const AllProduct = () => {
  const [state, dispatch] = useReducer(myReducerFunction,currentState)
    const [InitialState, setInitialState] = useState([])
    const [quantity, setquantity] = useState(1)
    
    const cartItemAdded = useContext(CartContext)
    const {addCartItem}=cartItemAdded
    // const wholeState=useSelector((state)=>state)
  
    useEffect(() => {
      dispatch({type:"IN_PROGRESS",payload:apiconstant[1].inprogress})
      const fetchAllProduct=async ()=>{
            const response=await fetch('https://fakestoreapi.com/products')
            if(response.ok){
              const data=await response.json()
              setInitialState(data)
              dispatch({type:"SUCCESS",payload:apiconstant[2].success})      

            }
            else{
              dispatch({type:"FAILURE",payload:apiconstant[3].failure})
            }
            

      }  
      fetchAllProduct()
    
      return () => {
        console.log("return Initial State")
      }
    }, [])
    // console.log(InitialState)
    // console.log("mycartContext",cartItemAdded)

  

    const myButton=(mySelecteditem)=>{
            // console.log(mySelecteditem)
            addCartItem({...mySelecteditem,quant:quantity})

          
    }


    const renderInprogressFunction=()=>{
      return(<div className='w-[100%] h-[70vh] flex justify-center items-center'  data-testid="loader">
      <ThreeDots  color="#0284c7" height={120} width={120} />
    </div>)
    }
    const renderSuccessFunction=()=>{
      
      return(<ul className='m-0 p-0 w-[100%]  list-none  flex  flex-wrap '>{
        InitialState.map((each)=>{
            // console.log(each)
          
            const {id,category,description,image,price,rating,title}=each
            return( <li key={each.id} className='w-[275px] h-[500px] p-[5px] m-[10px] rounded-[8px]          bg-lime-100 flex flex-col justify-between items-center'>
                        <img src={image} alt="title"  className='mt-[10px] h-[175px] w-[150px] mix-blend-multiply'/>
                        <h1 className='text-[20px] font-[600] font-[Roboto] self-start'>{title.length>50 ? `${title.slice(0,50)}...`: title}</h1>
                        <p  className='text-[16px]  font-[Roboto]'>{description.length>100 ? `${description.slice(0,125)}...`: description}</p>
                        <p  className='text-[18px] font-[800] font-[Roboto] self-start'>{`$ ${price}`}</p>
                        <button onClick={()=> myButton(each)}  className='
                        
                        text-[18px] font-[800] font-[Roboto] bg-cyan-400 border-2 border-slate-500 rounded-[5px] text-center h-[40px] w-[120px]'>Add to Cart</button>                  
                    </li>)
        })
        }</ul>)
    }
    const renderFailureFunction=()=>{
      return(<div className="flex flex-col items-center  w-[100%] mb-[20px]">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="h-[250px] w-[250px]"
      />
      <h1 className="text-2xl text-slate-900 font-bold">Something Went Wrong</h1>
    </div>)
    }


    const renderFunction=()=>{
      switch (state.myActiveApi) {
        case apiconstant[1].inprogress:
          return renderInprogressFunction();
        case apiconstant[2].success:
          return renderSuccessFunction();
        case apiconstant[3].failure:
          return renderFailureFunction();
      
        default:
          null;
      }
    }
    
  return (
    <div className='w-[70%]'>
      {renderFunction()}
        
        
    </div>
  )
}

export default AllProduct