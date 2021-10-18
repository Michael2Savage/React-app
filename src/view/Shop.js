import React, { useState, useEffect } from 'react';
import axios from 'axios'
import getMemes from '../App'
import { createElement } from 'react';

function Shop(){

  const getAPIdata = async () => {
    let result = await axios.get(`https://api.imgflip.com/get_memes`);
    console.log(result.data.data.memes);
    return result.data.data.memes
  }

  getAPIdata()

  getAPIdata().forEach(function (meme) {
    const name = document.createElement("h1");
    name.innerHTML = getAPIdata.name;
  })
  

    return (
        <div id='product lines'></div>
    )


}



export default Shop
