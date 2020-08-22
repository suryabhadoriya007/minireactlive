import React from 'react';
import {NavLink} from "react-router-dom";
import './index.css';



const Card=(props)=>{
    return(
      <>       
          
              <div className='col-md-4 col-10 mx-auto'>
              <div className="card">
              <img src={props.imgsrc} className="card-img-top" alt=''/>
              <div className="card-body text-center">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text text-capitalize">{props.content}</p>
              <NavLink to= "/About" target='_blank' 
              className="btn btn-warning card-started">Watch now </NavLink> 
                   </div>
          </div>
               </div>
           
        
      
        </>
    )
  };
  
  
  export default Card;
  