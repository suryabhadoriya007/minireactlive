import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';




const Common=(props)=>{
    return(
      <>
      <section id="header" className=' d-flex  align-items-center '>
      <div className='container-fluid nav_bg '>
      <div className='row'>
        <div className='col-11 mx-auto'>
         <div className='row'>   
          <div className=' col-md-5 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column '>
        <h1 className='text-capitalize animate__animated animate__bounce'>
         <span className='headname'> {props.name} </span> <span className='colorchange'><strong> autopilot</strong></span>
          </h1>
          <p className='my-3 '>
            <span className='paratext'>
          A business banking service that combines everything from banking to invoicing & automated bookkeeping in one place.
         </span>
          </p>



          
          <div className='mt-3 font_start'>
        
           <Button variant="contained" color="secondary">
           <NavLink to={props.visit} className=''>
        Get Started
        </NavLink>
      </Button>
      
            
          </div>
          </div>
         <div className="col-md-7 order-1 pt-5 my-auto order-lg-2  header-img">
      <img src={props.imgsrc} className='img-fluid animated' alt='home img'/>
          </div>
        </div>
        </div> 
      </div>

     </div>
    </section>
      
        </>
    );
  };
  
  
  export default Common;