import React, { useContext, useEffect } from 'react';
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Categories from "../../components/public/Categories";
import Product from "../../components/public/Product";


import { observer } from "mobx-react-lite";


const Shop = observer(() => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <Categories />
                </Col>
                <Col md={9}>
                    <Product />
                </Col>
            </Row>
        </Container>
    )
})

export default Shop;
