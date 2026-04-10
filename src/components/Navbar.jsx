import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from "../contextApi/UserContext";
import { food_items } from "../food";



const Navbar = () => {
  let {input, setinput, Cate, setCate} = useContext(dataContext);
useEffect(() =>{
  let newlist = food_items.filter((item) => item.food_name.toLowerCase().trim().includes(input.toLowerCase().trim()));
  setCate(newlist);
}, [input]);

  return(
    <div className="w-full h-[100px] flex justify-between items-center px-9 md:px-14">


<div className="flex gap-2 items-center">
<div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-3xl shadow-xl">
  <MdFastfood className="w-[30px] h-[30px] text-green-600 "/>
</div> 
<h2 className="text-[24px] font-semibold text-green-600">Foody Zone</h2>
</div>




<div>
  <form className="w-[350px] h-[30px] bg-white flex items-center px-7 gap-3 rounded-2xl shadow-lg md:w-[500px] h-[60px]" onSubmit={(e) => e.preventDefault()}>
    <FaSearch className="h-[18px] w-[18px] text-green-600" />
    <input 
      placeholder="Search Your Food" 
      className="outline-none text-[15px] w-[100%] md:text-[17px]"
      value={input}
      onChange={(e) => setinput(e.target.value)}
    />
  </form>
   </div>


<div className="h-[60px] w-[60px] bg-white flex justify-center items-center rounded-xl shadow-xl relative">
  <span className="absolute top-0 right-2 text-green-500 font-bold">
    0
  </span>
  <FaShoppingCart className="w-[30px] h-[30px] text-green-600" />
</div>


    </div>
  );
};
export default Navbar;