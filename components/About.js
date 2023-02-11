import { Outlet } from "react-router-dom";
import React from "react"

class About extends React.Component{
    constructor(props){
        console.log("parent constructor")
        super(props)
            this.state = {
                count : 0,
                count2:0
            
        }
    }
    componentDidMount(){
console.log("parent mount")
    }

    componentDidUpdate(prevstate){
        if(this.prevstate !== this.state){
            console.log("parent update")
        }
    }

    componentWillUnmount(){
        // clearInterval(this.interval)
        console.log("parent componentwillunmount")
    }
    render(){
        console.log("parent render")
    return(
        <>
        <h1>{this.state.count}</h1>
        <h1>{this.state.count2}</h1>

        <button onClick={()=> {this.setState({
            count:1,
            count2:1
        })}} >increment</button>
        <Outlet />
        </>
    )
    }
}

export default About;

