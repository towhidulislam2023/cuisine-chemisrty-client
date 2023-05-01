/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ChefDetails = () => {
    const [chefData,setChefData]=useState(null)
    const {id}= useParams()
    console.log(id);
    useEffect(()=>{
        fetch(`https://cuisine-chemistry-server-towhidulislam2023.vercel.app/chefs/${id}`)
        .then(res=>res.json())
            .then(data => setChefData(data))
    },[])
    console.log(chefData);
    return (
        <div>
            <h1>This is chedDatils page</h1>
        </div>
    );
};

export default ChefDetails;