import React, { useState } from 'react'
import Header from "../Components/Header";
import "../styles/font.css"
import "react-calendar/dist/Calendar.css";
import order from "../assets/orders.png";
import "../styles/font.css"
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
import RecentOrders from '../Components/RecentOrders';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
    const staticdata1 = [
        {
          id: 1,
        },
        {
          id: 1,
        },]
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
        {
            id: 2,
          },
           {
            id: 3,
          },
           {
            id: 2,
          },
           {
            id: 5,
          },
          {
            id: 2,
          },
          {
            id: 1,
          },
       
      ];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
    const dataobject = [{ ind: 1 }, { ind: 1 }, { ind: 1 }, { ind: 1 }, { ind: 1 }];
    
      const data = {
        labels,
        datasets: [
          {
            
            data: staticdata.map((val) => val.id),
            fontSize:"base",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
          },
        ],
      };
  return (
    <>
    <div className="flex-col ">
      {/* Page Header */}
      <Header title={"Dashboard"} />

      <div className="flex m-8 divide-x divide-[#7e7e7e] h-max-screen ">
        <div className="w-full ">
          {/* analytics */}
          <h4 class="self-center  text-xl font-medium whitespace-nowrap   mb-9 text-white font-lexend">
            Analytics
          </h4>
         
          <div className="grid grid-cols-5 gap-4 pr-8 lg:mt-[36px] ">
          {dataobject.map((val, ind) => (
              <div
                 key={ind}
                class=" flex  rounded-xl  w-full max-h-full  shadow-md bg-[#212121] "
              >
                 <div>
                 
                  <div className="flex   gap-[8px] mr-20  ">
                   <div className='w-[31px] h-[31px] ml-[10px] mt-2 bg-[#0C0C12]/40 rounded-full'>
                    <img src={order} className="align-center justify-center items-center p-2"/>
                    </div>
                   <div className='mr-10'>
                    <p class="text-[15px] text-base pt-5  font-normal   text-[#e7e7e7]">
                      Orders
                    </p>
                    <div className='flex  pr-6 '>
                    <p class="text-[32px] pb-6    font-bold   text-white ">
                      2003
                    </p>
                    <p class="text-sm pt-6 pl-1  font-light   text-[#1db954] ">
                      +3%
                    </p>
                    </div>
                    </div>
                  </div>
                  
                </div>
              </div>
              ))}
          </div>

          <div className="w-full">
          {/* analytics */}
          <h4 class="self-center mt-8 text-xl font-medium whitespace-nowrap   mb-9 text-white font-lexend">
            Revenue
          </h4>
          <div className='mr-8'>
          <Line  data={data} class="font-lexend font-base  font-light" />
          </div>
          </div>

          <div className="w-full ">
          {/* analytics */}
          <h4 class="self-center mt-8 text-xl font-medium whitespace-nowrap   mb-9 text-white font-lexend">
            Latest Orders
          </h4>
          <div class="overflow-x-auto relative mr-8 ">
              <table class="w-full text-left  text-gray-400 ">
                <thead class="text-sm  2xl:text-lg font-dm text-white/43   border-b border-grey-400">
                  <tr className="text-center font-dm">
                    <th scope="col" class="py-3 pr-9 xl:pr-10  2xl:pr-11">
                      Date
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-10 2xl:px-12">
                      Billing Name
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-10 2xl:px-12">
                      Amount
                    </th>
                    <th scope="col" class="py-3 px-3  2xl:px-3">
                      Item
                    </th>
                    <th scope="col" class="py-3 px-7 xl:px-10 2xl:px-12">
                      Qty
                    </th>
                    <th scope="col" class="py-3 pl-7 xl:pl-10 2xl:pl-12">
                      Status
                    </th>
                     </tr>
                </thead>
                <tbody className='text-white'>
                  {staticdata1.map((val, ind) => (
                    <tr class=" border-b text-white/1 text-sm   2xl:text-base font-lexend border-gray-400 text-center">
                      <th
                        scope="row"
                        class="py-4 pr-9 2xl:pr-12 xl:pr-10 font-light text-sm   2xl:text-lg text-white whitespace-nowrap "
                      >
                       20-Aug-22
                      </th>
                      <td class="py-4 px-7 xl:px-10 2xl:px-12">
                        
                          Michael Marino
                       
                      </td>
                      <td class="py-4 px-7 xl:px-10 2xl:px-12">$500.56</td>
                      <td class="py-4 px-7 xl:px-10 2xl:px-4">Nike Shoes</td>
                      <td class="py-4 px-7 xl:px-10 2xl:px-12">1</td>
                      <td class="py-4 px-l xl:pl-10 2xl:pl-12">
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

        </div>

        

        <div className='w-1/4 pl-8'>
        <RecentOrders Preview={true} All={true} />
        </div>

       </div>
       </div>

      </>
  );
}



export default Analytics