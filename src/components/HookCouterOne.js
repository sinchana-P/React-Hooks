import React, { useEffect, useState } from 'react'

const HookCouterOne = () => {

   const [count, setCount] = useState(0)
   const [name, setName] = useState('')

    // 1. useEffect renders after every Render.
    // 2. useEffect is placed inside the component, by doing this we can easily access the components state & props, without having to write any additional code.

    // Pass in a function, which has to be executed after every render of the component. 
   useEffect(() => {
    console.log('useEffect - Updating document title')
    document.title = `you Clicked ${count} Times`
   },[count])
    // In order to conditionally run an effect, specify the second parameter to useEffect.
    // The second parameter is the array of values, that the effect depends on.
    // If the values don't change between the renders the effect is simplify won't run.
     
    // In this 2nd parameter, pass either props or state that we need to watch for. 

  return (
    <div>
      <input type='text' value={name} onChange={(e) => setName(e.target.value) }/>  
      <button onClick={() => setCount(count + 1)}>Click {} times</button>
    </div>
  )
}

export default HookCouterOne
