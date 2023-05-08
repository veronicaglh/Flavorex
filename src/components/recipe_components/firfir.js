// Import statements 
import React from 'react'; 

// Import statements for css files
import '../../css/recpie_style.css'; 


export default function Firfir() {
  return (
    <div className="recpie-board"> 
    <div className='header'>  
    
      <img className='recpie-background-image'src={"https://live.staticflickr.com/1366/4599462234_cda94557f4_b.jpg"} />

      <div className='ingredients-card'>
        <h1 className='leaderboard'>Firfir</h1>

          <div className="duration">
            <p>FIRFIR INGREDIENTS</p>
            <p className='ingredients'>- Lorem ipsum</p>
            <p className='ingredients'>- Dolor sit amet</p>
            <p className='ingredients'>- Consectetur</p>
            <p className='ingredients'>- Adipiscing elit</p>
            <p className='ingredients'>- Sed do eiusmod</p>
            
            <p className='recpie-formula'>FIRFIR RECPIE</p>
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
