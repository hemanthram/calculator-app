import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const url = 'https://api.randomuser.me/';

const Part2 = () => {
    const [data, setData] = useState(undefined);
    const [err,setErr] = useState(undefined);

    const fetchData = (e) => {
        fetch(url)
        .then(results => results.json())
        .then(dat => {
            setData(dat.results[0]);
            console.log(dat.results[0]);
            setErr(undefined);
            e.target.innerHTML = 'Fetch API';
            e.target.disabled = false;
        })
        .catch((error) => {
            console.log(error);
            setErr(error,error.name);
            alert("Could'nt fetch, Try Again or check your Connection")
            e.target.innerHTML = 'Fetch API';
            e.target.disabled = false;            
        })
        
        e.persist();
        e.target.disabled = true;
        e.target.innerHTML = 'Loading';
    }

    return (
        <div>
            <p> Welcome to new route </p>
            <Link to='/'>Go back</Link><br/>
            <button onClick = {fetchData}> Fetch API </button>
            {data && (
            <table><tbody>
                <tr>
                    <th>Property</th>
                    <th>Value</th>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>{data.gender}</td>
                </tr>
                <tr>
                    <td>Age</td>
                    <td>{data.dob.age}</td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{data.name.first+' '+data.name.last}</td>
                </tr>
                <tr>
                    <td>Country</td>
                    <td>{data.location.country}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{data.email}</td>
                </tr>
                <tr>
                    <td>Username</td>
                    <td>{data.login.username}</td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>{data.login.password}</td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td>{data.dob.date.split('T')[0]}</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                    <td>{data.cell}</td>
                </tr>
            </tbody></table> 
            )}
            {err && <p>Failed to Fetch</p>}
        </div>
    )
}

export default Part2;