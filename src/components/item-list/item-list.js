import React, {Component} from "react";
import "./item-list.sass";
import {categoryItems, Items, GetData} from "../api-data";
import Select from "../select";

export default class ItemList extends Component {

    state = {
        categoryItems: this.getCategoryItemUique(),
        isLoaded: false,
        fetchItems: []
    };

    getCategoryItemUique() {
        const arrayCat = [];
        categoryItems.map(item => {
            arrayCat.push(item.category);
        });
        return [...new Set(arrayCat)];
    }


    componentDidMount() {
        fetch("http://qeru.ru/functions/functions.php")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
                    let array1 = this.state.fetchItems;
                    this.setState({
                        isLoaded: true,
                        fetchItems: [...array1, ...result]
                    });
                },
            );
    };

    render() {
        let {isLoaded, fetchItems, categoryItems} = this.state;

        if (isLoaded) {

        } else {

        }

        return (
            <React.Fragment>
                {isLoaded ? (
                    <table className="table_list" border="1">
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
                        {fetchItems.map(item => {
                            return (
                                <tr key={item.id}>
                                    <th>{item.id}</th>
                                    <th>{item.category}</th>
                                    <th>{item.status}</th>
                                    <th><a href={item.seller} target="_blank">link</a></th>
                                    <th>{item.login}</th>
                                    <th>{item.password}</th>
                                    <th>{item.purchase}</th>
                                    <th>{item.sale}</th>
                                    <th>{item.sale - item.purchase}</th>
                                    <th>{item.buyer}</th>
                                    <th className="info"><img src="./img/question.svg" alt=""/></th>
                                    <th className="delete"><img src="./img/bin.svg" alt=""/></th>
                                </tr>
                            )
                        })
                        }

                        <tr className="add_row">
                            <th>#</th>
                            <th className="add_category">
                                <Select data_class="select" data_items={categoryItems}/>
                            </th>
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
                        <tr>
                            {/*<th>
                        {!isLoaded ? (
                            <div>Загрузка...</div>
                        ) : (
                            false
                        )}
                    </th>*/}
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