import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

function UserProfile(props){

    const [name, setName] = useState("");
    const [gender, setGender] = useState("female");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [activity, setActivity] = useState("moderate");

    // Handle changes in form fields
    const changeHandler = (event)=>{
        switch(event.target.name){
            case "name": setName(event.target.value); 
            break;
            case "gender": setGender(event.target.value); 
            break;
            case "age": setAge(event.target.value); 
            break;
            case "height": setHeight(event.target.value); 
            break;
            case "weight": setWeight(event.target.value); 
            break;
            case "activity": setActivity(event.target.value); 
            break;
            default: break;

        }
        
    }
    // Submit button click
    const submitClickHandler = (event)=>{
        event.preventDefault();
        const data = {
            username:"jack.loktiev@gmail.com",
            name:name,
            gender:gender,
            age:age,
            height:height,
            weight:weight,
            activity:activity
        }

        fetch("/setUserData",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        }).then(response=>{
            return response.text();
        }).then(result=>{
            console.log(result);
            props.history.push("/app");
        })
    }

    return(
       <div>
           <div className = "setUserData">
               <form action = "/userProfile" method = "POST" >
                   <h3>We need your body parameters to define your consumption norms</h3>
                   <label>User name</label>
                   <input type = "text" value = "Jack" className = "loginInput" readOnly name = "username"></input>
                   <label>Name - how should we call you</label>
                   <input type = "text" placeholder = "Name" className = "loginInput" name = "name" value = {name} onChange={changeHandler} ></input>
                   <label>Gender</label>
                   <br></br>
                   <select className = "selectInp" name = "gender" value = {gender} onChange={changeHandler} >
                       <option value = "male" >Male</option>
                       <option value = "female" >Female</option>
                   </select>
                   <br></br>
                   <label>Age in years</label>
                   <input type = "text" className = "loginInput" name = "age" value = {age} onChange={changeHandler} ></input>
                   <label>Height in cm</label>
                   <input type = "text" className = "loginInput" name = "height" value = {height} onChange={changeHandler} ></input>
                   <label>Weight in kg</label>
                   <input type = "text" className = "loginInput" name = "weight" value = {weight} onChange={changeHandler} ></input>
                   <label>What is your level of activity</label>
                   <br></br>
                   <select className = "selectInp" name = "activity" value = {activity} onChange={changeHandler} >
                       <option value = "low" >Low</option>
                       <option value = "moderate" >Moderate</option>
                       <option value = "average" >Average</option>
                       <option value = "high" >High</option>
                       <option value = "sport" >Sport</option>
                   </select>
                   <br></br>
                   <button type = "submit" className = "loginBtn" onClick = {submitClickHandler} >Update profile</button>
               </form>
           </div>
       </div>
    )
}

export default withRouter(UserProfile);