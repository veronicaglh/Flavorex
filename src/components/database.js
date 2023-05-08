// Import statements
import {Link} from "react-router-dom"; 


export const FlavorexDatabase = [
    {
        name: <span className='recpie-nav'><nav><Link className='recpie-nav' style={{color: 'black', textDecoration:'none'}} to="/dorowet">Doro Wet</Link></nav></span>, 
        type: "Traditional",
        time:  "2 hours",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCMu7qTVECY3pBZupmO0wQhs1Ae0rwduGGBacKfwZ-GjfhToQ6IJ1LkyydjLOZ1bM474&usqp=CAU"
    }, 

    {
        name: <Link className='recpie-nav' style={{color: 'black', textDecoration:'none'}} to="/shiro">Shiro</Link>,
        type: "Traditional",
        time : "1 hour ",
        img: "https://cdn1.vox-cdn.com/thumbor/5fexqwE33gKBxp-0HQFxYtcAvT8=/1200x0/filters:no_upscale()/cdn1.vox-cdn.com/uploads/chorus_asset/file/7524149/untitled-9939.0.jpeg"
    },

    {
        name: <Link className='recpie-nav' style={{color: 'black', textDecoration:'none'}} to="/firfir">Firfir</Link>,
        type: "Traditional",
        time: "1 hour",
        img:"https://live.staticflickr.com/1366/4599462234_cda94557f4_b.jpg"
    },

    {
        name: <Link className='recpie-nav' style={{color: 'black', textDecoration:'none'}} to="/mesir">Mesir</Link>,
        type: "Traditional",
        time: "1 hour",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXEr-YbSFcYWC8klDDVM3wWEdeZ4wlt42hw&usqp=CAU"
    },

    {
        name: <Link className='recpie-nav' style={{color: 'black', textDecoration:'none'}} to="/vanillacake">Vanilla Cake</Link>,
        type: "Dessert",
        time: "1:30 minutes",
        img: "https://www.sbs.com.au/food/sites/sbs.com.au.food/files/my_perfect_vanilla_cake_2_0.jpg"
    },
    
    {
        name: <Link className='recpie-nav' style={{color: 'black', textDecoration:'none'}} to="/chocolatecake">Chocolate Cake</Link>,
        type: "Dessert",
        time: "1:15 minutes",
        img:"https://inbloombakery.com/wp-content/uploads/2021/05/Chocolate-Berry-Cake-2-1.jpg"
    }, 
]