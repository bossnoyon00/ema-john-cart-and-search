import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.time * product.quantity;
        shipping = shipping + product.shipping * product.shipping;
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <div>
                <h1>Name:Tom cruise</h1>
                <p>Address : Rajbari , Dhaka</p>               <p><b>Phone : 0124541</b></p>
                <p><small>Bangladesh</small></p>
            </div>           <div>
                Add a break :               <button>20</button>
                <button>30</button>
                <button>40</button>
                <button>
                    50
                </button>
            </div>
            <h3>Excercise Details :</h3>          <p>Selected Items: {quantity}</p>
            <p> Excercise time : {total} seconds </p>
            <p>Break time :</p>
            {/* <p>Total Shipping : ${shipping} </p> */}
            {/* <p>Tax : ${tax} </p> */}
            {/* <h5>Grand Total : {grandTotal.toFixed(2)} </h5> */}
            <p><button >Activity Complete</button></p>
        </div>
    );
};

export default Cart;