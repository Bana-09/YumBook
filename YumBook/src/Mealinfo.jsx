import React, { useState } from 'react'
import { data, useParams } from 'react-router-dom'
import Loader from './Loader';

const Mealinfo = () => {
    const { mealid } = useParams();
    const [info, setInfo] = useState();
    // console.log(mealid);

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const jsonData = await get.json();
        // console.log(jsonData.meals[0]);
        setInfo(jsonData.meals[0]);
    }
    if (info != "") {
        getInfo();
    }

    return (
        <div>

            {!info ? <Loader></Loader> :
                <div className='info' style={{ padding: "2rem", gap: "2rem" }}>
                    {<img src={info.strMealThumb} style={{ height: "60vh", borderRadius: "4rem" }} />}
                    <div className='Recipediv' >
                        <h1>Recipe Detail</h1>

                        <h3 style={{}}>Instructions</h3>
                        <p style={{ wordSpacing: "2px" }}>{info.strInstructions} </p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Mealinfo