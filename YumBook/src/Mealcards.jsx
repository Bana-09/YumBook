import React from 'react'
import { NavLink } from 'react-router-dom';
import Loader from './Loader';


const Mealcards = ({ detail }) => {
    console.log(detail);

    return (
        <div className='meals'>
            {!detail ? <Loader></Loader> : detail.map((curItem, i) => {
                return (

                    <div className='mealimg' key={i} style={{ display: "flex", flexDirection: "column", gap: ".7rem" }}>
                        <img className='mealsimgs' src={curItem.strMealThumb} />
                        <p>{curItem.strMeal}</p>
                        <NavLink to={`/${curItem.idMeal}`}> <button className='recipebtn' >Recipe</button></NavLink>

                    </div>
                )
            })

            }
        </div>
    )
}

export default Mealcards