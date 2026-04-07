import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Categories from "../categories";
import Cards from "../components/Cards";
import { food_items } from "../food";
import { dataContext } from "../contextApi/UserContext";

const Home = () => {

  const { Cate, setCate } = useContext(dataContext); // ✅ FIX

  function filter(category){
    if(category === "All"){
      setCate(food_items);
    } else {
      let newlist = food_items.filter((item) =>
        item.food_category.toLowerCase().trim() ===
        category.toLowerCase().trim()
      );
      setCate(newlist);
    }
  }

  return (
    <div>

      <Navbar />

      {/* Categories */}
      <div className="flex justify-center items-center gap-4">
        {Categories.map((item) =>(
          <div className="w-[100px] h-[100px] bg-white flex flex-col justify-center items-center rounded-2xl hover:bg-green-100 hover:cursor-pointer" key={item.id} onClick={() => filter(item.name)}>
            {item.image}
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {Cate.map((item)=>(
          <Cards key={item.id} name={item.food_name} />
        ))}
      </div>

    </div>
  );
};

export default Home;