import React from "react";
import image1 from "../assets/image1.avif";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";


const Cards = ({name,image,price,type,id}) => {
    console.log(image);

  return(
 <div className="h-[410px] w-[280px] bg-white p-2 ml-4 rounded-xl 
hover:border-green-500 hover:border 
transform hover:scale-95 transition duration-300">


      <div className="flex justify-center items-center">
        <img 
          src={image} 
          alt="Food Image" 
          className="h-[270px] w-full object-cover rounded-lg border border-gray-800 border-solid"
         
        />
      </div>
      <div className="mt-2 font-bold text-[20px]">
        {name}
      </div>

      <div className="flex justify-between mt-2">
        <div className="text-green-500 font-bold">Rs {price}/-</div> 
        <div className="flex items-center gap-1 text-green-500 font-bold">
         {type==="veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      <div className="h-[42px] w-full bg-green-500 flex justify-center items-center my-3 rounded-lg hover:bg-green-600 cursor-pointer ">
        <button className="font-bold text-gray-700 hover:bg-green-600 cursor-pointer">Add to Dish </button>
      </div>

    </div>
  );
};

export default Cards;