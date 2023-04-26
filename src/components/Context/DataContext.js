import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const DataProvider = ({children}) => { 
	const [data, setData] = useState([]);
	const [cart, setCart] = useState([]);
 
	useEffect(()=> {
		axios('data.json').then((res)=> setData(res.data))
	}, []);

	const buyProducts = (product)=>{
		//Recorremos todo el carrito con el método find, buscando el item que tenga el id estrictamente 
		//igual del que el usuario está seleccionando
				const productrepeat = cart.find((item)=> item.id === product.id);
		//Sí hay un producto		
				if (productrepeat){
					setCart(cart.map((item)=> ( item.id === product.id ? 
		// le sumamos uno a la cantidad del ítem,, sino el item no se modifica
					{...product, quanty: productrepeat.quanty + 1} : 
					item )));
				}else{
					setCart([...cart, product])
				}
			};
	 		


	return 	<dataContext.Provider value={{ data, cart, setCart, buyProducts }}>{children}</dataContext.Provider>
};

export default DataProvider;