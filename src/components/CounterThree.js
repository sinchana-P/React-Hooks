// 3. Multiple Reducers
import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'increment':  
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState 
        default:
            return state    
    }
}

const CounterThree = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <div>
        <div>Count Two - {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default CounterThree

// Note:
// 1. When dealing with multiple state variables that have the same state transitions,
// It is a good idea, to have multiple useReducers making use of the same reducer function,
// This will avoid the complexity of merging the state, if it were to be an object.
// And also prevents us from duplicating code in the reducer function, like we have seen in CounterTwo. 