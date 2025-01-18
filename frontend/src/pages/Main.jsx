import React from 'react'
import {Helmet} from "react-helmet";
import Home from '../companents/Home';
import Guests from '../companents/Guests';
import Audio from '../companents/Audio';
import Podcast from '../companents/Podcast';
import Mic from '../companents/Mic';

function Main() {
  return (
    <>
   <Helmet>
   <link rel="icon" type="image/svg+xml" href="https://is.gd/z27GPR" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Podca</title>
   </Helmet>
   <Home/>
   <Audio/>
   <Podcast/>
   <Mic/>
   <Guests/>
   
    </>
  )
}

export default Main
