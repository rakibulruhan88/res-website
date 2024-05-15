import { useState } from "react";
import Explore from "../../component/Explore-menu/Explore";
import Main from "../../component/main/Main";
import "./home.css";
import FoodDisplay from "../../component/foodDisplay/FoodDisplay";
import Download_app from "../../component/Download app/Download_app";

function Home() {
    const [category, setcategory] = useState("All")
  return (
    <>
      <div>
        <Main />
        <Explore category={category} setcategory={setcategory}/>
        <FoodDisplay category={category}/>
        <Download_app />
      </div>
    </>
  );
}

export default Home;
