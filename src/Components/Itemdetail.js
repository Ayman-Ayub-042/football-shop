import React from 'react'
import edit from "../assets/edit.png"
import shirt from "../assets/shirt.png"
import "../styles/font.css"
const Itemdetail = (props) => {
  return (
    <>
      <div className=" flex items-center justify-between ">
        <h4 class="self-center text-lg 2xl:text-xl font-normal font-lexend whitespace-nowrap text-white  ">
        {props.title}
        </h4>
        {props.viewlist === true ? (
        <a class="text-sm 2xl:text-base text-white font-light flex font-lexend" href='/items/edititems'>
        <img className='w-3 h-4 2xl:w-4 2xl:h-5' src={edit}/>
       <p className='pl-1'> Edit</p></a>
       ) : (
              <div></div>
            )}
      </div>

      <div className='mt-8 w-[141px] h-[141px] 2xl:w-[181px] 2xl:h-[181px] rounded-xl'>
      <img src={shirt} className='2xl:w-[181px] 2xl:h-[181px]'/>
      </div>

      <div className='pt-5 '>
      <p class=" text-sm 2xl:text-base pb-2 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Product Name
            </p>
            <h2 class="font-normal 2xl:text-lg  text-base font-lexend  text-white">
          Nike Drifit Shirt
        </h2>
      </div>

      <div className='flex pt-8'>
      <p class=" text-sm 2xl:text-base pr-20 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Price
            </p>
            <p class=" text-sm 2xl:text-base font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Status
            </p>
      </div>
      <div className='flex pt-2'>
      <h2 class="font-normal pr-[53px]  text-base 2xl:text-lg font-lexend  text-white  ">
              <span className='text-[#7e7e7e] text-sm '>$ </span>500.56
            </h2>
            <h2 class=" font-normal 2xl:text-lg  text-base font-lexend  text-white">
              Available
            </h2>
      </div>

      <div className='pt-5 '>
      <p class=" text-sm 2xl:text-base pb-2 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Quantity
            </p>
            <h2 class="font-normal 2xl:text-lg  text-base font-lexend  text-white">
          45 Items
        </h2>
      </div>
        </>
  )
}

export default Itemdetail