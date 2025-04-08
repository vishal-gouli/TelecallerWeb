import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handleError ,handleSuccess } from '../utils';
import axios from 'axios'

const Login = () => {

let [loginfo,setlogininfo] = useState({
    email:"",password:""
});

let navigate = useNavigate();

let loginchanging=({target:{name,value}})=>{
    setlogininfo({...loginfo,[name]:value})
}

let loginsumbmitting=async(e)=>{
   e.preventDefault();
   let {email,password} = loginfo;
   if( !email || !password){
      handleError("* indicates field is mandatory to fill")
   }

try{
    const response = await fetch("http://localhost:8000/api/login",
        {
       method:"POST",
       headers:{
        'Content-Type':"application/json"
       },
       body: JSON.stringify(loginfo)
    }
);
    const result = await response.json();
    console.log(result)
    let {success,message,error,jwtToken,name}= result;
    if(success){
        handleSuccess(message);
        localStorage.setItem('token',jwtToken);
        localStorage.setItem('loggedInUser',name);
        setTimeout(() => {
               navigate('/home');
        }, 1000);
    }
    else if(error){
        handleError(error?.details[0].message);
    }
    else if(!success){
        handleError(message)
    }
    
} catch(err){
    console.log(err);
}

}

  return (
    <div className='Container'>
        <h1>LogIn</h1>
        <form onSubmit={loginsumbmitting}>

            {/* <div>
            <label htmlFor="name">Name *</label>
            <input type="text" name="name" id="one" autoFocus placeholder='Enter your name' onChange={loginchanging}/>
            </div> */}

            <div>
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" id="two" autoFocus placeholder='Enter your Email' onChange={loginchanging}/>
            </div>

            <div>
            <label htmlFor="password">Password *</label>
            <input type="password" name="password" id="three" autoFocus placeholder='Enter your Password' onChange={loginchanging}/>
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>

            <div>
                <span>Do Not have an account ?
                    <Link to="/signup">SignUP</Link>
                </span>
            </div>

        </form>
        <ToastContainer/>
    </div>
  )
}

export default Login