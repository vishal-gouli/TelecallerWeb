import React, { useEffect, useState } from 'react'
import styles from "../pages/DashboardPage.module.css";
import axios from 'axios';


const data = [
  { day: "Mon", calls: 120 },
  { day: "Tue", calls: 98 },
  { day: "Wed", calls: 140 },
  { day: "Thu", calls: 110 },
  { day: "Fri", calls: 160 },
  { day: "Sat", calls: 90 },
  { day: "Sun", calls: 70 },
];

const connectedCalls = [
  { customer: "Anita Sharma", time: "08-Apr, 10:15 AM", telecaller: "Raj", status: "Interested" },
  { customer: "Vikram Rao", time: "07-Apr, 05:30 PM", telecaller: "Priya", status: "Callback" },
  { customer: "Nisha Patel", time: "07-Apr, 11:45 AM", telecaller: "Sunil", status: "Discussed" },
];
const Dashboardpage = () => {

console.log(localStorage.getItem('backend1'));
console.log(localStorage.getItem('backend2'));

let [state,setState]= useState([])

let demo=async()=>{
  let data = await fetch('http://localhost:8000/truecallerapi/');
  data = await data.json();
  console.log(data.data);
  setState(data.data);
}

useEffect(async()=>{
   demo();
})

console.log(state);

  return (
   <>
    <div className={styles.dashboard}>
      <u><h1>Dash Board</h1></u>
      <div className={styles.firstHalf}>
      <div className={styles.metricsSection}>
        <div className={styles.card}>
          <p>Total Telecallers</p>
          <h2></h2>
        </div>
        <div className={styles.card}>
          <p>Total Calls Made</p>
          <h2>1,230</h2>
        </div>
        <div className={styles.card}>
          <p>Total Customers Contacted</p>
          <h2>890</h2>
        </div>
      </div>
      <div>


      <div className={styles.chartSection}>
        <h2>Weekly Call Trends</h2>
  
  <table border="2" className={styles.table}>
  
                     <thead className={styles.thead}><tr>
                      <th className={styles.th}>Day</th>
                      <th className={styles.th}>No Of Calls</th>
                      </tr>
                      </thead>
  
                     <tbody className={styles.tbody}>
                      {data.map((e)=>{ 
                      return( 
                    <tr>
                      <td className={styles.td}>{e.day}</td>
                      <td className={styles.td}>{e.calls}</td>
                     </tr>
                       )
                     })} 
                      
  
  
                      </tbody>
                 </table>
   </div>

      </div>

      </div>

<div className={styles.secHalf}>

      <div className={styles.activitiesSection}>
        <h2>Recent Activities</h2>
        <ul>
          <li>Raj called customer <strong>Anita Sharma</strong> – <em>Interested</em>.</li>
          <li>New lead <strong>Rohit Mehra</strong> added by <strong>Pooja</strong>.</li>
          <li>Priya called <strong>Vikram Rao</strong> – <em>Callback</em> scheduled.</li>
        </ul>
      </div>

      <div className={styles.tableSection}>
        <h2>Connected Call Records</h2>
        <table>
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Call Date & Time</th>
              <th>Telecaller Name</th>
              <th>Call Status</th>
            </tr>
          </thead>
          <tbody>
            {connectedCalls.map((call, index) => (
              <tr key={index}>
                <td>{call.customer}</td>
                <td>{call.time}</td>
                <td>{call.telecaller}</td>
                <td>{call.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
   </>
  )
}

export default Dashboardpage