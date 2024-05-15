import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./food_item.css";
import { Cartcontext } from "../../context/cartcontext/Cartcontext";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Food_item({ id, name, image, description, price }) {
  const { cartitems, setcartitems, addcart, removecart } = useContext(Cartcontext);
  // console.log(cartitems);



  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
        {!cartitems[id] ? (
          <img
            className="add"
            onClick={() => addcart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removecart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartitems[id]}</p>
            <img
              onClick={() => addcart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-rating">
          <p className="food-item-name">{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
}
