import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa";
import { NavLink } from 'react-router'
import { PodcastContext } from '../context/FavoritesContext';

function Navbar() {
        let {fav} = useContext(PodcastContext)
    
    return (
        <div className='Navbar'>
            <div className="container">
                <div className="logo">
                    <h1>PodCa</h1>
                </div>
                <div className="list">
                    <ul>
                        <li><NavLink to={"/"} style={{ color: "black" }}>Home</NavLink></li>
                        <li>About</li>
                        <li>Collection</li>
                        <li><NavLink to={"/add"} style={{ color: "black" }}>Add</NavLink></li>
                        <li><NavLink to={"/wishlist"} style={{ color: "black" }}>Wishlist ({fav.length})</NavLink></li>
                    </ul>
                    <div className="icon">
                        <FaBars />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
