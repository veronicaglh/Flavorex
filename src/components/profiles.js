// Import statements
import React from 'react';

export default function profiles({FlavorexDatabase}) {
  return (
        <div id="profile">
            {Item(FlavorexDatabase)}
        </div>
  )
}


function Item(data){
    return (

        <>
            {
                data.map((value, index) => (

                    <div className="flex" key={index}>

                        <button className='profile-button'>
                            <div className="item">
                                <img src={value.img} alt="" />
                                <div className="info">
                                    <h3 className='name text-dark'>{value.name}</h3>    
                                    <span>{value.type}</span>
                                </div>                
                            </div>

                            <div className="item">
                                <span class="time-duration">{value.time}</span>
                            </div>
                        </button>

                    </div>

                    )
                )
            }
        </>
        
    )
}