import React from 'react';
import { Card, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const Cards = ({ item, handleClick }) => {

    const { title, author, price, img } = item;

    return (
        <Col md={4}>
            <div className="cards">
                <div className="image_box">
                    <img src={img} alt="" />
                </div>
                <div className="details">
                    <p>{title}</p>
                    <p>{author}</p>
                    <p>Цена - {price} тенге</p>
                    <Button variant="primary" onClick={() => handleClick(item)}>Добавить в корзину</Button>
                </div>
            </div>
        </Col>
    )
}

export default Cards;
