// Import statements 
import React, { useState } from 'react';
import Profiles from './profiles';
import { FlavorexDatabase } from './database';

// Import statements for css files 
import '../css/style.css';


export default function Board() {
  const [period, setPeriod] = useState(0);
  const handleClick = (e) => {
    setPeriod(e.target.dataset.id)
  }


  return (
    <div className='app' id='main'>
      <div className="board">
          <div className='header'>
          
            <h1 className='leaderboard'>🌿 Flavorex 🌿</h1>

            <div className="duration" >
                <button onClick={handleClick} className='category-button' data-id='traditional'>Traditional</button>
                <button onClick={handleClick} className='category-button' data-id='dessert'>Dessert</button>
                <button onClick={handleClick} className='category-button' data-id='0'>All Items</button>
            </div>

          </div>

          <Profiles FlavorexDatabase={between(FlavorexDatabase, period)}></Profiles>

      </div>
    </div>
  )
}

// Function to filter between traditional and dessert food items
function between(data, between){
  
    let filter = data.filter(val => {
        if (between == 0) return val;
        if (between == 'traditional') return val.type=='Traditional';
        if (between == 'dessert') return val.type=='Dessert';
    })

    return filter;
}

