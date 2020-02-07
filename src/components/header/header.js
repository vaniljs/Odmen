import React, {Component} from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router-dom";
import "./header.sass";

import {headerMenu} from "./../api-data";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMenu: "/"
        };
    }

    componentDidMount() {
        this.setState({
            activeMenu: window.location.pathname.toString()
        })
    }


    checkActiveMenu(e) {
        this.setState({
            activeMenu: e.target.getAttribute('href').toString()
        });
    }

    render() {
        const menuList = headerMenu.map((item) => {
            return (
                <li key={item.id} >
                    <Link
                        to={item.url}
                        onClick={this.checkActiveMenu.bind(this)}
                        className={ this.state.activeMenu === item.url ? 'active' : null }
                    >{item.name}</Link>
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
