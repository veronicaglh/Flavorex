// Import statements 
import React from 'react'; 

// Import statements for css files
import '../../css/recipe_style.css'; 


export default function Shiro() {
  return (
    <div className="recpie-board"> 
    <div className='header'>  
    
      <img className='recpie-background-image'src={"https://static.wixstatic.com/media/fa00aa_ff265a3c4b1f4baf880ea8a5f92d66ca~mv2.jpg/v1/fill/w_1000,h_782,al_c,q_85,usm_0.66_1.00_0.01/fa00aa_ff265a3c4b1f4baf880ea8a5f92d66ca~mv2.jpg"} />

      <div className='ingredients-card'>
        <h1 className='leaderboard'>Shiro</h1>

          <div className="duration">
            <p>SHIRO INGREDIENTS</p>
            <p className='ingredients'>- Lorem ipsum</p>
            <p className='ingredients'>- Dolor sit amet</p>
            <p className='ingredients'>- Consectetur</p>
            <p className='ingredients'>- Adipiscing elit</p>
            <p className='ingredients'>- Sed do eiusmod</p>
            
            <p className='recpie-formula'>SHIRO RECPIE</p>
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
