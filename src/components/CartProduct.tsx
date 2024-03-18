import { useAppDispatch } from "../store";
import { addToCart, removeFromCart } from "../store/slice";
import { Product } from "../types";

type CartProductProps = {
  product: Product;
  amount: number;
};

const CartProduct = (props: CartProductProps) => {
  const dispatch = useAppDispatch();

  const handleRemoveFromCartClick = (amount: number) => {
    dispatch(
      removeFromCart({
        id: props.product.id,
        amount: amount
      })
    );
  };

  const handleAddMoreClick = () => {
    dispatch(
      addToCart({
        product: props.product,
        amount: 1
      })
    );
  };

  return (
    <div className="rounded-[30px] shadow-default bg-white p-[18px] flex flex-col gap-[17px] relative w-full">
      <button
        onClick={() => handleRemoveFromCartClick(props.amount)}
        className="absolute top-[18px] right-6"
      >
        <svg
          className="fill-[#DF6464] hover:fill-main transition"
          width="21"
          height="17"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.8848 3.4H20.8667V5.1H18.874V16.15C18.874 16.3754 18.769 16.5916 18.5821 16.751C18.3953 16.9104 18.1418 17 17.8776 17H3.92813C3.66387 17 3.41044 16.9104 3.22358 16.751C3.03672 16.5916 2.93174 16.3754 2.93174 16.15V5.1H0.938965V3.4H5.92091V0.85C5.92091 0.624566 6.02589 0.408365 6.21275 0.248959C6.3996 0.0895533 6.65304 0 6.9173 0H14.8884C15.1527 0 15.4061 0.0895533 15.593 0.248959C15.7798 0.408365 15.8848 0.624566 15.8848 0.85V3.4ZM16.8812 5.1H4.92452V15.3H16.8812V5.1ZM12.3117 10.2L14.0734 11.7028L12.6645 12.9047L10.9029 11.4019L9.14124 12.9047L7.73234 11.7028L9.49396 10.2L7.73234 8.6972L9.14124 7.4953L10.9029 8.9981L12.6645 7.4953L14.0734 8.6972L12.3117 10.2ZM7.91369 1.7V3.4H13.892V1.7H7.91369Z" />
        </svg>
      </button>
      <div className="flex justify-left gap-6 items-center">
        <img
          width={146}
          height={136}
          className=" w-[146px] h-[136px] "
          src={props.product.img}
          alt={props.product.title}
        />
        <div className="flex flex-col gap-1">
          <p className="font-medium text-[17px] text-main">
            {props.product.title}
          </p>
          {props.product.discountedPrice !== undefined ? (
            <p className="relative">
              <span className="font-semibold text-[15px] text-price">
                {props.product.discountedPrice + " ₽"}
              </span>
              <span className="text-[13px] absolute left-[2px] -bottom-4 font-semibold text-[#AAAAAA] opacity-60 line-through">
                {props.product.price + " ₽"}
              </span>
            </p>
          ) : (
            <p className="font-semibold text-[15px] text-[#AAAAAA]">
              {props.product.price + " ₽"}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className=" ml-3 flex gap-6 items-center">
          <button
            onClick={() => handleRemoveFromCartClick(1)}
            className="rounded-full bg-price opacity-75 hover:opacity-100 transition w-8 h-8 flex items-center justify-center text-white text-5xl relative"
          >
            <span className="absolute -bottom-[4px] z-10">-</span>
          </button>
          <span className="font-semibold text-[17px]">{props.amount}</span>
          <button
            onClick={handleAddMoreClick}
            className="rounded-full bg-price opacity-75 hover:opacity-100 transition w-8 h-8 flex items-center justify-center text-white text-4xl"
          >
            +
          </button>
        </div>
        <p className="text-main font-semibold text-[15px]">
          {props.product.discountedPrice === undefined
            ? props.product.price * props.amount + " Р"
            : props.product.discountedPrice * props.amount}
        </p>
      </div>
    </div>
  );
};

export default CartProduct;
