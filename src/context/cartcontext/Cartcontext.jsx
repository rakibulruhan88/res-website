import { createContext, useState, useEffect } from "react";
import { food_list } from "../../assets/assets";

export const Cartcontext = createContext();

function Cartcontextprovider({ children }) {
  const [cartitems, setcartitems] = useState({});

  const addcart = (itemid) => {
    if (!cartitems[itemid]) {
      setcartitems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const removecart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const gettotalvalue = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = food_list.find((product) => product._id === item);
        totalamount += iteminfo.price * cartitems[item];
      }
    }
    return totalamount;
  };

  return (
    <div>
      <Cartcontext.Provider
        value={{ cartitems, setcartitems, addcart, removecart, gettotalvalue }}
      >
        {children}
      </Cartcontext.Provider>
    </div>
  );
}

export default Cartcontextprovider;
