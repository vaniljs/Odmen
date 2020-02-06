import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./header.sass";

import {headerMenu} from "./../api-data";

const Header = () => {

        const menuList = headerMenu.map((item) => {
            return (
                <li key={item.id}>
                    <a href={item.url}>
                        {item.name}
                    </a>
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
    };

export default Header