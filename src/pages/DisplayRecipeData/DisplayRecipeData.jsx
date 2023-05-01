/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const DisplayRecipeData = ({ recipe }) => {
    console.log(recipe);
    return (
        <div className="card  bg-base-100 shadow-xl my-11">
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold">{recipe.recipeName}</h2>
                <h1 className='text-2xl font-semi-bold'>ingredients:</h1>
                <div>
                    {
                        recipe.ingredients.map((ingredent,idx)=><li key={idx}>{ingredent}</li>)
                    }
                </div>
                <h1 className='text-2xl font-semi-bold'>Cooking method:</h1>
                <p>{recipe.cookingMethod}</p>
                <div className="card-actions justify-between items-center">
                    {recipe.rating}
                    <button className="btn btn-warning"> Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayRecipeData;