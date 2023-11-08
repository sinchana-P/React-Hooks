import React , { useState, useEffect } from 'react'

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0)

    const someProp = 0
    // const tick = () => {
    //     setCount(count + 1)
    // }

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    // // to replicate : componentDidMount
    // useEffect(() => {
    //     // set up Timer
    //     const interval = setInterval(tick, 1000)

    //     // to replicate : componentWillUnmount, for the cleanup
    //     return () => {
    //         clearInterval(interval)
    //     }

    // }, [])

    // useEffect(() => {
    //     const interval = setInterval(tick, 1000)

    //     return () => {
    //         clearInterval(interval)
    //     }

    // }, [count])

    // TIP:
    // function doSomething() {
    //     console.log(someProp)
    // }

    // While sending prop to any function, called in useEffect,
    // write the function within useEffect itself.
    // And send prop in dependency array.
    
    useEffect(() => {
        // doSomething()
        function doSomething() {
            console.log(someProp)
        }
        doSomething()
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }

    // }, [])
    }, [someProp])

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
