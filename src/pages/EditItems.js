import React, { useState } from 'react'
import Header from "../Components/Header";
import "../styles/font.css"
import "../styles/font.css"

import RecentOrders from '../Components/RecentOrders';
import EditItemdetail from '../Components/EditItemdetail';
import Allitems from '../Components/Allitems';


const EditItems = () => {
   
   
   
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
        <EditItemdetail />
        </div>

       </div>
       </div>

      </>
  );
}



export default EditItems