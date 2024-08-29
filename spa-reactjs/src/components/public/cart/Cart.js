import React, { useState, useEffect } from "react";
import "./styles/cart.css";
import Delete from "../../../icons/Delete";
import Button from 'react-bootstrap/Button';

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.id !== id);
        setCart(arr);
        handlePrice();
    };

    const handlePrice = () => {
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.price));
        setPrice(ans);
    };

    useEffect(() => {
        handlePrice();
    });

    return (
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt="" />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <Button variant="primary" onClick={() => handleChange(item, 1)}>+</Button>
                        <Button variant="secondary">{item.amount}</Button>
                        <Button variant="primary" onClick={() => handleChange(item, -1)}>-</Button>
                    </div>
                    <div>
                        <span>
                            <span className="sum_cart">
                                сумма:
                            </span>
                            <span className="sum_all_cart">{item.price} тенге</span>
                        </span>
                        <span className="delete_cart" onClick={() => handleRemove(item.id)}><Delete /></span>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Общая сумма</span>
                <span>- {price} тенге</span>
            </div>
        </article>
    );
};

export default Cart;
