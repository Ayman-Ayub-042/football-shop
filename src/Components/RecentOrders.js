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
        <h4 class="self-center text-lg font-normal font-lexend whitespace-nowrap text-white  ">
          Notifications
        </h4>
       
      </div>
      <div className="">
        {" "}
        {staticdata.slice(0, 3).map((val, ind) => (
          <div className="flex gap-2 mt-5 ">
          {props.Preview === true ? (
              <div className="flex items-center">
              <img
                class=" w-8 h-8 rounded-2 shadow-lg"
                src={pic1}
                alt="Bonnie image"
              />
            </div>
            ) : (
              <div></div>
            )}
           
            <div className="ml-1">
              <div className="flex gap-1 items-center">
                <h6 class=" font-medium whitespace-nowrap text-sm text-white  ">
                  New Order
                </h6>
                <p class="text-xs text-gray-500 ">from michael add</p>
              </div>
              <p class="text-xs text-gray-500 ">20 mins ago</p>
            </div>
           
          </div>
        ))}
      </div>
    </>
  );
}
