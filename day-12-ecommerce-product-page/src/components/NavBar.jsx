import { useContext } from "react";
import CartImg from "../images/icon-cart.svg";
import ProfileImg from "../images/image-avatar.png";
import { QuantityContext } from "../App";
const NavBar = () => {
  const { quantity } = useContext(QuantityContext);
  return (
    <div className="flex justify-between items-center px-12 py-6 shadow shadow-slate-500">
      <h1 className="text-xl font-semibold">sneakers</h1>
      <nav>
        <ul className="flex gap-6">
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="flex gap-4">
        <button className="relative">
          <img src={CartImg} alt="Cart" />
          {quantity!==0 && (
            <span className="absolute top-0 -right-2 bg-orange-800 text-xs px-1 rounded-full">
              {quantity}
            </span>
          )}
        </button>
        <img className="w-8" src={ProfileImg} alt="Profile" />
      </div>
    </div>
  );
};

export default NavBar;
