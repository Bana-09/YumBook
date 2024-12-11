
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Mealcards from './Mealcards'


const FoodComp = () => {


    const [data, setData] = useState()
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const foodname = queryParams.get('query');

    useEffect(() => {
        const myFun = async () => {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodname}`);
            const jsonData = await get.json()

            setData(jsonData.meals)
        }

        myFun();
    }, [])

    return (

        <div><Mealcards detail={data} /></div>
    )
}

export default FoodComp