import { GrMenu } from "react-icons/gr";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { PiBowlFoodLight } from "react-icons/pi";
import { IoPizza } from "react-icons/io5";
import { PiHamburgerDuotone } from "react-icons/pi";



const Categories = [

  {
    id:1,
    name:"All",
    image:<GrMenu className="w-[60px] h-[60px] text-green-500" />
  },
  
   {
    id:2,
    name:"Breakfast",
    image:<MdOutlineFreeBreakfast  className="w-[60px] h-[60px] text-green-500" />
  },

   {
    id:3,
    name:"Soups",
    image:<TbSoup className="w-[60px] h-[60px] text-green-500" />
  },

   {
    id:4,
    name:"Pasta",
    image:<CiBowlNoodles className="w-[60px] h-[60px] text-green-500" />

  },

   {
    id:5,
    name:"Main-Course",
    image:<PiBowlFoodLight className="w-[60px] h-[60px] text-green-500" />
  },

   {
    id:6,
    name:"Pizza",
    image:<IoPizza className="w-[60px] h-[60px] text-green-500" />
  },

   {
    id:7,
    name:"Burger",
    image:<PiHamburgerDuotone className="w-[60px] h-[60px] text-green-500" />

  }


]

export default Categories;