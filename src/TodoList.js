import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import store from './store/index';
import {getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';

//容器组件
class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        // this.handleDelete = this.handleDelete.bind(this);

        this.handleItemDelete = this.handleItemDelete.bind(this);

        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }

    //在组件即将被挂载到页面的时刻执行
    componentWillMount() {
        console.log("componentWillMount");
    }

    //在组件被挂载到页面之后执行
    componentDidMount() {

    }

    render() {
        return <TodoListUI
            inputValue={this.state.inputValue}
            rList={this.state.rList}
            handleInputChange={this.handleInputChange}
            handleBtnClick={this.handleBtnClick}
            handleItemDelete={this.handleItemDelete}
        />;
    }

    getTodoItems() {
        return (
            this.state.rList.map((item, index) => {
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

    handleDelete(index) {
        const list = [...this.state.rList];
        list.splice(index, 1);
        this.setState({
            rList: list
        })
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
        // setState是异步的
        // this.setState({
        //     rList: [...this.state.rList, this.state.inputValue],
        //     inputValue: ""
        // })
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
        // this.setState({
        //     inputValue: e.target.value
        // })
    }

    handleStoreChange() {
        this.setState(store.getState());
    }

    handleItemDelete(index) {
        console.log(index);
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }

    //组件被更新之前,会自动被执行
    //true -> 向下通知更新 false -> 结束
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }

    //组件被更新之前
    componentWillUpdate() {
        console.log("componentWillUpdate");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }


}

export default TodoList;
