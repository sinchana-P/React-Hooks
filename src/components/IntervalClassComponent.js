import React, { Component } from 'react'

export class IntervalClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }
    
    // Timers also need to be cleared to avoid memory leaks.
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <h1>{ this.state.count }</h1>
      </div>
    )
  }
}

export default IntervalClassComponent
