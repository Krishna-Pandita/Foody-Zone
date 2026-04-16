import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Categories from "../categories";
import Cards from "../components/Cards";
import { food_items } from "../food";
import { dataContext } from "../contextApi/UserContext.jsx";
const Home = () => {

  const { Cate, setCate, input } = useContext(dataContext); // ✅ FIX

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
    <div className="bg-green-50 min-h-screen">

      <Navbar />

      {/* Categories */}

      {!input? <div className="flex justify-center items-center gap-8 mt-6">
        {Categories.map((item) =>(
          <div className="w-[100px] h-[100px] bg-white flex flex-col justify-center items-center rounded-2xl hover:bg-green-100 hover:cursor-pointer" key={item.id} onClick={() => filter(item.name)}>
            {item.image}
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>:null}
     

      {/* Cards */}
      <div className="flex flex-wrap gap-4 justify-center mt-10 pb-10">
        {Cate.map((item)=>(
          <Cards  key={item.id} 
                  name={item.food_name}
                  image={item.food_image}
                  price={item.price}
                  type={item.food_type}
                  id={item.id}/>
        ))}
      </div>

    </div>
  );
};

export default Home;