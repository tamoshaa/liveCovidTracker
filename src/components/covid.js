import React, {useEffect, useState} from 'react'
import './covid.css';


const Covid = () => {
    const [data, setData] = useState([]);
    const getCovidData= async () => {
     try{ 
         const res = await fetch('https://api.covid19india.org/data.json');
        const actualData =  await res.json();
        console.log(actualData.statewise[0]);
        setData(actualData.statewise[0]);
     }catch(err){
        console.log(err);
     }
 }
    useEffect(() => {
        getCovidData();
     
    }, [])
    
    return (
        <div>
            <section>
         <h1>LIVE</h1>
         <h2>COVID-19 LIVE TRACKER</h2>
         <ul>
             <li className="card">
                 <div className="card__main">
                     <div className="class__inner">
                         <p className= "card__name">
                             <span>Our </span>COUNTRY </p>
                        <p className="card__total">INDIA</p>
                     </div>
                 </div>
             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="class__inner">
                         <p className= "card__name">
                             <span>Total </span>RECOVERED </p>
                        <p className="card__total">{data.recovered}</p>
                     </div>
                 </div>
             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="class__inner">
                         <p className= "card__name">
                             <span>Total </span>CONFIRMED </p>
                        <p className="card__total ">{data.confirmed}</p>
                     </div>
                 </div>
             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="class__inner">
                         <p className= "card__name">
                             <span>Total </span>DEATHS </p>
                        <p className="card__total ">{data.deaths}</p>
                     </div>
                 </div>
             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="class__inner">
                         <p className= "card__name">
                             <span>Total </span>ACTIVE </p>
                        <p className="card__total">{data.active}</p>
                     </div>
                 </div>
             </li>
             <li className="card">
                 <div className="card__main">
                     <div className="class__inner">
                         <p className= "card__name">
                             <span>Last </span>UPDATED </p>
                        <p className="card__total">{data.lastupdatedtime}</p>
                     </div>
                 </div>
             </li>
         </ul>
         </section>
     </div>
    )
}

export default Covid
