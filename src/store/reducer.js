import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'

const defaultState = {
    rList: [
        'learn react',
        'learn web',
        "learn webStorm"
    ],
    inputValue: ""
};

//reducer可以接受state,但决不能修改state.所以需使用Json做深拷贝
//纯函数:給定固定的输入,就一定会有固定的输出,而且不会有任何副作用
export default (state = defaultState, action) => {
    if (action.type === CHANGE_INPUT_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.rList.push(newState.inputValue);
        newState.inputValue = '';
        return newState
    }
    if (action.type === DELETE_TODO_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.rList.splice(action.index, 1);
        return newState;
    }
    return state;
}