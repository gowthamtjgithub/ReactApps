import React,{useState} from 'react';

function SalaryComponent(props){
    function changeSalary(e){

        onSalaryChange(e);
    
      }
    
      return(
    
        <div style={{border:'3px solid red', width:'500px'}}>
    
          <h2>Welcome to Salary Component</h2>
    
        <p>
    
            <label>Employee Salary : 
    
                    <input type="text" name="Salary" value={salary}
    
                    onChange={changeSalary}></input>
    
            </label>
    
          </p>
    
        </div>
      );
}