import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetchingButton = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    // }, [])

    // our effect now depends on id.
    }, [idFromButtonClick])
  return (
    <div>
        {/* This is going to be a controlled component: meaning, we need to set the value and listen to the onChange event to assign the value back to the input eleent. */}
        <input type='number' value={id} onChange={e => setId(e.target.value)} />
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div> { post.title } </div>
    </div>
  )
}

export default DataFetchingButton
