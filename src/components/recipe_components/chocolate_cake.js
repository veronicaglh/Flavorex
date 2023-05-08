// Import statements 
import React from 'react'; 

// Import statements for css files
import '../../css/recipe_style.css';


export default function ChocolateCake() {
  return (

    <div className="recpie-board"> 
    <div className='header'>  
    
      <img className='recpie-background-image'src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSSlUy0pm_VOF0E9ADHUr1rfamWWECz33YQ&usqp=CAU"} />

      <div className='ingredients-card'>
        <h1 className='leaderboard'>Chocolate Cake</h1>

          <div className="duration">
            <p>CHOCOLATE CAKE INGREDIENTS</p>
            <p className='ingredients'>- Lorem ipsum</p>
            <p className='ingredients'>- Dolor sit amet</p>
            <p className='ingredients'>- Consectetur</p>
            <p className='ingredients'>- Adipiscing elit</p>
            <p className='ingredients'>- Sed do eiusmod</p>
            
            <p className='recpie-formula'>CHOCOLATE CAKE RECPIE</p>
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
