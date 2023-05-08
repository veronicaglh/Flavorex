// Import statements 
import React from 'react';

// Import statements for css files
import '../../css/recipe_style.css';

export default function VanillaCake() {
  return (
    <div className="recpie-board"> 
    <div className='header'>  
    
      <img className='recpie-background-image'src={"https://iscreamforbuttercream.com/wp-content/uploads/2022/02/Mini-6-inch-vanilla-cake-wide-with-wm-18-of-19.jpg"} />

      <div className='ingredients-card'>
        <h1 className='leaderboard'>Vanilla Cake</h1>

          <div className="duration">
            <p>VANILLA CAKE INGREDIENTS</p>
            <p className='ingredients'>- Lorem ipsum</p>
            <p className='ingredients'>- Dolor sit amet</p>
            <p className='ingredients'>- Consectetur</p>
            <p className='ingredients'>- Adipiscing elit</p>
            <p className='ingredients'>- Sed do eiusmod</p>
            
            <p className='recpie-formula'>VANILLA CAKE RECPIE</p>
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
