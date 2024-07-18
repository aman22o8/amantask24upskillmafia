import { createContext } from "react";

const CartContext = createContext({
    cartList: [],
    addCartItem: () => {},
    removeCartItem: () => {},
    incrementCartItemQuantity: () => {},
    decrementCartItemQuantity: () => {},
  })
  
  export default CartContext