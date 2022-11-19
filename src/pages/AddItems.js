import React, { useState } from 'react'
import Header from "../Components/Header";
import "../styles/font.css"
import "../styles/font.css"

import RecentOrders from '../Components/RecentOrders';
import Itemdetail from '../Components/Itemdetail';
import Allitems from '../Components/Allitems';
import Additem from '../Components/Additem';


const AddItems = () => {
   
   
   
  return (
    <>
    <div className="flex-col  w-full">
      {/* Page Header */}
      <Header title={"All Items"} />

      <div className="flex m-8 divide-x divide-[#7e7e7e] h-screen ">
  

          <div className="w-full mr-8">
          
         <Additem/>
        </div>

        

        <div className='w-1/4 pl-8 '>
        <Itemdetail title={"Previewing"} />
        </div>

       </div>
       </div>

      </>
  );
}



export default AddItems;