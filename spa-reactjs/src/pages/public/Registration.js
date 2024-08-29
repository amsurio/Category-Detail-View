import React from 'react';
import { NavLink, useLocation, useHistory } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { observer } from "mobx-react-lite";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';

const Registration = observer(() => {
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">Регистрация</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="E-mail"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль"
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        <Col xs={3}>
                            <Button
                                variant={"outline-primary"}
                            >
                                Добавить
                            </Button>
                        </Col>
                    </Row>

                </Form>
            </Card>
        </Container>
    )
})

export default Registration;
