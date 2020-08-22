import React from 'react';
import sign from '../src/images/sign.png';
import send from '../src/images/sendrecieve.png';
import account from '../src/images/accounting.png';


const Automates =()=>{
    return(
      
    <>  
   <div className="container marketing">
   <div className='col-lg-12 col-sm-12 '>
    <h1>
<span >Automate your accounting in 3 simple steps&nbsp;</span>
</h1>

     <div className="row">



       <div className="col-lg-4">
      <img src={sign} alt="one"/>
       <h2>Sign-up for Open </h2>
       <p>Sign-up for Open & get a business current account powered by ICICI Bank. Already have one? Link it up with Open.</p>
     </div>

     <div className="col-lg-4">
    <img src={send} alt="one"/>
     <h2>Send & receive Payments</h2>
     <p> Create GST compliant invoices, do payouts & receive payments via an integrated online payment gateway.</p>
   </div>

   <div className="col-lg-4">
  <img src={account} alt="one"/>
   <h2>Enjoy automated accounting</h2>
  <p>Automatically categorise your income & expenses & reconcile payments. Get access to accounting reports.</p>
 </div>

</div>
</div>
</div>

</>
);
};   
  
  
  
export default Automates;
