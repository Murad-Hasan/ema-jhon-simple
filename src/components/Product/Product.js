import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';
const Product = (props) => {
 //   console.log(props)
    const {img, name, seller, price, stock} = props.product;
    return (
       <div className='single-product'>
           <div>
                <img src={img} alt=""/>
           </div>
           <div>
               <h3 className='product-name'>{name}</h3>
               <p className='product-details'>Seller : {seller}</p>
               <p className='product-details'>Price : ${price}</p>
               <p className='product-details'>Only {stock} Products left - Order Now</p>
               <button className='product-button' onClick ={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add To Cart</button>
           </div>
       </div>
    );
};

export default Product;