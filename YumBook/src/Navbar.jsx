import React from 'react'
import { useState } from 'react'

import { NavLink, Link } from 'react-router-dom'
import { MdRestaurantMenu } from "react-icons/md";
import { LuUtensilsCrossed } from "react-icons/lu";



const Navbar = () => {

    const [search, setSearch] = useState();
    const [Menu, setMenu] = useState(false);

    const handleInp = (e) => {
        setSearch(e.target.value)
    }

    return (
        <>


            <div className='Nav'>

                <div className='container'>
                    <NavLink to='/'><div className='logo'></div></NavLink>
                    <div className='con-home' >
                        <NavLink to='/'><p>HOME</p></NavLink>
                        <p>RECIPES</p>
                        <p>SUGGESTIONS</p>
                    </div>
                    <div className='searchbar'>
                        <input type='text' placeholder='Enter Dishes' onChange={handleInp} />
                        <NavLink to={`/food?query=${encodeURIComponent(search)}`} ><button className='srchbtn'>Search</button></NavLink >
                    </div>
                    <MdRestaurantMenu className='menu-icon' onClick={() => { setMenu(true) }} />
                </div>


            </div>


            {Menu &&
                <div className='menuu'>
                    <LuUtensilsCrossed style={{ fontSize: "1.5rem", color: "red" }} onClick={() => { setMenu(false) }} />
                    <Link style={{ color: "white", textDecoration: "none" }} to='/'><p onClick={() => setMenu(false)}>HOME</p></Link>
                    <p onClick={() => setMenu(false)}>RECIPES</p>
                    <p onClick={() => setMenu(false)}>SUGGESTIONS</p>
                    <div className='searchbar2'>
                        <input type='text' placeholder='Enter Dishes' onChange={handleInp} />
                        <NavLink to={`/food?query=${encodeURIComponent(search)}`}><button className='srchbtn' onClick={() => setMenu(false)}>Search</button></NavLink >
                    </div>

                </div>}

        </>
    )
}

export default Navbar