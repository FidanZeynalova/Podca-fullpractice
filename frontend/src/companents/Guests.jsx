import React, { useContext, useEffect, useState } from 'react'
import { useGetDatasQuery } from '../app/Slices/Slice'
import { AiTwotoneLike } from 'react-icons/ai'
import { PodcastContext } from '../context/FavoritesContext'
import { FaInfoCircle } from 'react-icons/fa'
import { NavLink } from 'react-router'

function Guests() {
    let { data, isLoading, refetch } = useGetDatasQuery()
    let { fav, setFav } = useContext(PodcastContext)
    let [allData, setAllData] = useState([])

    useEffect(() => {
        if (data) {
            setAllData(data)
        }
    }, [data])

    function handleFav(item) {
        let filter = fav.find((podca) => podca._id == item._id)
        if (filter) {
            alert("Daha once elave olunub")
        } else {
            setFav([...fav, item])
        }
    }
    function handleSeacrh(inPValue) {
        if (inPValue.trim().toLowerCase() == '') {
            setAllData(data)
        } else {
            let filter = data.filter((item) => item.name.toLowerCase().includes(inPValue.trim().toLowerCase()))
            setAllData(filter)
        }
    }
    function handleSort(sortValue) {
        let sortedValue = [...allData]
        switch (sortValue) {
            case "default":
                sortedValue = [...data]
                break;
            case "az":
                sortedValue.sort((a, b) => a.name.localeCompare(b.name))
                break;
            case "za":
                sortedValue.sort((a, b) => b.name.localeCompare(a.name))
                break;

            default:
                break;
        }
        setAllData(sortedValue)
    }


    return (
        <div className='Guests'>
            <div className="container">
                <h2>Featured Guests</h2>
                <div className="sort-search">
                    <div className="search">
                        <input type="text" placeholder='Search...' onChange={(e) => handleSeacrh(e.target.value)} />
                    </div>
                    <div className="sort">
                        <select onChange={(e) => handleSort(e.target.value)}>
                            <option value="default">Default</option>
                            <option value="az">A-Z</option>
                            <option value="za">Z-A</option>
                        </select>
                    </div>
                </div>
                <div className="card-wrapper">
                    {
                        isLoading ? (
                            <h1>...IsLoading</h1>
                        ) : (
                            allData.map((item) => (
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
