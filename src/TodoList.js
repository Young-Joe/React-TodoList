import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import './TodoStyle.css'

class TodoList extends Component {


    constructor(props) {
        super(props);
        this.state = {
            rList: [
                'learn react',
                'learn web',
                "learn webStorm"
            ],
            inputValue : ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return (
            <Fragment>
                <input value={this.state.inputValue} onChange={this.handleInputChange}/>
                <button className='redBtn' onClick={this.handleBtnClick}>add</button>
                <ul>
                    {this.getTodoItems()}
                </ul>
            </Fragment>
        );
    }

    getTodoItems() {
        return (
            this.state.rList.map((item, index) =>{
                return (
                    <TodoItem
                        delete={this.handleDelete}
                        key={index}
                        content={item}
                        index={index}/>
                )
            })
        )
    }

    handleBtnClick() {
        this.setState({
            rList: [...this.state.rList, this.state.inputValue],
            inputValue: ""
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleDelete(index) {
        const list = [...this.state.rList];
        list.splice(index, 1);
        this.setState({
            rList: list
        })
    }

}

export default TodoList;
