import React, { useEffect, useRef } from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
        // Focus the input element
        inputRef.current.focus()
    }, [])

  return (
    <div>
      <input ref={ inputRef } type='text' />
    </div>
  )
}

export default FocusInput

// Note:
// Where did this "current" property came from??
// - This is just something React does.
// - React will set the Ref's current property to the corresponding DOM node.
// Hence, this is actually how u access the input element.

// In Output:
// As soon as the page loads,
// - The component mounts
// - The Input element is focused