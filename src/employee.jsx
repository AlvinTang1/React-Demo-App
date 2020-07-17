import React, {Component} from 'react';

class Employee extends Component
{
    //create ur global variables here    

    //creaate a constructor here

    //create functions here 
    
    //we need a method called render, which will return a single HTML block

    render()
    {
        //if needed declare some more local variables here
        //this method should have a return 
        return(<div>
                <h3> Hello I am a First Component </h3>
                <h4> Component Name : Employee</h4>
                <h5> Developer : Alvin Tang</h5>
                <p> This is my very first component</p>


        <h3> Addition of 5 + 9 is : { 5 + 9 }</h3>
        <h1> Is 10 Greater than 100 : { 10 > 100 ? 'Yes':'No' }</h1>

        <h3> Simple Interest on Your Loan for 2 Years on a Principal of 10000 will be </h3>
                { (10000 * 8 / 100) * 2}
               

        </div>
       )
    }
}

export default Employee;

