import {Component} from "react";
class Resultpage extends Component{
 constructor(){
    super()
 }
 render(){
    return(
        <div className="box"> 
        <div className="page">Result</div>
            <h3 className="result">You need more practice!</h3>
            <h4 className="score">Your score is 20%</h4>
            <div className="find1">
                <p className="one">Total number of questions</p>
                <p className="num num1">15</p>
            </div>
            <div className="find2">
                <p className="two">Number of attempted questions</p>
                <p  className="num num2">9</p>
            </div>
            <div className="find3">
                <p className="three">Number of correct answers</p>
                <p className="num num3">3</p>
            </div>
            <div className="find4">
                <p className="four">Number of wrong answers</p>
                <p className="num num4">6</p>
            </div>
            <div className="end">
                <button className="text1">Play Again</button>
                <button className="text2">Back to home</button>
            </div>
        </div>
          
    )
 }
}
export default Resultpage