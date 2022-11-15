import React from 'react'
import edit from "../assets/edit.png"
import shirt from "../assets/shirt.png"
import "../styles/font.css"
const Itemdetail = () => {
  return (
    <>
      <div className=" flex items-center justify-between ">
        <h4 class="self-center text-lg font-normal font-lexend whitespace-nowrap text-white  ">
          Detail
        </h4>
      
      </div>

      <div className='mt-8 flex w-[141px] h-[141px] rounded-xl '>
      <img src={shirt}/>
      <img className='w-4 h-4 ml-[-80px] mt-14' src={edit}/>
      </div>

      <div className='pt-5 '>
      <p class=" text-sm pb-2 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Product Name
            </p>
            <input class="font-normal bg-[#212121] pl-3 h-8 w-full text-base placeholder:text-white font-lexend rounded-[4px]  text-white" placeholder='Nike Drifit Shirt'>
          
        </input>
      </div>

      <div className='flex pt-8'>
      <p class=" text-sm pr-20 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Price
            </p>
            <p class=" text-sm pr-20 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Status
            </p>
            
      </div>
      <div className='flex pt-2'>
      <input class=" font-normal rounded-[4px] bg-[#212121] px-2 mr-[18px] w-[96px] h-8 text-sm font-lexend placeholder:text-white  text-white" placeholder='500'>
            
            </input>
            <input class=" font-normal rounded-[4px] bg-[#212121] px-2 w-48 h-8 text-sm font-lexend placeholder:text-white  text-white" placeholder='Available'>
            
            </input>
      </div>

      <div className='pt-5 '>
      <p class=" text-sm pb-2 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Quantity
            </p>
            <select  class="font-normal rounded-[4px] bg-[#212121] px-1 w-[96px] h-8 text-sm font-lexend  text-white" >
            <option>45</option>
           </select>
      </div>
        </>
  )
}

export default Itemdetail