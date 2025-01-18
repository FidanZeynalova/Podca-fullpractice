import React, { useContext } from 'react'
import { useGetDatasQuery } from '../app/Slices/Slice'
import { AiTwotoneLike } from 'react-icons/ai'
import { PodcastContext } from '../context/FavoritesContext'
import { FaInfoCircle } from 'react-icons/fa'
import { NavLink } from 'react-router'

function Guests() {
    let { data, isLoading, refetch } = useGetDatasQuery()
    let { fav, setFav } = useContext(PodcastContext)

    function handleFav(item) {
        let filter = fav.find((podca) => podca._id == item._id)
        if (filter) {
            alert("Daha once elave olunub")
        } else {
            setFav([...fav, item])
        }
    }


    return (
        <div className='Guests'>
            <div className="container">
                <h2>Featured Guests</h2>
                <div className="card-wrapper">
                    {
                        isLoading ? (
                            <h1>...IsLoading</h1>
                        ) : (
                            data.map((item) => (
                                <div className="card" key={item.id}>
                                    <div className="img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div className="text">
                                        <p>{item.name}</p>
                                        <span>{item.desc}</span>
                                        <div className="btns" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                                            <button onClick={() => handleFav(item)}><AiTwotoneLike /></button>
                                            <button><NavLink style={{ color: "white" }} to={item._id}> <FaInfoCircle /></NavLink></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Guests
