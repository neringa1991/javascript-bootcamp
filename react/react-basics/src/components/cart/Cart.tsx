import React from "react";
import {CartItem} from "../cartItem/CartItem";
import "./Cart.css";

function Cart() {
  return (
    <div>
      <div className="Cart">
        <CartItem
          name="Iphone"
          description="Iphone 14 pro mac"
          price="1233$"
          img="https://www.ideal.lt/media/catalog/category/iphone14.png"
          id="1"
        />
        <CartItem
          name="Samsung s21"
          // description="Samsung s21 max 256GB"
          price="1099$"
          img="https://www.telia.lt/medias/samsung-galaxy-s21-pilka-128-4.jpg-telia1200x?context=bWFzdGVyfHJvb3R8MTI2ODY3fGltYWdlL2pwZWd8aDgzL2gzMi85ODczMTE4MzMwOTEwLmpwZ3xmMWQ0ZmU1Njc4MTg1MTAzNmJmMTU3NWU3MzA5ZDU0OTUzZmFlMGJlYWFjNzMwZTFmYjllM2U2YzI1MmFjOThj"
          id="2"
        />
        <CartItem
          name="Samsung s21"
          // description="Samsung s21 max 256GB"
          price="1099$"
          img="https://www.telia.lt/medias/samsung-galaxy-s21-pilka-128-4.jpg-telia1200x?context=bWFzdGVyfHJvb3R8MTI2ODY3fGltYWdlL2pwZWd8aDgzL2gzMi85ODczMTE4MzMwOTEwLmpwZ3xmMWQ0ZmU1Njc4MTg1MTAzNmJmMTU3NWU3MzA5ZDU0OTUzZmFlMGJlYWFjNzMwZTFmYjllM2U2YzI1MmFjOThj"
          id="3"
        />
        <CartItem
          name="Samsung s21"
          // description="Samsung s21 max 256GB"
          price="1099$"
          img="https://www.telia.lt/medias/samsung-galaxy-s21-pilka-128-4.jpg-telia1200x?context=bWFzdGVyfHJvb3R8MTI2ODY3fGltYWdlL2pwZWd8aDgzL2gzMi85ODczMTE4MzMwOTEwLmpwZ3xmMWQ0ZmU1Njc4MTg1MTAzNmJmMTU3NWU3MzA5ZDU0OTUzZmFlMGJlYWFjNzMwZTFmYjllM2U2YzI1MmFjOThj"
          id="4"
        />
      </div>
      =""
    </div>
  );
}

export default Cart;
