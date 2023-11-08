import React, {useContext} from 'react'
// import ComponentF from './ComponentF'

import { UserContext, ChannelContext } from '../App'

// using - useContext
const ComponentE = () => {

  const user = useContext(UserContext)    // useContext returns a context value
  const channel = useContext(ChannelContext)

  return (
    <div>
      {user} - {channel}
    </div>
  )
}

export default ComponentE
