import React,{useState} from 'react';

function NewEmployee(){
    const [employee,setEmployeeData]=useState({Id:'',Name:'',Location:'',Salary:''});  
    
    function changeEmployeeInfo(e){
      setEmployeeData({...employee,[e.target.name]:e.target.value});
    }
    return(
      <div>
        <h2>Welcome to Employee Component...</h2>
        <p>
          <label>Employee ID :
                  <input type="text" name="Id" value={employee.Id}
                  onChange={changeEmployeeInfo}></input>
          </label>
        </p>
        <p>
          <label>Employee Name : 
                  <input type="text" name="Name" value={employee.Name} 
                  onChange={changeEmployeeInfo}></input>
          </label>
        </p>
        <p>
          <label>Employee Location :
                  <input type="text" name="Location" value={employee.Location}
                  onChange={changeEmployeeInfo}></input>
          </label>
        </p>
        <p>
          <label>Employee Salary : 
                  <input type="text" name="Salary" value={employee.Salary}
                  onChange={changeEmployeeInfo}></input>
          </label>
        </p>
        <p>
          Employee ID is : <b>{employee.Id}</b>, Name is : <b>{employee.Name}</b> ,
           Location is : <b>{employee.Location}</b> and Salary is : <b>{employee.Salary}</b>
        </p>
        {/* <SalaryComponent salary={employee.Salary} onSalaryChange={changeEmployeeInfo}></SalaryComponent> */}
      </div>
    )
  }
  
  export default NewEmployee;