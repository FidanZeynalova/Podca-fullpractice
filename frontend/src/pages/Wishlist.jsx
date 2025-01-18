import React, { useContext } from 'react'
import { AiTwotoneDislike } from "react-icons/ai";
import { PodcastContext } from '../context/FavoritesContext';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router';

function Wishlist() {
    let { fav, setFav } = useContext(PodcastContext)

    function handleDelete(item) {
        let filter = fav.filter((podca) => podca._id != item._id)
        setFav(filter)
    }
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/svg+xml" href="https://is.gd/ciJvx0" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Wishlist</title>
            </Helmet>
            <div className='Wishlist'>
                <div className="container">
                    <h2>Wishlist Guests</h2>
                    <div className="card-wrapper">
                        {
                            fav.length == 0 ? (
                                <button style={{backgroundColor:"#f23a2e",padding:"10px",fontSize:"20px"}}><NavLink to={"/"} style={{color:"white"}}> Go Back</NavLink></button>
                            ) : (
                                fav.map((item) => (
                                    <div className="card" key={item._id}>
                                        <div className="img">
                                            <img src={item.img} alt="" />
                                        </div>
                                        <div className="text">
                                            <p>{item.name}</p>
                                            <span>{item.desc}</span>
                                            <button onClick={() => handleDelete(item)} ><AiTwotoneDislike /></button>
                                        </div>
                                    </div>
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
