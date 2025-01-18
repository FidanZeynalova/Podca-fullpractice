import React from 'react'
import { NavLink, useParams } from 'react-router'
import { useGetDataQuery } from '../app/Slices/Slice'
import { RiArrowGoBackFill } from "react-icons/ri";
import { AiTwotoneLike } from 'react-icons/ai';
import { Helmet } from 'react-helmet';

function Detail() {
  let { id } = useParams()
  let { data, isLoading } = useGetDataQuery(id)
  console.log(data); 

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/svg+xml" href="https://is.gd/LyZLJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Detail</title>
      </Helmet>
      <div className='Detail'>
        <h1>Detail</h1>
        {
          isLoading ? (
            <h1>...Loading</h1>
          ) : (
            <div className="card" >
              <div className="img">
                <img src={data.img} alt="" />
              </div>
              <div className="text">
                <p>{data.name}</p>
                <span>{data.desc}</span>
                <div className="btns" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <button><AiTwotoneLike /></button>
                  <button><NavLink style={{ color: "white" }} to={"/"}> <RiArrowGoBackFill /></NavLink></button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  )
}

export default Detail
