import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../../index";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import CategoryList from "../../json/Categories";

const Categories = observer(() => {

    const { device } = useContext(Context)

    return (
        <ListGroup>
            {CategoryList.map(item =>
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    key={item.id}
                >
                    {item.title}
                </ListGroup.Item>
            )}
        </ListGroup>
    )
})

export default Categories;
