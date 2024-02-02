import {Component} from "react";
class Quizpage extends Component{
 constructor(){
    super()
 }
 render(){
    return(
        <div className="box"> 
            <h2 className="tag">Question</h2>
             <p className="serialno">1 of 15</p>
            <h4 className="ques">Which is the only mammal that can jump?</h4>
           <div className="option1">
                <p className="gap">Dog</p>
                <p className="gap">Elephant</p>
            </div>
            <div className="option2">
                <p className="gap">Goat</p>
                <p className="gap">Lion</p>
            </div>
            <div className="option3">
                <button className="b first">Previous</button>
                <button className="b second">Next</button>
                <button className="b third">Quit</button>
            </div>  
        </div>
    )
 }
}
export default Quizpage