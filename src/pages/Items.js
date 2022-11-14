import React, { useState } from 'react'
import Header from "../Components/Header";
import "../styles/font.css"
import "react-calendar/dist/Calendar.css";
import invoice from "../assets/download.png";
import "../styles/font.css"
import nike from "../assets/nike.png"
import RecentOrders from '../Components/RecentOrders';
import Itemdetail from '../Components/Itemdetail';


const Items = () => {
   
    const staticdata = [
        {
          id: 1,
        },
        {
          id: 1,
        },
        {
          id: 1,
        },
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
       
       
      ];

 
   
  return (
    <>
    <div className="flex-col  w-full">
      {/* Page Header */}
      <Header title={"All Items"} />

      <div className="flex m-8 divide-x divide-[#7e7e7e] h-screen ">
  

          <div className="w-full mr-8">
          
          <h4 class="self-center  text-xl font-medium whitespace-nowrap   mb-9 text-white font-lexend">
            Items
          </h4>

          <div className="flex items-center justify-between gap-10 font-dm">
          <form class="flex items-center w-1/2 font-dm">
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5  text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                class=" font-dm text-sm rounded-lg  block w-full pl-10 p-2.5  bg-[#212121] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search orders"
                required=""
              />
            </div>
           
          </form>
          

          <button
            href="/playerarea/addskill"
            class="text-white bg-green-500 ml-2   focus:outline-none font-normal rounded-[4px] text-sm px-6 py-2 text-center inline-flex items-center"
            type="button"
          >
            Add Item
          </button>
        </div>
          <div class="overflow-x-auto relative my-10 ">
              <table class="w-full text-left  text-gray-400 ">
                <thead class="text-sm  2xl:text-lg font-dm text-white/43   border-b border-grey-400">
                  <tr className="text-center font-dm">
                    <th scope="col" class="py-3 pr-9 xl:pr-10  2xl:pr-11">
                    <input
                      type="checkbox"
                      class="w-4 h-4 
                       bg-[#dad3ff] rounded-lg border-gray-300 focus:ring-[#00B307]  focus:ring-2"
                    />
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-6 2xl:px-12">
                      Name
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-10 2xl:px-12">
                      Price
                    </th>
                    <th scope="col" class="py-3 px-3  2xl:px-3">
                      Status
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-10 2xl:px-12">
                      Items Left
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-10 2xl:px-12">
                      Revenue
                    </th>
                    
                     </tr>
                </thead>
                <tbody className='text-white'>
                  {staticdata.map((val, ind) => (
                    <tr class=" border-b text-white/1 text-sm   2xl:text-base font-lexend border-gray-400 text-center">
                      <th
                        scope="row"
                        class="py-4 pr-9 2xl:pr-12 xl:pr-10 font-light text-sm   2xl:text-lg text-white whitespace-nowrap "
                      >
                      <input
                      type="checkbox"
                      class="w-4 h-4  bg-gray-100 rounded-lg border-gray-300 focus:ring-[#00B307]  focus:ring-2"
                    />
                      </th>
                      <td class="py-4 px-7 xl:px-7 2xl:px-12">
                        
                      <div className="flex gap-2 items-center">
                      <img
                        class=" w-10 h-10 rounded-full"
                        src={nike}
                        alt="Bonnie image"
                      />
                      Nike shoes
                    </div>
                       
                      </td>
                      <td class="py-4 px-7 xl:px-10 2xl:px-12">$500.56</td>
                      <td class="py-4 px-7 xl:px-10 2xl:px-4">Available</td>
                      <td class="py-4 px-7 xl:px-10 2xl:px-12">1</td>
                      <td class="py-4 px-7 xl:px-10 2xl:px-12">$5546
                      </td>
                     
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          

        </div>

        

        <div className='w-4/12 pl-8 '>
        <Itemdetail />
        </div>

       </div>
       </div>

      </>
  );
}



export default Items