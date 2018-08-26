import React, {Component} from 'react';

class TodoItem extends Component{


    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(){
        this.props.delete(this.props.index)
    }

    render(){
        return (
            <div onClick={this.handleDelete}>{this.props.content}</div>
        )
    }

}
export default TodoItem