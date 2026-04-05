import React from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";



const Navbar = () => {
  return(
    <div className="w-full h-[100px] bg-red-300 flex justify-between items-center px-9">

<div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-3xl shadow-xl">
  <MdFastfood className="w-[30px] h-[30px] text-green-500 "/>
</div>

<div>
  <form>
    <FaSearch />
    <input placeholder="Search Your Food"></input>
  </form>
   </div>


<div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-3xl shadow-xl">
<FaShoppingCart className="w-[30px] h-[30px] text-green-500" />
</div>


    </div>
  );
};
export default Navbar;