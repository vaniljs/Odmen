import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {categoryItems, Items} from "../api-data";

const Main = () => {
    return (
        <React.Fragment>
                <p>Количество категорий: {categoryItems.length}</p>
                <p>Количество товаров: {Items.length}</p>
        </React.Fragment>
    )
};

export default Main