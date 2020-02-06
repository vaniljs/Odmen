import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from "./../main";
import Header from "./../header";
import CategoryList from "./../category-list/category-list";
import ItemList from "../item-list/";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

export default class App extends Component {

    render() {
        return (
            <div className="container">
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/category" component={CategoryList} />
                        <Route path="/items" component={ItemList} />
                    </Switch>
                </ Router>
            </div>
        )
    }
};
