import React from 'react';
import { NavLink } from 'react-router-dom';
import current from '../src/images/current.png';
import payment from '../src/images/payment.png';
import autoaccounting from '../src/images/autoaccounting.png';
import multi from '../src/images/multi.png';
import visa from '../src/images/visa.png';
import developer from '../src/images/developer.png';






const Banking =()=>{
    return(
        <>

   <section>



<div className='banking_background'   id='lp-pom-block-1043'>
<h1>
            <span>Rein in your business banking</span>
        </h1>

    
    <div className="container market ">
     <div className="col-md-11 mx-auto text-center pt-5  "> <h2>
                <span > Whether you are just starting 
                    out or are busy running your empire, we are ready & 
                    rooting for you. Create an Open account & get going in
                     less than 5 min.
                     </span>
                </h2>  
   </div>
     <div className="row py-5" >

       <div className="col-lg-4 " >
      <img src={current} alt="one"/>
       <h2>Business Current Account</h2>
       <p><span>
       get a business current account powered by ICICI Bank. Already have one? Link it up with Open.</span></p>
       <NavLink to='' ><strong>MORE INFO  ></strong> </NavLink>
     </div>

     <div className="col-lg-4">
    <img src={payment} alt="one"/>
     <h2>Integrated Payment Gateway</h2>
     <p><span>Accept bank transfers via virtual accounts &amp; online payments via a payment gateway powered by Stripe.</span></p>
     <NavLink to='' ><strong>MORE INFO  ></strong> </NavLink>
   </div>
   
<div className="col-lg-4">
  <img src={autoaccounting} alt="one"/>
   <h2>Automated Accounting</h2>
  <p><span>Auto-categorise your income &amp; expenses &amp; get insightful accounting reports using an automated accounting tool.</span></p>
  <NavLink to='' ><strong>MORE INFO  ></strong> </NavLink>
 </div>
 <div className="col-lg-4 " >
      <img src={multi} alt="one"/>
       <h2>Business Current Account</h2>
       <p><span>
       get a business current account powered by ICICI Bank. Already have one? Link it up with Open.</span></p>
       <NavLink to='' ><strong>MORE INFO  ></strong> </NavLink>
     </div>

     <div className="col-lg-4">
    <img src={visa} alt="one"/>
     <h2>Integrated Payment Gateway</h2>
     <p><span>Accept bank transfers via virtual accounts &amp; online payments via a payment gateway powered by Stripe.</span></p>
     <NavLink to='' ><strong>MORE INFO  ></strong> </NavLink>
   </div>

   <div className="col-lg-4">
  <img src={developer} alt="one"/>
   <h2>Automated Accounting</h2>
  <p><span>Auto-categorise your income &amp; expenses &amp; get insightful accounting reports using an automated accounting tool.</span></p>
  <NavLink to='' ><strong>MORE INFO  ></strong> </NavLink>
 </div>

   
 </div>
</div>
</div>
             
</section> 



       </>
        );
    
};

export default Banking;
