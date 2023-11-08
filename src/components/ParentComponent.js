// PERFORMANCE
// To improve performance, we have to restrict - re-renders to only components that need to re-render.
// ref: output.md
// So, use React.memo
// It has ntg to do with hooks
// It has been a feature of React
// In all ur components being exported, wrap ur components with React.memo

// useCallback Hook - it is used optimize performance.
// refer this link, y not use callBack all the time: https://kentcdodds.com/blog/usememo-and-usecallback

import React, { useState, useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'

const ParentComponent = () => {
    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    // So, in both the cases, we return the cached function,
    // then passing as prop to the child components
    const incrementAge = useCallback(() => {
      setAge(age + 1)
    },[age]) 

    const incrementSalary = useCallback(() => {
      setSalary(salary + 1000)
    }, [salary])

  return (
    <div>
      <Title />
      <Count text='Age' count={age} />
      <Button handleClick={incrementAge}>
        {/* children: innerText */}
        Increment Age   
      </Button>
      <Count text='Salary' count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  )
}

export default ParentComponent


// Note:

// 1. Title component is not re-rendered after using React.memo:
// 2. Bcz, Title component has no props or state of its own & hence does not re-render, when we increment the age or salary.
// 
