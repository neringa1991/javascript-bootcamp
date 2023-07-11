// rfce shortcut
import "./Topbar.css";
import Button from "../../reusableComponents/Button";
import {useState} from "react";
// @ts-ignore
import CartIcon from "../../assets/login.png";

const Topbar = () => {
  const [topbarItem, setTopbarItem] = useState("");
  return (
    <div className="Topbar">
      <div>
        <Button
          setItem={setTopbarItem}
          id="topbar-home"
          buttonColor="gray"
          text="Login in"
          icon={CartIcon}
        />
        <Button setItem={setTopbarItem} id="topbar-home" text="HOME" />
        <Button setItem={setTopbarItem} id="topbar-products" text="PRODUCTS" />
        <Button
          setItem={setTopbarItem}
          id="topbar-sellers"
          text="BEST SELLERS"
        />
        <Button
          setItem={setTopbarItem}
          id="topbar-register"
          buttonColor="red"
          text="Register"
          icon={CartIcon}
        />
      </div>
    </div>
  );
};

export default Topbar;
