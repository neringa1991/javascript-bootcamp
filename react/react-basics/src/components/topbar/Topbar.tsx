// rfce shortcut
import "./Topbar.css";
import Button from "../../reusableComponents/Button";

// @ts-ignore
import CartIcon from "../../assets/login.png";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div>
        <Button buttonColor="gray" text="Login in" icon={CartIcon} />
        <Button text="HOME" />
        <Button text="PRODUCTS" />
        <Button text="BEST SELLERS" />
        <Button buttonColor="red" text="Register" icon={CartIcon} />
      </div>
    </div>
  );
};

export default Topbar;
