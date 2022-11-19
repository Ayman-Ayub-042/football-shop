import React, { useState } from 'react'
import Header from "../Components/Header";
import "../styles/font.css"
import "react-calendar/dist/Calendar.css";
import invoice from "../assets/download.png";
import "../styles/font.css"

import RecentOrders from '../Components/RecentOrders';


const Orders = () => {
   
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
    <div className="flex-col w-full  ">
      {/* Page Header */}
      <Header title={"All Orders"} />

      <div className="flex m-8 divide-x divide-[#7e7e7e] h-screen ">
  

          <div className="w-full mr-8">
          
          <h4 class="self-center  text-xl font-medium whitespace-nowrap   mb-9 text-white font-lexend">
            Latest Orders
          </h4>

          <div className="flex items-center justify-between gap-10 font-dm">
          <form class="flex items-center w-1/2 font-dm">
            <div class="relative w-full">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 2xl:h-6 2xl:w-6 text-gray-400"
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
                class=" font-dm text-sm 2xl:text-base rounded-lg  block w-full pl-10 p-2.5  bg-[#212121] border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search orders"
                required=""
              />
            </div>
           
          </form>
          <div className="font-dm gap-4 pl-4">
          <button
            class="text-[#0c0e14] bg-[#e7e7e7] ml-auto  focus:outline-none font-normal rounded-[4px] text-sm 2xl:text-base px-4 py-2 text-center inline-flex items-center"
            type="button"
          >
            Latest
            <svg
              class="ml-2 w-4 h-4"
              aria-hidden="true"
              fill="none"
              stroke="#0c0e14"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>

          <button
            href="/playerarea/addskill"
            class="text-white bg-green-500 ml-2   focus:outline-none font-normal rounded-[4px] text-sm 2xl:text-base px-6 py-2 text-center inline-flex items-center"
            type="button"
          >
            Date
          </button></div>
        </div>
          <div class="overflow-x-auto relative my-10 ">
              <table class="w-full text-left  text-gray-400 ">
                <thead class="text-sm  2xl:text-lg font-dm text-white/43   border-b border-grey-400">
                  <tr className="text-center font-dm ">
                    <th scope="col" class="py-3 pr-9 xl:pr-16  2xl:pr-11">
                      Date
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-6 2xl:px-12">
                      Billing Name
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-9 2xl:px-12">
                      Amount
                    </th>
                    <th scope="col" class="py-3 px-3  2xl:px-3">
                      Item
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-9 2xl:px-12">
                      Qty
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-9 2xl:px-12">
                      Invoice
                    </th>
                    <th scope="col" class="py-3 pl-7 xl:pl-11 2xl:pl-12">
                      Status
                    </th>
                     </tr>
                </thead>
                <tbody className='text-white'>
                  {staticdata.map((val, ind) => (
                    <tr class=" border-b text-white/1 text-sm   2xl:text-base font-lexend border-gray-400 text-center">
                      <th
                        scope="row"
                        class="py-4 pr-9 2xl:pr-12 xl:pr-9 font-light text-sm   2xl:text-lg text-white whitespace-nowrap "
                      >
                       20-Aug-22
                      </th>
                      <td class="py-4 px-7 xl:px-10 2xl:px-12">
                        
                          Michael Marino
                       
                      </td>
                      <td class="py-4 px-7 xl:px-9 2xl:px-12">$500.56</td>
                      <td class="py-4 px-7 xl:px-9 2xl:px-4">Nike Shoes</td>
                      <td class="py-4 px-7 xl:px-9 2xl:px-12">1</td>
                      <td class="py-4 px-7 xl:px-9 2xl:px-12">
                        <img src={invoice} className="pl-3"/>
                      </td>
                      <td class="py-4 pl-7 xl:pl-9 2xl:pl-12">
                      <a
              
              class="inline-flex font-dm items-center py-2 px-5 ml-4 text-sm font-normal text-white bg-[#818181] rounded-[8px] "
            >
              Delivered
            </a>
                      </td>
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          

        </div>

        

        <div className='w-4/12 pl-8 '>
        <RecentOrders Preview={true} All={true} />
        </div>

       </div>
       </div>

      </>
  );
}



export default Orders