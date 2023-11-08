// mimic componentWillUnmount

import React, { useState } from 'react'
import HookMouse from './HookMouse'

const MouseContainer = () => {
  const [display, setDisplay] = useState(true)  
  return (
    <div> 
      <button onClick={() => setDisplay(!display)}>Toggle Display</button> 
      {display && <HookMouse />}  
    </div> 
  )
}

export default MouseContainer




// Note:
// 1. Even though on display = false,
// the component has been removed the event listener which belongs to that component is still listening & executing.

// 2. When u unmount a component make sure u cancel all ur subscriptions and listeners.
// 2. Clean up after ur component