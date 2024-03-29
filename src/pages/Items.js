import React, { useState } from 'react'
import Header from "../Components/Header";
import "../styles/font.css"
import "../styles/font.css"

import RecentOrders from '../Components/RecentOrders';
import Itemdetail from '../Components/Itemdetail';
import Allitems from '../Components/Allitems';


const Items = () => {
   
   
   
  return (
    <>
    <div className="flex-col  w-full">
      {/* Page Header */}
      <Header title={"All Items"} />

      <div className="flex m-8 divide-x divide-[#7e7e7e] h-screen ">
  

          <div className="w-full mr-8">
          
         <Allitems/>
        </div>

        

        <div className='w-4/12 pl-8 '>
        <Itemdetail title={"Detail"}  viewlist={true} />
        </div>

       </div>
       </div>

      </>
  );
}



export default Items