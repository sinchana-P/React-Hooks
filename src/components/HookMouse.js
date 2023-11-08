// mimic componentDidMount using useEffect
// Eg. 3
// Eg. 4 

import React, { useState, useEffect } from 'react'

const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = (e) => {
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePosition)
  
        return () => {
          console.log("Component unMounting Code.")
          window.removeEventListener('mousemove', logMousePosition)
        }

        // to mimic componentWillUnmount using useEffect.
        // 1. The function that is passed t useEffect can "return" a function, which will be executed when the component will unmount.
        // 2. So, whatever u return will be a -> cleanUp function. 
  
        // 3. So, from this arrow function passed to useEffect we return another cleanUp function.

        // Note:
        // When u want to execute some component cleanUp code,
        // 1. u include it in a function,
        // 2. and return the function from the function passed to useEffect.
        // 3. The cleanUp code can be - cancelling subscriptions, timers, removing eventHandlers
    },[])

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  )
}

export default HookMouse