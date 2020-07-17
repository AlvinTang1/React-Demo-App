import React,{Component} from 'react';
import './training.css'
class Training extends Component
{
    //this are called properties
    trainingName = 'ReactJS';
    duration = '5 Days';
    trainer = 'Nikhil';
    particapants = 25;
    //this is a function -- javascript function
    greet=()=>{
        console.log('Hello and Welcome to First Function');
        alert('Hey I am a React Function');
    }
    render(){
        //this is a local variable
        var componentName = 'Training';
        return(<div>
                <h1> Component : { componentName } </h1>
                <h2> Name : { this.trainingName } </h2>
                <h2> Duration : {this.duration} </h2>
                <h2> Trainer : {this.trainer} </h2>
                <h2> Particapants : { this.particapants }</h2>

                { this.greet() };
        </div>)
    }
}
export default Training;