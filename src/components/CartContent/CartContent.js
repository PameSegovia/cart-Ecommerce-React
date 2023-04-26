import CartElements from "./CartElements"
import CartTotal from "./CartTotal"
import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./CartContent.css";
import NavBar from "../NavBar/NavBar";

const CartContent = () => {
	const {cart} = useContext(dataContext);
	return (
    <>
      <NavBar/>
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className='cart-message-center'>Your cart is empty</h2>
      )}
    </>
  );
};

export default CartContent;


	
	
