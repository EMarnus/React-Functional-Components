import React, { Component } from 'react';
import css from "./css/NavBarForm.module.css";

function NavBarChild(props) {
    return (
        <div>
          {props.isLoggedIn ? (
            <div>
                <form>
                    <label for="username">Username: </label>
                    <input type="text" id="username" placeholder='Username'></input>
                    <label for="password">Password: </label>
                    <input type="text" id="password" placeholder='Password'></input>
                </form>
                <button onClick={props.handleSubmit}>Submit</button>
            </div>
          ) : (
            <div>
                <h1>My Gallery</h1>
                <button onClick={props.handleLogin}>Login</button>
            </div>
          )}
        </div>
      );
    }


export default NavBarChild