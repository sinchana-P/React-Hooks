import {useEffect} from 'react'

const useDocumentTtile = (count) => {

    useEffect(() => {
        document.title = `Count - ${count}`
    }, [count])

  return (
    <div>
      
    </div>
  )
}

export default useDocumentTtile

// Note:
// Code to re-use: Reusable code
// Code to update the document title

// We r re-using the logic,
// Instead of Duplicating it
// This is the main purpose of Custom hook.