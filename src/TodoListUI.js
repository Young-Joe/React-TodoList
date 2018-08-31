import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

//无状态组件
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
            <label htmlFor='insertArea'>输入内容</label>
            <Input
                id='insertArea'
                value={props.inputValue}
                onChange={props.handleInputChange}
                // ref用于获取DOM中标签
                // ref={(inputC) => {this.inputC = inputC}}
                placeholder='todo info'
                style={{width: '300px', marginRight: '10px', marginLeft: '10px'}}
            />
            <Button
                className='redBtn'
                type='primary'
                onClick={props.handleBtnClick}>add</Button>
            <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.rList}
                renderItem={(item, index) => (<List.Item onClick={(index) => props.handleItemDelete(index)}>{item}</List.Item>)}
            />
        </div>
    )
}

//UI组件负责渲染
// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{marginTop: '10px', marginLeft: '10px'}}>
//                 <label htmlFor='insertArea'>输入内容</label>
//                 <Input
//                     id='insertArea'
//                     value={this.props.inputValue}
//                     onChange={this.props.handleInputChange}
//                     // ref用于获取DOM中标签
//                     // ref={(inputC) => {this.inputC = inputC}}
//                     placeholder='todo info'
//                     style={{width: '300px', marginRight: '10px', marginLeft: '10px'}}
//                 />
//                 <Button
//                     className='redBtn'
//                     type='primary'
//                     onClick={this.props.handleBtnClick}>add</Button>
//                 <List
//                     style={{marginTop: '10px', width: '300px'}}
//                     bordered
//                     dataSource={this.props.rList}
//                     renderItem={(item, index) => (<List.Item onClick={this.props.handleItemDelete(index)}>{item}</List.Item>)}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI;