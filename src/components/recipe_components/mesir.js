// Import statements 
import React from 'react';

// Import statements for css files
import '../../css/recipe_style.css';


export default function Mesir() {
  return (
    <div className="recpie-board"> 
    <div className='header'>  
    
      <img className='recpie-background-image'src={"https://www.lentils.org/wp-content/uploads/2022/06/1Sask-Pulse-Mesir-Wat-Ethiopian-Spiced-Red-Lentils-7457.jpg"} />

      <div className='ingredients-card'>
        <h1 className='leaderboard'>Mesir </h1>

          <div className="duration">
            <p>MESIR INGREDIENTS</p>
            <p className='ingredients'>- Lorem ipsum</p>
            <p className='ingredients'>- Dolor sit amet</p>
            <p className='ingredients'>- Consectetur</p>
            <p className='ingredients'>- Adipiscing elit</p>
            <p className='ingredients'>- Sed do eiusmod</p>
            
            <p className='recpie-formula'>MESIR RECPIE</p>
            <p>1. Lorem ipsum dolor</p>
            <p>2. Sit amet, consectetur</p>
            <p>3. Adipiscing elit</p>
            <p>3. Sed do eiusmod</p>
            <p>4. Tempor incididunt</p>
          </div>

      </div>

    </div>
  </div>
  )
}

