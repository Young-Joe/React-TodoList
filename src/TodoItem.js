import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component{


    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.delete(this.props.index)
    }

    render(){
        console.log("TodoItem - render");
        return (
            <div onClick={this.handleDelete}>{this.props.test + " " + this.props.content}</div>
        )
    }

    componentDidMount() {

    }

    //一个组件要从父组件接受参数
    //只要父组件的render函数被[重新]执行了,子组件的这个生命周期就会被执行
    componentWillReceiveProps(nextProps) {
        console.log("TodoItem - componentWillReceiveProps");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.content !== this.props.content;
    }

    //当该组件
    componentWillUnmount() {
        console.log("TodoItem - componentWillUnmount");
    }

}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    delete: PropTypes.func,
    index: PropTypes.number,
}

TodoItem.defaultProps = {
    test: "Learn React"
}

export default TodoItem