import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./../header";
import CategoryList from "./../category-list/category-list";
import ItemList from "../item-list/";


export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Header />
                <CategoryList />
                <ItemList />
            </div>
        )
    }
}