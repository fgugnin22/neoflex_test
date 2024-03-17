import { Link } from "react-router-dom";
import { ROUTES } from "../routes";
import { useAppSelector } from "../store";

const Header = () => {
  const state = useAppSelector((state) => state.main);

  const addedToCartAmount = state.addedToCart.length;
  const addedToFavoritesAmount = state.favorites.length;

  return (
    <div className="w-full h-[60px] flex justify-between items-center">
      <h2 className="font-bold text-[25px] leading-[30.5px]">QPICK</h2>
      <nav className="flex h-full items-center gap-9">
        <Link className="relative" to={ROUTES.favorites}>
          <img src="./favorites.svg" alt="Your favorites." />
          {addedToFavoritesAmount > 0 && (
            <span className=" absolute w-[18px] h-[18px] flex items-center justify-center -top-2 -right-2 text-white rounded-full bg-price">
              {addedToFavoritesAmount}
            </span>
          )}
        </Link>
        <Link className="relative" to={ROUTES.cart}>
          <img src="./cart.svg" alt="Shopping cart." />
          {addedToCartAmount > 0 && (
            <span className=" absolute w-[18px] h-[18px] flex items-center justify-center -top-1 -right-2 text-white rounded-full bg-price">
              {addedToCartAmount}
            </span>
          )}
        </Link>
      </nav>
    </div>
  );
};

export default Header;
