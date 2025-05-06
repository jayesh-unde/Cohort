import React from "react";
import "./index.css";
import { useState } from "react";
const Sidebar = () => {
  const [isOpen,setIsOpen] = useState(true);
  const changeState = ()=>{
    console.log(isOpen);
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div
  className={`${
    isOpen ? "w-12 md:w-50" : "w-12"
  } h-screen bg-amber-100 transition-all duration-300 ease-in-out flex flex-col gap-y-5`}
>
        <button className="flex flex-row justify-end m-3" onClick={changeState}>Icon</button>
        <div className="flex flex-row justify-center">{isOpen?"Home":"H"}</div>
        <div  className="flex flex-row justify-center">{isOpen?"About":"A"}</div>
        <div  className="flex flex-row justify-center">{isOpen?"Explore":"E"}</div>
      </div>
    </>
  );
};
export default Sidebar;
