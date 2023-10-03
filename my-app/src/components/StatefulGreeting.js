import React from "react";

class StatefulGreeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,
        };
    }

    // handleClick() {
    //     this.setState({
    //         introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
    //         buttonText: this.state.buttonText === "Enter" ? "Exit" : "Enter", 
    //     }, () => {
    //         // async method
    //         console.log("New State", this.state.introduction)
    //         console.log("New State",this.state.buttonText)
    //     });
    //     // Not async, could run before setState()
    //     console.log(this.state.introduction)
    //     console.log(this.state.buttonText)
    // }

    // Bad because React Groups Calls and only returns final
    // handleCount() {
    //     this.setState({
    //         count: this.state.count +1
    //     });
    // }

    handleClick() {
        this.setState((prevState, prevProps) => {
            return {
                introduction: prevState.introduction === "Hello!" ? "Goodbye!" : "Hello!",
                buttonText: prevState.buttonText === "Enter" ? "Exit" : "Enter",
            }

        })
    }

    handleCount() {
        this.setState((prevState, PrevProps) => {
            return {
                count: prevState.count + 1
            }
        })
    } 


    render () {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.handleCount()}>{this.state.count}</button>
            </div>
        )
    }
}

export default StatefulGreeting;