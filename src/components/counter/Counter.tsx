import React, { useReducer } from 'react';
type counterState={
    count: number
}

type updateAction={
    type: "increment" | "decrement"
    payload: number
}

type resetAction={
    type:"reset"
}

type counterAction=updateAction | resetAction

const initialState={count: 0}
function reducer(state: counterState, action:counterAction){
 switch(action.type){
    case "increment":
        return {count: state.count + action.payload}
    case "decrement":
        return {count: state.count - action.payload}
    case "reset":
        return initialState
    default:
        return state;
 }
}
const Counter = () => {
    const [state, dispatch]=useReducer(reducer, initialState)
    return (
        <div>
            <h1>count:{state.count}</h1>
            <button onClick={()=>dispatch({type:"increment", payload:10})}>Increment</button>
            <button onClick={()=>dispatch({type:"decrement", payload:10})}>Decrement</button>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    );
};

export default Counter;