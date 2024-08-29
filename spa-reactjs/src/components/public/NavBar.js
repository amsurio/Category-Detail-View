import React, { useContext } from 'react';
import { Context } from "../../index";
import { observer } from "mobx-react-lite";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SHOP_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE, REGISTRATION_ROUTE } from '../../utils/consts';
import { NavLink } from 'react-router-dom';


const NavBar = observer(() => {

    const { user } = useContext(Context)

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>
                    <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Интернет магазин</NavLink>
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <NavLink className="mr2" style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }} to={ADMIN_ROUTE}>Администратор</NavLink>
                    <NavLink style={{ color: 'white', textDecoration: 'none', marginRight: '10px' }} to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                    <NavLink style={{ color: 'white', textDecoration: 'none' }} to={LOGIN_ROUTE}>Войти</NavLink>
                </Nav>
            </Container>
        </Navbar>
    )
})

export default NavBar
