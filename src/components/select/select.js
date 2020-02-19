import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";

export default class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: this.props.data_items,
            checkedItem: ""
        };
    }

    checkItem(e) {
        this.setState({
            checkedItem: e.target.innerHTML
        });
    }

    render() {

        let {checkedItem} = this.state;

        const ShowListItem = this.state.items.map((item) => {
            return (
                <div onClick={this.checkItem.bind(this)} key={item}>
                    {item}
                </div>
            )
        });

        return (
            <div className={this.props.data_class}>
                {checkedItem &&
                <div className="checked">
                    {checkedItem}
                </div>
                }
                {ShowListItem}
            </div>
        )
    }
};
