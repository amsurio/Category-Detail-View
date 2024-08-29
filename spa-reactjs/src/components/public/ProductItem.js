import React from 'react';
import { Card, Col } from "react-bootstrap";
import list from "../../json/data";
import Cards from "./cart/Cards";
import "./cart/styles/style.css";


const ProductItem = ({ handleClick }) => {
    return (
        <section>
            {list.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
        </section>
    );
};

export default ProductItem;
