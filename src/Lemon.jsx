


import React from 'react';
import lemon from '../src/images/lemon.png';
import bankpop1 from '../src/images/bankpop1.png';
import bankpop2 from '../src/images/bankpop2.png';
import bankpop3 from '../src/images/bankpop3.png';
import bankpop4 from '../src/images/bankpop4.png';

function Lemon() {
    return (
        <>
        <section >
<div className="container-fluid " id='lp-pom-block-1074'>
 <div className="row">
   <div className="col-md-12 mx-auto my-5 pt-5">
     <div className=" row">
     <div className="col-md-6 bank_pic ">
         <img src={lemon}/>
       </div>
       
       <div className="col-md-6 pay_vendors  ">
         <span >Pay and get paid, fast and easy</span>
         <h3 className="py-3">The easiest way to pay vendors & get paid by customers</h3>
       

         <div className="row py-4  ">
           <div className=" col-sm-2"><img className="img-fluid" src={bankpop1}/>
           </div>
           <div className=" col-sm-10 "><p>Create GST compliant invoices or bills to request & send business payments</p></div>
           <div className="col-sm-2"><img className="img-fluid" src={bankpop2}/>
           </div>
           <div className=" col-sm-10 "><p>Create GST compliant invoices or bills to request & send business payments</p></div>
           <div className="col-sm-2"><img className="img-fluid" src={bankpop3}/>
           </div>
           <div className="col-sm-10 "><p>Create GST compliant invoices or bills to request & send business payments</p></div>
           <div className="col-sm-2"><img className="img-fluid" src={bankpop4}/>
           </div>
           <div className="c col-sm-10  "><p>Create GST compliant invoices or bills to request & send business payments</p></div>
           
         </div>
       </div>
       
     </div>
   </div>
 </div>

</div>
 
</section>
</>
    )
}

export default Lemon