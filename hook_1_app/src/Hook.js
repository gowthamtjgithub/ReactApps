import React,{useState} from 'react';

function Employee(){

    const [name,setName]=useState();
    const [location,setLocation] = useState();

    function changeName(e){

        setName(e.target.value);
    
      }
    function changeEmployeeLocation(e){
      setLocation(e.target.value);
    }

    return(

        <div>
    
          <h2>Welcome to New Employee Component...</h2>
    
          <p>
    
            <label>Employee Name : 
    
                    <input type="text" value={name} 
    
                    onChange={changeName}></input>
    
            </label>
    
          </p>
    
          
          <p>
    
            Entered Name is : <b>{name}</b>
    
          </p>
          <p>
        <label>Employee Location :
                <input type="text" name="Location" value={location}
                onChange={changeEmployeeLocation}></input>
        </label>
      </p>
      <p>
    
            Entered Location is : <b>{location}</b>
    
          </p>
        </div>
    
      )
    
}

export default Employee;