import React from 'react'

import "../styles/font.css"
import videoicon from "../assets/videoicon.png";
const Additem = () => {
    
  return (
     <div>
    <h4 class="self-center font-lexend text-xl font-medium whitespace-nowrap text-white  mb-8">
      Add Items
    </h4>
    <div className=" flex  font-lexend">
   
      <p class=" text-sm 2xl:text-base pb-2 pr-[170px] 2xl:pr-[210px] font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Product Name
            </p>
           
      <p class=" text-sm 2xl:text-base pr-24 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Price
            </p>
            <p class=" text-sm pb-2 2xl:text-base font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Quantity
            </p>
           
      </div>
      <div className='flex pt-2'>
      <input class="font-normal bg-[#212121] pl-3 2xl-px-3 w-[240px] 2xl:w-[280px] rounded-[4px] h-8 mr-[29px] 2xl:mr-10 2xl:h-10 text-base 2xl:text-lg placeholder:text-white font-lexend  text-white" placeholder='Nike Drifit Shirt'>
          
          </input>
      <input class=" font-normal bg-[#212121] px-2 2xl-px-3 mr-[29px] 2xl:mr-10 w-[96px] rounded-[4px] h-8 2xl:h-10 text-sm 2xl:text-base font-lexend placeholder:text-white  text-white" placeholder='500'>
            
            </input>
            <select  class="font-normal rounded-[4px] bg-[#212121] 2xl-px-3 px-2 w-[96px] h-8 2xl:h-10 text-sm 2xl:text-base font-lexend  text-white" >
            <option>45</option>
           </select>
      </div>
     
          <div class="relative w-[240px] 2xl:w-[280px]  mt-7">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                  className="mr-3 "
                  width="21"
                  height="21"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM3 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V11.36L12.8 8.63C12.3042 8.22204 11.6821 7.99899 11.04 7.99899C10.3979 7.99899 9.7758 8.22204 9.28 8.63L2 14.7V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2Z"
                    fill="#D5D5D5"
                  />
                  <path
                    d="M5 7C5.82843 7 6.5 6.32843 6.5 5.5C6.5 4.67157 5.82843 4 5 4C4.17157 4 3.5 4.67157 3.5 5.5C3.5 6.32843 4.17157 7 5 7Z"
                    fill="#D5D5D5"
                  />
                </svg>
              </div>
              <input  type="text"
                class=" font-dm text-xs 2xl:text-base rounded-[4px]  block w-full pl-10 p-2.5 py-8 h-10  bg-[#212121] border-gray-600 placeholder-white text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder='Upload Product Image'>
          </input>

          
            </div>
            <div className='mt-9'>
              <button class="inline-flex font-lexend items-center py-2 px-9 2xl:py-3 2xl:px-10 text-xs 2xl:text-sm font-normal text-black bg-white rounded-[4px] ">
                Cancel
              </button>
              <button class="inline-flex font-lexend items-center py-2 2xl:py-3 2xl:px-10 px-9 ml-[10px] text-xs 2xl:text-sm font-normal  text-[#0c0e14] bg-white rounded-[4px] ">
                Upload
              </button>
            </div>
 </div>
  )
}

export default Additem