/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import DisplayRecipeData from '../DisplayRecipeData/DisplayRecipeData';

const Recipe = ({ recipeData }) => {
    console.log(recipeData);
    return (
        <div className='my-52 md:my-0'>
            <h1 className='text-center text-4xl font-bold border-b-2 pb-5'>Chef's recipes</h1>
            <div className='md:w-[50%] mx-auto px-7 my-5'>
                {
                    recipeData && recipeData.map(recipe => <DisplayRecipeData key={recipe.id} recipe={recipe}></DisplayRecipeData>)
                }
            </div>
        </div>
    );
};

export default Recipe;