import React, { useState, useMemo } from 'react'

const Counter = () => {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const incrementOne = () => {
    console.log(counterOne)
    setCounterOne(counterOne + 1)
  }
  const incrementTwo = () => {
    console.log(counterTwo)
    setCounterTwo(counterTwo + 1)
  }

  const isEven = useMemo(() => {
    // To induce some slowness into our function 
    let i=0
    while (i < 200000000) 
        i++
    return counterOne % 2 === 0
  })


  // useMemo: 
  // Whenever counterOne changes, we r telling React to recompute the value and not to use the cached value.
  // so, in the dependency array, specify counterOne.

  // RETURN: useMemo returns a cached value, which we r going to assign to the variable isEven.

  // --------

  // const isEven = () => {
  //   // To induce some slowness into our function 
  //   let i=0
  //   while (i < 200000000) 
  //       i++
  //   // The loop does not affect our return value,
  //   // It does slow down the rate at which we compute Even or Odd.
  //   return counterOne % 2 === 0
  // }

  return (
    <div>
      <div>
        <button onClick={incrementOne}>Count One - {counterOne} </button>
        <span> {isEven ? 'Even' : 'Odd'} </span>
      </div>
      <div>
        <button onClick={incrementTwo}>Count Two - {counterTwo} </button>
      </div>
    </div>
  )
}

export default Counter


// Note:

// Why is counterTwo: 
// Slow as well ???
// that is bcz, every time the state updates,
// the component re-renders,
// When the component re-renders, isEven () function called again.
// The function is slow, and even when we update counterTwo, the UI update is slow. 

// PERFORMANCE OPTIMIZED IN OUTPUT.
// counterTwo updates r very faster,
// This is bcz,
// React is now using cached value of isEven function,
// to display whether 1 is : Odd or Even
// Since the value never changed for counter , there is no need to recompute this odd r even value.