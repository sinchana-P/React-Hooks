import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetchingById = () => {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    // }, [])

    // our effect now depends on id.
    }, [id])
  return (
    <div>
        {/* This is going to be a controlled component: meaning, we need to set the value and listen to the onChange event to assign the value back to the input eleent. */}
        <input type='number' value={id} onChange={e => setId(e.target.value)} />
        <div> { post.title } </div>

      {/* <ul>
        {
            post.map(post => (
                <li key={post.id}> {post.title} </li>
            ))
        }
      </ul> */}

    </div>
  )
}

export default DataFetchingById
