/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDatailsBannar from '../../pages/ChefDatailsBannar/ChefDatailsBannar';
import Recipe from '../../pages/Recipe/Recipe';


const ChefDetails = () => {
    const recipeData=useLoaderData()
    const [chefData,setChefData]=useState(null)
    const {id}= useParams()
    console.log(id);
    useEffect(()=>{
        fetch(`https://cuisine-chemistry-server-towhidulislam2023.vercel.app/chefs/${id}`)
        .then(res=>res.json())
            .then(data => setChefData(data))
    },[])

    return (
        <div>
            <ChefDatailsBannar chefData={chefData} ></ChefDatailsBannar>
            <Recipe recipeData={recipeData}></Recipe>
        </div>
    );
};

export default ChefDetails;