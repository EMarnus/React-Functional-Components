import React, { Component } from 'react';
import css from "./css/NavBarSimple.module.css";
import NavBarChild from './NavBarChild';

export class NavBarForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: false
        }
    }

    handleLogin = () => {
        this.setState({
          isLoggedIn: true,
        });
      };
    
      handleSubmit = () => {
        this.setState({
          isLoggedIn: false,
        });
      };


    render() {
        return (
        <div className = {css.NavBar}>
            <NavBarChild 
            isLoggedIn={this.state.isLoggedIn}
            handleLogin={this.handleLogin}
            handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
}

export default NavBarForm