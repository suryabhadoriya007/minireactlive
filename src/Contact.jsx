
import React,{useState} from 'react';

const Contact=()=>{
  const[ram,shyam]= useState({
    sita:'',
    gita:'',
    number:'',
  });
 

  const Input =(event)=>{
    const rohan= event.target.value; 
    const mohan=event.target.name;    
    

  shyam((preValue)=>{
    return{
      ...preValue,  
     [mohan] : rohan,
    } ;    
}) ;
};



const formSubmit=(event)=>{
  event.preventDefault();
  alert('form submitted');
 
  

};


    return(
      <>
      <div className='pt-5 text-center'>
        <h1>Contact Form </h1>
        <h1>Hello {ram.sita}<br/>{ram.gita}<br/>{ram.number} </h1>
        </div>
         <div className='container'>
           <div className='col-10 mx-auto mt-5'>

        <form onSubmit={formSubmit}>
      <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text" id="basic-addon1">Name</span>
  </div>
  <input type="text" className="form-control" placeholder="Enter your Name" 
name='sita' value={ram.sita} onChange={Input}  aria-label="Enter your Name" aria-describedby="basic-addon1"/>
</div>

<div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Enter your Email"
   name='gita' value={ram.gita} onChange={Input} aria-label="Enter your Email" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2">@example.com</span>
  </div>
</div>

<div className="input-group mb-3">
  <input type="number" className="form-control" placeholder="Enter your Mobile Number"
name='number' value={ram.number} onChange={Input}   aria-label="Enter your Mobile Number" aria-describedby="basic-addon2"/>
  <div className="input-group-append">
    <span className="input-group-text" id="basic-addon2">Numbers Only   </span>
  </div>
</div>
<button type='submit'>submit</button>

</form>


</div> 
</div>

     </>
    );
};
  
  

  
  export default Contact;



