import React, { useState, useEffect, useRef } from 'react'

const HookTimer = () => {

    const [timer, setTimer] = useState(0) 
    const intervalRef = useRef()
  
    useEffect(() => {
      intervalRef.current = setInterval(() => {
          setTimer(prevTimer => prevTimer + 1)
      }, 1000)
  
      // cleanup function
      return () => {
          clearInterval(intervalRef.current)
      }
    }, [])
  
    return (
      <div>
        Hook Timer - {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
      </div>
    )
  }
  
  export default HookTimer



// Note:
// 2nd usage of useRef:

// It can be used to create a generic container, 
// which can hold a mutable value similar to instance properties on a class component
// This generic container does not cause re-renders when the data it stores changes.
// It also remembers the stored data even after other state variables caused a re-render of this component



// --------------- old one without useRef -------------------

// const HookTimer = () => {

//   const [timer, setTimer] = useState(0) 

//   useEffect(() => {
//     const interval = setInterval(() => {
//         setTimer(prevTimer => prevTimer + 1)
//     }, 1000)

//     // cleanup function
//     return () => {
//         clearInterval(interval)
//     }
//   }, [])

//   return (
//     <div>
//       Hook Timer - {timer}
//       <button onClick={() => clearInterval(interval)}>Clear Hook Timer</button>
//     </div>
//   )
// }

// export default HookTimer


// Note:

// The variable - interval,
// is only called within useEffect hook.

// useRef:
// Although useRef can hold a reference to a DOM node using the ref attribute,
// It can also be used to store any mutable value.

// What is great abt the useRef is that the value will persist through the re-render,
// while also not causing any additional renders when its value changes.


