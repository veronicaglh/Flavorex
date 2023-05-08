// Import statements 
import React from 'react';

// Import statements for css files 
import '../../css/style.css';
import '../../css/recipe_style.css';


export default function DoroWet() {

  return (
      <div className="recpie-board"> 
        <div className='header'>  
        
          <img className='recpie-background-image'src={"https://i0.wp.com/travelandmunchies.com/wp-content/uploads/2023/02/IMG_5280.jpg?resize=640%2C458&ssl=1"} />

          <div className='ingredients-card'>
            <h1 className='leaderboard'>Doro Wet</h1>

              <div className="duration">
                <p>DORO WET INGREDIENTS</p>
                <p className='ingredients'>- Lorem ipsum</p>
                <p className='ingredients'>- Dolor sit amet</p>
                <p className='ingredients'>- Consectetur</p>
                <p className='ingredients'>- Adipiscing elit</p>
                <p className='ingredients'>- Sed do eiusmod</p>
                
                <p className='recpie-formula'>DORO WET RECPIE</p>
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


