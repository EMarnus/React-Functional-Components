import React from 'react'



function EventsFunctional() {
    function clickHandler(){
        console.log("clicked Functional button")
    }
    return (
    <button onClick={clickHandler}>click me - functional component</button>
    )
}

export default EventsFunctional