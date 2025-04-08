import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  let navigate = useNavigate();


let [admin,setadmin] = useState({
    role:"",secretKey:""
});



let loginchanging=({target:{name,value}})=>{
    setadmin({...admin,[name]:value})
}

// console.log("loginchecking",admin)

let loginsumbmitting =()=>{
    
if(admin.role == "admin" && admin.secretKey == "admin@insLab"){
      navigate("/dashboard");
}
else if(admin.role == "truecaller" && admin.secretKey == "truecaller@insLab"){
      navigate("/truecaller");
}
  
}

  return (
    <div className='Container'>
    <h1>WelCome to InsLab</h1>
    <form onSubmit={loginsumbmitting}>
        <div>
        <label htmlFor="two">Role *</label>
        <input type="text" name="role" id="two" autoFocus placeholder='Enter your Role' onChange={loginchanging}/>
        </div>

        <div>
        <label htmlFor="three">Secret Key *</label>
        <input type="password" name="secretKey" id="three" autoFocus placeholder='Enter your Secret Key' onChange={loginchanging}/>
        </div>

        <div>
            <button type='submit'>Submit</button>
        </div>
{/* 
        <div>
            <span>Do Not have an account ?
                <Link to="/signup">SignUP</Link>
            </span>
        </div> */}

    </form>
    {/* <ToastContainer/> */}
</div>
  )
}

export default Home