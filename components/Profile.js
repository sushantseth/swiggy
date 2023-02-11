import React from "react"
import {HOME_URL} from "../constant"

 class Profile extends React.Component{
    constructor(props){
        console.log("child constructor")

        super(props)
            this.state = {
                count : 0
            
        }
    }
   async componentDidMount(){
    let response = await fetch(HOME_URL)
   console.log("child mount")
    }

    componentDidUpdate(prevstate){
        if(this.prevstate !== this.state){
            console.log("child update")
        }
    }

    componentWillUnmount(){
        // clearInterval(this.interval)
        console.log("child componentwillunmount")
    }
    render(){
        console.log("child render")

    return(
        <>
        <h1> Profile count : {this.state.count}</h1>
        <button onClick={()=> {this.setState({
            count:1
        })}} >profile button</button>
        </>
    )
    }
}
export default Profile