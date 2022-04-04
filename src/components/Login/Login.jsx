import React, { useState } from "react";
// import { useState } from "react/cjs/react.development";
import './Login.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const URL = "http://localhost:8000/users";

const initialValue = { email:"", password:"" }
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(initialValue);
    const onValuechange = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]:value});
        //console.log({...user})        
    }

    const loginUser = ({ setLoginUser }) => {
        axios.post(`${URL}/login`, user).then( (res) => { 
            console.log(res);
            if(res.data.message)
                window.alert(`${res.data.message}`);
            else
                window.alert(`status ==> ${res.status}\nmessage ==> ${res.statusText}\n User login Sucessfully`);
                setLoginUser(res.data.user);
                navigate('/homepage')  

        })
    }

    return(
        <>
            <div className="login">
                <h1>Login</h1>
                <input type="text" onChange={(e)=>onValuechange(e)}  name="email" value={user.email} placeholder="Enter Your Email"></input>
                <input type="password" onChange={(e)=>onValuechange(e)}  name="password" value={user.password} placeholder="Enter Your Password"></input>
                <div className="button" onClick={loginUser}>Login</div>
                <div>OR</div>
                <div className="button" onClick={()=> navigate('/ragister')}>Ragister</div>
            </div>
        </> 
    )
}
export default Login;