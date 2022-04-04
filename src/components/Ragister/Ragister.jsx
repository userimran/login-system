import  { useState } from "react";
import  './Ragister.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const URL = "http://localhost:8000/users";


const initialValue = {
    name:"",
    email:"",
    password:"",
    reEnterPassword:""
}

const Ragister = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(initialValue); 
    const {name,email,password,reEnterPassword} = user;

    const onValueChange = (e) => {
        console.log(e.target) 
        // console.log({...user, name:'akram'}); 
        setUser({...user, [e.target.name]: e.target.value});
    }   

    const ragisterSubmit = () => {
        const { password, reEnterPassword } = user;
        if(password === reEnterPassword ) {
            axios.post(`${URL}/ragister`, user).then( (res) => {
                console.log(res);
                // console.log('msg', res.data.message)
                if(res.data.message)
                    window.alert(`${res.data.message}`);
                else
                    window.alert(`status ==> ${res.status}\nmessage ==> ${res.statusText}\n User Ragisterd Sucessfully`);
            })
        }
        else {
            alert("Error: password not match\nplease confirm the password.")
        }
    }

    return (
        <>
            <div className="ragister">
                <h1>Ragister</h1>
                <input type="text" onChange={(e)=>onValueChange(e)}  name="name" value={name}  placeholder="Enter Your name"></input>
                <input type="text" onChange={(e)=>onValueChange(e)}  name="email" value={email}  placeholder="Enter Your Email"></input>
                <input type="password" onChange={(e)=>onValueChange(e)}  name="password" value={password}  placeholder="Enter Your Password"></input>
                <input type="password" onChange={(e)=>onValueChange(e)}  name="reEnterPassword" value={reEnterPassword}  placeholder="Enter Your Re-Password"></input>
                <div className="button"  onClick={ragisterSubmit}>Ragister</div>
                <div>or</div>
                <div className="button" onClick= {()=> navigate('/login')}>login</div>
            </div> 
        </>
    )
}
export default Ragister;
