import React from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
  return(
    <div className="w-full h-[100px] flex justify-between items-center px-9">

<div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-3xl shadow-xl">
  <MdFastfood className="w-[30px] h-[30px] text-green-600 "/>
</div>

<div>
  <form className="w-[700px] h-[60px] bg-white flex items-center px-7 gap-3 rounded-lg shadow-lg ">
    <FaSearch className="h-[18px] w-[18px] text-green-600" />
    <input placeholder="Search Your Food" className="outline-none text-[15px] text-[17px]"></input>
  </form>
   </div>


<div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-3xl shadow-xl">
<FaShoppingCart className="w-[30px] h-[30px] text-green-600" />
</div>


    </div>
  );
};
export default Navbar;