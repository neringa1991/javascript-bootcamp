import React from "react";
import "./CartItem.css";

// @ts-ignore
import CartIcon from "../../assets/icons8-cart-50.png";

// @ts-ignore
import CartIcon2 from "../../assets/login.png";

import Button from "../../reusableComponents/Button";
import {useState} from "react";
// allows to create types
interface CartItemProps {
  name: string;
  description?: string;
  price: string;
  img: string;
  id: string;
}
export const CartItem = ({
  name,
  description,
  price,
  img,
  id,
}: CartItemProps) => {
  // adding hook
  const [item, setItem]: any = useState("");
  // the item which we click on. setItem set the item state
  console.log(item);

  return (
    <div className="CartItem">
      {item === id && (
        <img className="CartItemImg" src={CartIcon2} alt=""></img>
      )}
      <div>
        <h1>{name}</h1>
        {/* below is ternary operator */}
        <p>{description ? description : "No description..."}</p>
        <p>{price}</p>
      </div>
      <img
        // to add an event
        onClick={() => setItem(name)}
        className="CartItemImage"
        src={img}
        alt="Iphone 14"
      ></img>
      <Button
        setItem={setItem}
        buttonColor="red"
        text="Buy Now"
        icon={CartIcon}
        buttonText="green"
        id={id}
      />
    </div>
  );
};
