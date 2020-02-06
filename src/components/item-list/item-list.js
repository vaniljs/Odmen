import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./item-list.sass";
import {Items} from "../api-data";


export default class ItemList extends Component {

    render() {

        const itemsShow = Items.map( item => {
            return (
                <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>{item.categoryName}</th>
                    <th>{item.status}</th>
                    <th><a href={item.seller} target="_blank">link</a></th>
                    <th>{item.login}</th>
                    <th>{item.password}</th>
                    <th>{item.priceOld}</th>
                    <th>{item.priceNew}</th>
                    <th>{item.priceNew - item.priceOld}</th>
                    <th>{item.buyer}</th>
                    <th className="info"><img src="./img/question.svg" alt=""/></th>
                    <th className="delete"><img src="./img/bin.svg" alt=""/></th>
                </tr>
            )
        });

        return (
            <table className="table-list" border="1">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Категория</th>
                    <th>Статус</th>
                    <th>Продавец</th>
                    <th>Логин</th>
                    <th>Пароль</th>
                    <th>Покупка</th>
                    <th>Продажа</th>
                    <th>Прибыль</th>
                    <th>Покупатель</th>
                </tr>
                </thead>
                <tbody>
                {itemsShow}
                <tr className="add-category">
                    <th>#</th>
                    <th><input type="text" placeholder="Категория"/></th>
                    <th><input type="text" placeholder="Статус"/></th>
                    <th><input type="text" placeholder="Продавец"/></th>
                    <th><input type="text" placeholder="Логин"/></th>
                    <th><input type="text" placeholder="Пароль"/></th>
                    <th><input type="text" placeholder="Покупка руб."/></th>
                    <th><input type="text" placeholder="Продажа руб."/></th>
                    <th>100</th>
                    <th><input type="text" placeholder="Покупатель"/></th>
                    <th className="add"><img src="./img/tick.svg" alt=""/></th>
                    <th className="clear"><img src="./img/close.svg" alt=""/></th>
                </tr>
                </tbody>
            </table>
        )
    }
}