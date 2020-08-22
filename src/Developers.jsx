import React from 'react';
import web from '../src/images/home.png';
import Common from './Common';
import Automates from './Automates';
import Banking from './Banking';
import Bankswitch from './Bankswitch';
import Lemon from './Lemon';
import Unified from './Unified';
import Automated from './Automated';
import Business from './Business';
import Pricing from './Pricing';
import Opencard from './Opencard';
import Footer from './Footer';


const Developers =()=>{
    return(
      <>
     <Common name= "Your banking &amp; accounting on" imgsrc={web} visit="/Services" btname="started" />
  
  <Automates/>
  <Banking/>
  <Bankswitch/>
  <Lemon/>
  <Unified/>
  <Automated/>
  <Business/>
  <Opencard/>
  <Footer/>
 
  

    


     
        </>
    );
  };
  
  
  export default Developers;