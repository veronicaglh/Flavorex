// Import statements 
import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';

// Import statements for routing 
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ChocolateCake from './components/recipe_components/chocolate_cake';
import DoroWet from './components/recipe_components/doro_wet';
import Firfir from './components/recipe_components/firfir';
import Mesir from './components/recipe_components/mesir';
import Shiro from './components/recipe_components/shiro';
import VanillaCake from './components/recipe_components/vanilla_cake';


// ROUTING 
const router = createBrowserRouter([
  {
    path: "/", 
    element: <App/>, 
  }, 

  {
    path: "chocolatecake", 
    element: <ChocolateCake/>, 
  },
   
  {
    path: "dorowet", 
    element: <DoroWet/>, 
  }, 

  {
    path: "firfir", 
    element: <Firfir/>, 
  }, 

  {
    path: "mesir", 
    element: <Mesir/>, 
  }, 

  {
    path: "shiro", 
    element: <Shiro/>, 
  }, 
  
  {
    path: "vanillacake", 
    element: <VanillaCake/>, 
  }

]); 


const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
  {/* <App />  */}
  <RouterProvider router={router}/>  
  </React.StrictMode>
);