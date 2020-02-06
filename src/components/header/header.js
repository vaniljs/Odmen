import React, {Component} from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import "./header.sass";

import {headerMenu} from "./../api-data";

export default class Header extends Component {

    render() {
        const menuList = headerMenu.map((item) => {
            return (
                <li key={item.id}>
                    <Link to={item.url}>{item.name}</Link>
                </li>
            )
        });

        return (
            <div className="header">
               <span className="logo">
                   Odmen
               </span>
                <ul className="menu">

                    {menuList}

                </ul>
                <button className="logout btn-default">Выход</button>
            </div>
        )
    }
}
