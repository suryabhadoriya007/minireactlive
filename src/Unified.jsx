import React from 'react';
import popularbank from '../src/images/popularbank.png';
import bankpop1 from '../src/images/bankpop1.png';
import bankpop2 from '../src/images/bankpop2.png';
import bankpop3 from '../src/images/bankpop3.png';
import bankpop4 from '../src/images/bankpop4.png';







function Unified() {
    return (
        <>
        <section >
<div className="container-fluid " id='lp-pom-block-1086'>
 <div className="row">
   <div className="col-md-11 mx-auto my-5 ">
     <div className=" row">
       
       <div className="col-md-6 pay_method  ">
         <span>All your banking in one place</span>
         <h3 className="py-3">The ultimate unified banking experience that you've always dreamt about</h3>
       

         <div className="row py-4  ">
           <div className=" col-sm-2"><img className="img-fluid" src={bankpop1}/>
           </div>
           <div className=" col-sm-10 "><p>Business current account powered by ICICI Bank</p></div>
           <div className="col-sm-2"><img className="img-fluid" src={bankpop2}/>
           </div>
           <div className=" col-sm-10 "><p>Automatically track customer payments & bank statements, thus doing away with manual reconciliation</p></div>
           <div className="col-sm-2"><img className="img-fluid" src={bankpop3}/>
           </div>
           <div className="col-sm-10 "><p>Connect all your bank accounts from 60+ Indian banks to view, reconcile & manage all your banking in one unified dashboard</p></div>
           <div className="col-sm-2"><img className="img-fluid" src={bankpop4}/>
           </div>
           <div className="c col-sm-10  "><p>APIs & third party plugins to integrate banking into your business workflows</p></div>
           
         </div>
       </div>
       <div className="col-md-6 bank_img ">
         <img src={popularbank}/>
       </div>
     </div>
   </div>
 </div>








 </div>
</section>
</>
    )
}

export default Unified






