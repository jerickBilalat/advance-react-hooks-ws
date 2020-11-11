// useReducer: simple Counter
// http://localhost:3000/isolated/final/01.js

import * as React from 'react'

const countReducer = (state, action) => ({
  ...state,
  ...(typeof action === 'function' 
        ? action(state) 
        : action
      )})

function Counter({initialCount = 0, step = 1}) {
  const [count, setCount] = React.useReducer(countReducer, initialCount)
  const increment = () => setCount(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
