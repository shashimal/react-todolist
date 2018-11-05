import React, {Component} from 'react'

class TodoItem extends Component {

    getListItems = (item) => {
        return (
            <div key={item.key}
                 className="list-group-item">&nbsp;
                <label>
                    <input type="checkbox"
                           onClick={() => {
                               this.props.delete(item.key)
                           }}/>
                    <span className="list-group-item-text"><i className="fa fa-fw">{item.text}</i></span>
                </label>
            </div>
        )
    }


    render() {

        let todoEntries = this.props.entries;
        let listItems = todoEntries.map(this.getListItems);

        return (
            <ul className="list-group checkbox-list-group">{listItems}</ul>
        );
    }

}

export default TodoItem