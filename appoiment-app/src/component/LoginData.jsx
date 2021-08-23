import React, { useState } from 'react'
import Firebasedata from '../FireBaseService/Firebasedata';
import LoginForm from "./LoginForm"

function LoginData() {
    const adminUser ={
        email:"user@gmail.com",
        password:"Abc@123@"
    }
    const [user,setUser]=useState({name:"",email:""});
    const [error,setError]=useState("");
    const Login = details =>{
        console.log(details);
        if(details.email===adminUser.email && details.password === adminUser.password){
            console.log("Logged In")
            setUser({
                name:details.name,
                email:details.email
            })
        }else{
            console.log("Details is Not Match")
            setError("Details don not match!")
        }
      
    }
    const Logout = () =>{
        setUser({
            name:"",
            email:""
        })
        console.log("logout")
    }
    return (
        <div>
            {(user.email!=="")?(
                <div>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    
                    <button name="log" id="log" onClick={Logout}>Logout</button>
                </div>
                  ):(
                <LoginForm Login={Login} error={error}/>
            )}
           
            
        </div>
    )
}

export default LoginData
