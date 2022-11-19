import React from 'react'
import edit from "../assets/edit.png"
import shirt from "../assets/shirt.png"
import "../styles/font.css"
const Itemdetail = () => {
  return (
    <>
      <div className=" flex items-center justify-between ">
        <h4 class="self-center text-lg 2xl:text-xl font-normal font-lexend whitespace-nowrap text-white  ">
          Detail
        </h4>
      
      </div>

      <div className='mt-8 flex w-[141px] h-[141px] 2xl:w-[181px] 2xl:h-[181px] rounded-xl '>
      <img src={shirt} className='2xl:w-[181px] 2xl:h-[181px]'/>
      <img className='w-4 h-4 ml-[-80px] 2xl:mt-20 2xl:ml-[-100px] mt-14' src={edit}/>
      </div>

      <div className='pt-5 '>
      <p class=" text-sm 2xl:text-base pb-2 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Product Name
            </p>
            <input class="font-normal bg-[#212121] pl-3 h-8 2xl:h-10 w-full text-base 2xl:text-lg placeholder:text-white font-lexend rounded-[4px]  text-white" placeholder='Nike Drifit Shirt'>
          
        </input>
      </div>

      <div className='flex pt-8'>
      <p class=" text-sm 2xl:text-base pr-20 2xl:pr-28 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Price
            </p>
            <p class=" text-sm 2xl:text-base pr-20 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Status
            </p>
            
      </div>
      <div className='flex pt-2'>
      <input class=" font-normal 2xl:text-lg 2xl:h-10 rounded-[4px] bg-[#212121] px-2 mr-[18px] 2xl:mr-[32px] 2xl:w-full w-[96px] h-8 text-sm font-lexend placeholder:text-white  text-white" placeholder='500'>
            
            </input>
            <input class=" font-normal 2xl:h-10 2xl:text-lg rounded-[4px] bg-[#212121] px-2 w-48 h-8 text-sm font-lexend placeholder:text-white  text-white" placeholder='Available'>
            
            </input>
      </div>

      <div className='pt-5 '>
      <p class=" text-sm 2xl:text-base pb-2 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Quantity
            </p>
            <select  class="font-normal 2xl:text-lg 2xl:h-10 rounded-[4px] bg-[#212121] px-1 w-[96px] h-8 text-sm font-lexend  text-white" >
            <option>45</option>
           </select>
      </div>
        </>
  )
}

export default Itemdetail