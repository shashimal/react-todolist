import React, {Component} from 'react';

import TodoItem from './TodoItem'

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            term: '',
            items: []
        }
    }

    addItem = (event) => {
        if (this.state.term !== "") {
            let newItem = {
                text: this.state.term,
                key: Date.now()
            }

            this.setState({
                term: '',
                items: [...this.state.items, newItem]
            });
        }

        event.preventDefault();
    };

    onChange = (event) => {
        this.setState({term: event.target.value});
    };

    deleteItem = (key) => {
        const filteredItems = this.state.items.filter(item => item.key !== key);

        this.setState({
            items: filteredItems
        })

    };

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">ToDO List</div>
                <div className="panel-body">
                    <form>
                        <div className="input-group">
                            <input className="form-control"
                                   placeholder="enter task"
                                   value={this.state.term}
                                   onChange={this.onChange}>
                            </input>
                            <div className="input-group-btn">
                                <button className="btn btn-primary"
                                        type="submit"
                                        onClick={this.addItem}>Add
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="Items">
                        <TodoItem entries={this.state.items} delete={this.deleteItem}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;