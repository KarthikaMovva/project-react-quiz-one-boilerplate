import {Component} from "react";
class Homepage extends Component{
 constructor(){
    super()
 }
 render(){
    return(
        <div className="total">
           <div className="title">Quiz App</div>
           <button className="press">Play</button>
        </div>
    )
 }
}
export default Homepage