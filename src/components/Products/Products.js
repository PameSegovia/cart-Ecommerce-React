import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css"

const Products = () => {
	const {data, buyProducts} = useContext(dataContext);
		return data.map((product) => {
		return (
			<div className="grid-item" key={product.id}>
				<img src ={product.img} alt="img-product-card" width="100%"/>
				<h3>{product.name}</h3>
				<h4>${product.price}</h4>
				<button className="cardButton" onClick={()=> buyProducts(product)}>Agregar al  🛒 </button>
			</div>
		)
	})
}
export default Products;