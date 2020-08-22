import React from 'react'
import footer_img from '../src/images/footer_img.png';


function Footer() {
    return (
        <>
        <div>
            <div className="container-fluid  bg-color">
 <div className="col-md-11 mx-auto  ">
 

 <footer className="pt-4  pt-md-4 ">
   <div className="row">
     <div className="col-12 col-md foot220">
       <img className="mb-2 img-fluid pb-4 " src={footer_img} alt="" width="50%" height=""/>
       <p>Open is a business banking service that combines everything from banking to invoicing & automated bookkeeping in one place.</p>
   
     </div>
     <div className="col-6 col-md align550">
       <h5>Bengaluru</h5>
     <p>Open Financial Technologies Pvt Ltd,
       2nd Floor,
       No. 80, Gayathri Mansion,
       Outer Ring Rd, Bellandur
       Bangalore - 560103</p>
       <h5 className="pt-5">Support Center</h5>
     <p className="pb-5">letstalk@bankopen.co</p>
     </div>
     <div className="col-6 col-md ">
       <h5>Products</h5>
       <ul className="list-unstyled text-small  doorexit220">
         <li>Open Pay</li>
         <li>Invoicing</li>
         <li>Duo Card</li>
     
       </ul>
        <h5 className="dev_lop">Developers</h5>
       <ul className="list-unstyled text-small  doorexit220">
         <li>Documentation</li>
         <li>API Reference</li>
         
       </ul>
     </div>
     <div className="col-6 col-md ">
       <h5>Company</h5>
       <ul className="list-unstyled text-small  doorexit220">
         <li>AboutUs</li>
         <li>Career</li>
         <li>Help Center</li>
         <li>Privacy Policy</li>
         <li>Terms & Conditions</li>
       </ul>
       <h5 className="pt-3">Follow US</h5>
       <div className="icons">
         <i className=" fa fa-facebook pr-3 icon1"></i>
           <i className=" fa fa-instagram pr-3 icon1" ></i>
             <i className=" fa fa-linkedin icon1"></i>

       </div>

     </div>
   </div>



 </footer>
</div>
</div>

        </div>
        </>
    )
}

export default Footer;
