import React from "react";
import pfp from "../assets/pfp.png";
import pic1 from "../assets/pic1.png"
import "../styles/font.css"
export default function RecentOrders(props) {
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
      id: 1,
    },
    {
      id: 1,
    },
  ];
  return (
    <>
      <div className=" flex   ">
        <h4 class="self-center  xl:text-xl md:text-lg font-medium font-lexend whitespace-nowrap text-white  ">
          Notifications
        </h4>
       
      </div>
      <div className="">
        {" "}
        {staticdata.slice(0, 3).map((val, ind) => (
          <div className="flex gap-2 sm:gap-1 mt-5 ">
          {props.Preview === true ? (
              <div className="flex items-center">
              <img
                class="  xl:w-8  xl:h-8 2xl:w-9 2xl:h-9 md:w-7 md:h-7 sm:w-6 sm:h-6 rounded-2 shadow-lg"
                src={pic1}
                alt="Bonnie image"
              />
            </div>
            ) : (
              <div></div>
            )}
           
            <div className="ml-1 ">
              <div className="flex gap-1 items-center">
                <h6 class=" font-medium whitespace-nowrap sm:text-xs md:text-sm  xl:text-base 1xl:text-lg 2xl:text-lg text-white  ">
                  New Order
                </h6>
                <p class=" xl:text-base sm:text-xs md:text-sm 1xl:text-lg 2xl:text-lg text-gray-500 ">from michael add</p>
              </div>
              <p class=" xl:text-sm md:text-xs sm:text-xs 2xl:text-base 1xl:text-base text-gray-500 ">20 mins ago</p>
            </div>
           
          </div>
        ))}
      </div>
    </>
  );
}
