import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import TodoList from './component/TodoList'

class App extends Component {
    render() {
        return (
            <div className="container">
                <TodoList/>
            </div>
        );
    }
}

export default App;
