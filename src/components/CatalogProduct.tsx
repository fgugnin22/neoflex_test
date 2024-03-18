import { useAppDispatch, useAppSelector } from "../store";
import { addToCart, addToFavorites, removeFromFavorites } from "../store/slice";
import { Product } from "../types";

type CatalogProductProps = { product: Product };

const CatalogProduct = (props: CatalogProductProps) => {
  const dispatch = useAppDispatch();

  const isFavorite = useAppSelector(
    (state) =>
      state.main.favorites.findIndex(
        (product) => product.id === props.product.id
      ) !== -1
  );

  const handleAddToCartClick = () => {
    dispatch(addToCart({ product: props.product, amount: 1 }));
  };

  const handleAddToFavoritesClick = () => {
    if (!isFavorite) {
      dispatch(addToFavorites(props.product));
    } else {
      dispatch(removeFromFavorites({ id: props.product.id }));
    }
  };

  return (
    <div className="flex flex-col pt-[15px] px-5 pb-6 bg-white rounded-[30px] shadow-default w-[300px] sm:w-[350px] mx-auto relative">
      <button
        onClick={handleAddToFavoritesClick}
        className="absolute top-5 right-6 "
      >
        <svg
          className={`stroke-[#8899a4] fill-white hover:stroke-black transition ${
            isFavorite ? "!stroke-red-500 !fill-red-500" : ""
          }`}
          width="21"
          height="21"
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      </button>
      <img
        width={220}
        height={237}
        className=" w-[220px] h-[237px] objec-contain mx-auto"
        src={props.product.img}
        alt={props.product.title}
      />
      <div className="flex justify-between w-full mt-[50px]">
        <p className="text-[17px] text-main font-semibold">
          {props.product.title}
        </p>
        {props.product.discountedPrice !== undefined ? (
          <p className="relative">
            <span className="text-[17px] font-semibold text-price">
              {props.product.discountedPrice + " ₽"}
            </span>
            <span className="text-[13px] absolute left-2 -bottom-4 font-semibold text-price opacity-60 line-through">
              {props.product.price + " ₽"}
            </span>
          </p>
        ) : (
          <p className="text-[17px] font-semibold text-price">
            {props.product.price + " ₽"}
          </p>
        )}
      </div>
      <div className="flex justify-between w-full mt-[25px]">
        <div className="flex gap-[10px]">
          <img src="./star.svg" alt="Star." />
          <span className="text-[17px] font-semibold text-rating">
            {props.product.rating}
          </span>
        </div>
        <button
          onClick={handleAddToCartClick}
          className="text-[17px] font-semibold hover:scale-110 hover:text-secondary transition active:text-price"
        >
          Купить
        </button>
      </div>
    </div>
  );
};

export default CatalogProduct;
