import { useContext } from "react";
import "./fooddisplay.css";
import { StoreContext } from "../../context/storeContext/StoreContext";
import Food_item from "../fooditem/Food_item";

function FoodDisplay({ category }) {
  const { contextValue } = useContext(StoreContext);
  // console.log(contextValue.food_list);
  // console.log(category)
  return (
    <div className="food-display">
      <h1>{category==="All" ? "Top Dishes Hear" : category}</h1>
      <div className="food-display-list">
        {contextValue.food_list.map((item, index) => {
          if ((category === "All" || category === item.category)) {
            return (
              <Food_item
                key={index}
                id={item._id}
                item={item}
                name={item.name}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
