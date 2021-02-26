import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        
    }
    let shipping = 0;
    if (total > 100){
        shipping = 0;
      }
     else if (total > 15) {
        shipping = 4.99;
     }
     else if (total > 0){
         shipping = 2.99;
     }
     
     const tax = (total/10);

     const formatNumber = num => {
         const precision = num.toFixed(2);
         return Number(precision);
     }

    return (
        <div className = "cart-style">
             <h4>Cart Details:</h4>
             <p>Items Ordered : {cart.length}</p>
             <p>Total : {formatNumber(total)}</p>
             <p>Shipping Cost : {formatNumber(shipping)}</p>
             <p>Tax : {formatNumber(tax)}</p>
             <p>GrandTotal : {formatNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;