import React, { useEffect, useState } from 'react'
import { createContext } from 'react'

export const PodcastContext = createContext()

function FavoritesContextProvider({ children }) {
    let local = JSON.parse(localStorage.getItem("favorites"))
    let [fav, setFav] = useState(local ? local : [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(fav))
    }, [fav])
    const value = {
        fav, setFav
    }
    return (
        <PodcastContext.Provider value={value} >
            {children}
        </PodcastContext.Provider>
    )
}

export default FavoritesContextProvider
