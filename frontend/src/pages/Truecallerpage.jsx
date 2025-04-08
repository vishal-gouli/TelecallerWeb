import React, { useEffect, useMemo, useState } from 'react'
import styles from './Truecaller.module.css'
import axios from 'axios';


const Truecallerpage = () => {


let [backendData,setBackendData] = useState([]);
let [useeffect1 ,setuseeffect1]= useState(0)


                              // Read OPeration Starts here

async function demo(){
    let data = await fetch("http://localhost:8000/truecallerapi/");
    data = await data.json();
    setBackendData(data.data);
  }

    useEffect(()=>{
      demo();
      console.log("useeffect")
   },[useeffect1]);

                               // Read OPeration Ends here


let [addBtn,setAddBtn] = useState(false);
let [updateBtn,setUpdateBtn] = useState(false);


                               // Create OPeration Starts here
                              

let [truecaller,setTruecaller] = useState({
    name:"",email:"",phone:"",adress:null
});


let changing=({target:{name,value}})=>{
   setTruecaller({...truecaller,[name]:value})
}


let sumbmitting =async(e)=>{
    e.preventDefault();
    setAddBtn(false)
    setuseeffect1(useeffect1+1);
    await axios.post("http://localhost:8000/truecallerapi/create",truecaller);
    alert("Created Successfully");
}

                               // Read OPeration Ends here
                              

                               // Update OPeration Starts here


let [backUpdate,setBackUpdate] = useState({
    name:"",
    email:"",
    phone:null,
    adress:"",
    id:"",
    connected:"",
    notConnected:""
});

let updating=({name,email,phone,adress,_id})=>{
    console.log(name,email,phone,adress,_id)
    setBackUpdate({name:name,email:email,phone:phone,adress:adress,id:_id});
    setUpdateBtn(true);
}
console.log("backUpdate",backUpdate)

let updateChanging=({target:{name,value}})=>{
    setBackUpdate({...backUpdate,[name]:value})
}

let UpdateSumbmit=(e)=>{
    e.preventDefault();
    axios.put("http://localhost:8000/truecallerapi/update",backUpdate);
    setUpdateBtn(false);
    setuseeffect1(useeffect1+1);
    alert("Updated Successfully");
}


                               // Update OPeration Ends here
                                   

                               // Delete OPeration Starts here


let deleting=async(id)=>{
    alert("Deleted Successfully");
    setuseeffect1(useeffect1+1);
    let data1 = await axios.delete(`http://localhost:8000/truecallerapi/delete${id}`);
}



let connectedfunc=(e)=>{
    e.preventDefault();
    setBackUpdate(setBackUpdate.connected="yes")
}

let [dashborardArrayConn,setDashborardArrayConn] = useState([
    {
        name:"",
        connected:0,
        callStatus:"",
        notconnected:0
    }
]
)
localStorage.setItem('backendData1',JSON.stringify(dashborardArrayConn));

let dashboradFuncConnected=(backendData)=>{
   
    setDashborardArrayConn([...dashborardArrayConn,
       {
        name:backendData.map((e)=>e.name),
        connected:dashborardArrayConn.map((e)=>e.connected+1),
        notconnected:dashborardArrayConn.map((e)=>e.notconnected),
        callStatus:'response'
    }]);
}


let [dashborardArrayNotConn,setDashborardArrayNotConn] = useState([
    {
        name:"",
        connected:0,
        callStatus:"",
        notconnected:0
    }
]
)

localStorage.setItem('backendData2',JSON.stringify(dashborardArrayNotConn));

    
 function dashboardFuncNotConne(backendData){
    setDashborardArrayNotConn([...dashborardArrayNotConn,
        {
        name:backendData.map((e)=>e.name),
        connected:dashborardArrayNotConn.map((e)=>e.connected),
        notconnected:dashborardArrayNotConn.map((e)=>e.notconnected+1),
        callStatus:'Busy'
        }
    ])
    setArr(dashborardArray);
}



// localStorage.setItem('backendData',arr.push(backendData))
console.log("localstorage",localStorage.getItem('backendData'));



console.log("dashborardArrayconn",dashborardArrayConn);
console.log("dashborardArrayNotConn",dashborardArrayNotConn);


  return (
    <>

    <div className={styles.section}>

        <div className={styles.addButtonCont}>
               <button onClick={()=>{setAddBtn(!addBtn)}}>add NewUser</button>
        </div>
          
          <div className={styles.tableContainer}>
               <table border="2" className={styles.table}>

                   <thead className={styles.thead}><tr>
                    <th className={styles.th}>Name</th>
                    <th className={styles.th}>Email</th>
                    <th className={styles.th}>Phone No:</th>
                    <th className={styles.th}>Adress</th>
                    <th className={styles.th}>Updat</th>
                    <th className={styles.th}>Delete</th>
                    </tr>
                    </thead>

                   <tbody className={styles.tbody}>
{backendData.map((e)=>{
    return(
                    <tr>
                    <td className={styles.td}>{e.name}</td>
                    <td className={styles.td}>{e.email}</td>
                    <td className={styles.td}>{e.phone}</td>
                    <td className={styles.td}>{e.adress}</td>
                    <td className={styles.td}><button style={{width:'100px'}} onClick={()=>{updating(e)}}>update</button></td>
                    <td className={styles.td}><button style={{width:'100px'}} onClick={()=>{deleting(e._id)}}>Delete</button></td>
                    </tr>
)
})}

                    </tbody>
               </table>
          </div>
    </div>


                       {/* conditional rendering the form of the new-user */}

    {addBtn && 
    
    <div className={styles.Container}>
    <h1>New User</h1>
    <form onSubmit={sumbmitting} className={styles.form}  >

        <div>
        <label htmlFor="name">Name *</label>
        <input className={styles.input} type="text" name="name" id="one" autoFocus placeholder='Enter your name' onChange={changing}/>
        </div>

        <div>
        <label htmlFor="email">Email *</label>
        <input className={styles.input} type="email" name="email" id="two" autoFocus placeholder='Enter your Email' onChange={changing}/>
        </div>

        <div>
        <label htmlFor="password">Phone No *</label>
        <input className={styles.input} type="cell" name="phone" id="three" autoFocus placeholder='Enter your Password' onChange={changing}/>
        </div>

        <div>
        <label htmlFor="password">Adress *</label>
        <input className={styles.input} type="text" name="adress" id="three" autoFocus placeholder='Enter your Password' onChange={changing}/>
        </div>

        <div>
            <button type='submit'>Save</button>
        </div>


    </form>
</div>
     }
    

                       {/* conditional rendering the form of the Update-user */}


    {updateBtn && 
    
    <div className={styles.Container}>
    <h1>Update User</h1>
    <form className={styles.form}  >

        <div>
        <label htmlFor="name">Name *</label>
        <input className={styles.input} type="text" name="name" id="one" autoFocus placeholder='Enter your name' onChange={updateChanging} value={backUpdate.name}/>
        </div>

        <div>
        <label htmlFor="email">Email *</label>
        <input className={styles.input} type="email" name="email" id="two" autoFocus placeholder='Enter your Email' onChange={updateChanging} value={backUpdate.email}/>
        </div>

        <div>
        <label htmlFor="password">Phone No *</label>
        <input className={styles.input} type="cell" name="phone" id="three" autoFocus placeholder='Enter your Password' onChange={updateChanging} value={backUpdate.phone}/>
        </div>

        <div>
        <label htmlFor="password">Adress *</label>
        <input className={styles.input} type="text" name="adress" id="three" autoFocus placeholder='Enter your Password' onChange={updateChanging} value={backUpdate.adress}/>
        </div>

        <div>
            <button className={styles.btn} type='submit' onClick={(e)=>{e.preventDefault();dashboradFuncConnected(backendData)}}>Connected</button>
            <button className={styles.btn} type='submit' onClick={(e)=>{e.preventDefault();dashboardFuncNotConne(backendData)}}>Not Connected</button>
        </div>

        <div>
            <button onClick={UpdateSumbmit}>Save</button>
        </div>
        

    </form>
</div>
}
    </>
  )
}

export default Truecallerpage