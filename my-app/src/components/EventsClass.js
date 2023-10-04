import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("clicked class button")
    }

    render() {
    return (
        <button onClick={this.clickHandler}>click me - class component</button>
    )
  }
}

export default EventsClass