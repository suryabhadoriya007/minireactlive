import React from 'react'
import open from '../src/images/open.png';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';


function Opencard() {
    return (
        <>
        
        <section id="header1" className=' d-flex  align-items-center '>
      <div className='container-fluid nav_bg '>
      <div className='row'>
        <div className='col-12 mx-auto'>
         <div className='row'>   
          <div className=' col-md-5 order-1 order-lg-1 d-flex justify-content-center flex-column '>
        <h1 className='text-capitalize animate__animated animate__bounce'>
         <span className='headname'> <h1>Open Card</h1>  </span> <span className='colorchange'><strong> </strong></span>
          </h1>
          <p className='my-3 '>
            <span className='paratext'>
           <h2> Stay on top of your cash flow with a powerful expense card that automates your business spend & helps manage employee expenses</h2>
           
           <h3 className='pb-3 pt-5'> Physical cards that can be used at stores & ATMs that accept Visa</h3>
            <h3>Set limits & issue cards to employees & teams to manage expenses with ease</h3>

         </span>
          </p>



          
          <div className=''>
        
           <Button variant="contained" color="secondary">
           <NavLink to='' className=''>
        Know More
        </NavLink>
      </Button>
      
            
          </div>
          </div>
         <div className="col-md-7 order-2 pt-5 my-auto order-lg-2  header-img">
      <img src={open} className='img-fluid animated' alt='home img'/>
          </div>
        </div>
        </div> 
      </div>

     </div>
    </section>
    
      
        </>
    )
}

export default Opencard
