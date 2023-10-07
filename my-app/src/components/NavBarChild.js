import React, { Component } from 'react';

function NavBarChild(props) {
    return (
      props.isLoggedIn ?
        <button onClick={props.handleButtonClick}>Login</button>
        :
        <form>
            <label htmlFor = "username">Username: </label>
            <input placeholder="username" id="username" name="username"/>
        
            <label htmlFor = "password">Password: </label>
            <input placeholder="password" id="password" name="password"/>
            <button  onClick={props.handleButtonClick}>Submit</button>
        </form>
    )
}



export default NavBarChild