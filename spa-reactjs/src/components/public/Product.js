import React, { useState, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Row, Col } from "react-bootstrap";
import ProductItem from "./ProductItem";
import Cart from "./cart/Cart";
import CartIcon from "../../icons/CartIcon";
import "./cart/styles/product.css";
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const Product = observer(() => {

    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);

    const handleClick = (item) => {
        if (cart.indexOf(item) !== -1) return;
        setCart([...cart, item]);
    };

    const handleChange = (item, d) => {
        const ind = cart.indexOf(item);
        const arr = cart;
        arr[ind].amount += d;

        if (arr[ind].amount === 0) arr[ind].amount = 1;
        setCart([...arr]);

    };

    return (
        <>
            <Row>
                <Col md={12}>
                    <nav>
                        <div className="nav_box">
                            <span className="my_shop" onClick={() => setShow(true)}>
                                Списки товара
                            </span>
                            <Button variant="light" className="cart" onClick={() => setShow(false)}>
                                <span>
                                    <CartIcon />
                                </span>
                                <span>
                                    <Badge bg="danger">
                                        {cart.length}
                                    </Badge>
                                </span>
                            </Button>
                        </div>
                    </nav>
                </Col>
            </Row>
            <Row className="d-flex">
                {show ? (
                    <ProductItem handleClick={handleClick} />
                ) : (
                    <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
                )}
            </Row>
        </>
    );
});

export default Product;
