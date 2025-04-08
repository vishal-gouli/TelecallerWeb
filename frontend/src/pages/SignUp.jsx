import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import { handleError ,handleSuccess } from '../utils';
import axios from 'axios'

const SignUp = () => {

let [signupinfo,setsignupinfo] = useState({
    name:"",email:"",password:""
});

let navigate = useNavigate();

let changing=({target:{name,value}})=>{
   setsignupinfo({...signupinfo,[name]:value})
}

let sumbmitting=async(e)=>{
   e.preventDefault();
   let {name,email,password} = signupinfo;
   if(!name || !email || !password){
      handleError("* indicates field is mandatory to fill")
   }

try{
    const response = await fetch("http://localhost:8000/api/signup",
        {
       method:"POST",
       headers:{
        'Content-Type':"application/json"
       },
       body: JSON.stringify(signupinfo)
    }
);
    const result = await response.json();
    console.log(result)
    let {success,message,error}= result;
    if(success){
        // handleSuccess(message);
        setTimeout(() => {
               navigate('/login');
        }, 1000);
    }
    else if(error){
        handleError(error?.details[0].message);
    }
    
} catch(err){
    console.log(err);
}

}

  return (
    <div className='Container'>
        <h1>SignUp</h1>
        <form onSubmit={sumbmitting}>

            <div>
            <label htmlFor="name">Name *</label>
            <input type="text" name="name" id="one" autoFocus placeholder='Enter your name' onChange={changing}/>
            </div>

            <div>
            <label htmlFor="email">Email *</label>
            <input type="email" name="email" id="two" autoFocus placeholder='Enter your Email' onChange={changing}/>
            </div>

            <div>
            <label htmlFor="password">Password *</label>
            <input type="password" name="password" id="three" autoFocus placeholder='Enter your Password' onChange={changing}/>
            </div>

            <div>
                <button type='submit'>Submit</button>
            </div>

            <div>
                <span>Already have an account ?
                    <Link to="/login">Login</Link>
                </span>
            </div>

        </form>
        <ToastContainer/>
    </div>
  )
}

export default SignUp