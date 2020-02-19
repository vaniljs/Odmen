import React, {Component} from "react";
import ReactDOM from "react-dom";
import "./category-list.sass";
import {categoryItems} from "../api-data";
import Select from "../select";


export default class CategoryList extends Component {

    render() {

        const categoryItemsShow = categoryItems.map( item => {
                return (
                    <tr key={item.id}>
                        <th>{item.category}</th>
                        <th>{Math.floor(Math.random() * 100)}</th>
                        <th>{item.comment}</th>
                        <th className="info"><img src="./img/question.svg" alt=""/></th>
                        <th className="delete"><img src="./img/bin.svg" alt=""/></th>
                    </tr>
                )
            });

        return (
            <React.Fragment>
            {true ? (
                    <table className="table_list" border="1">
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Количество</th>
                        <th>Комментарий</th>
                        <th> </th>
                        <th> </th>
                    </tr>
                    </thead>
                    <tbody>
                    {categoryItemsShow}
                    <tr className="add_row">
                        <th><input type="text" placeholder="Название"/></th>
                        <th> </th>
                        <th><input type="text" placeholder="Комментарий"/></th>
                        <th className="add"><img src="./img/tick.svg" alt=""/></th>
                        <th className="clear"><img src="./img/close.svg" alt=""/></th>
                    </tr>
                    </tbody>
                </table>
                ) : (
                    <img className="loader" src="./img/loader.svg" alt=""/>
                )}
    </React.Fragment>
        )
    }
}
