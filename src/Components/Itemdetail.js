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
        <a class="text-sm text-white font-light flex font-lexend">
        <img className='w-3 h-4' src={edit}/>
       <p className='pl-1'> Edit</p></a>
      </div>

      <div className='pt-8'>
      <img src={shirt}/>
      </div>

      <div className='pt-5 '>
      <p class=" text-sm pb-2 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Product Name
            </p>
            <h2 class="font-normal  text-base font-lexend  text-white">
          Nike Drifit Shirt
        </h2>
      </div>

      <div className='flex pt-8'>
      <p class=" text-sm pr-20 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Price
            </p>
            <p class=" text-sm font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Status
            </p>
      </div>
      <div className='flex pt-2'>
      <h2 class="font-normal pr-[53px]  text-base font-lexend  text-white  ">
              <span className='text-[#7e7e7e] text-sm'>$ </span>500.56
            </h2>
            <h2 class=" font-normal  text-base font-lexend  text-white">
              Available
            </h2>
      </div>

      <div className='pt-5 '>
      <p class=" text-sm pb-2 font-normal font-lexend whitespace-nowrap text-[#7e7e7e]  ">
              Quantity
            </p>
            <h2 class="font-normal  text-base font-lexend  text-white">
          45 Items
        </h2>
      </div>
        </>
  )
}

export default Itemdetail