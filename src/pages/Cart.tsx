import { Link } from "react-router-dom";
import CartProduct from "../components/CartProduct";
import { useAppSelector } from "../store";
import { ROUTES } from "../routes";

const Cart = () => {
  const state = useAppSelector((state) => state.main);

  const addedToCart = state.addedToCart;
  const totalSum = state.totalSum;

  return (
    <section className="mt-7">
      <h2 className="text-[20px] font-semibold text-main mb-3">Корзина</h2>
      <div className="flex justify-between flex-col lg:flex-row gap-12 mb-12 lg:mb-6">
        <div className="flex flex-col flex-nowrap gap-[23px] grow">
          {addedToCart.length > 0 ? (
            addedToCart.map(({ product, amount }, i) => (
              <CartProduct
                key={"cart-product " + i + product.title}
                product={product}
                amount={amount}
              />
            ))
          ) : (
            <Link
              to={ROUTES.catalog}
              className="font-semibold text-2xl text-main hover:underline mt-4"
            >
              Ваша корзина пуста, выберите товар в каталоге
            </Link>
          )}
        </div>
        {addedToCart.length > 0 && (
          <div className="shadow-default px-[22px] pt-[22px] rounded-[30px] min-w-[250px] sm:min-w-[300px] h-[95px] pb-[50px] relative bg-white shrink">
            <div className="flex justify-between">
              <span className="text-[15px] font-semibold">Итого</span>
              <span className="text-[15px] font-semibold">
                {"₽ " + String(totalSum)}
              </span>
            </div>
            <button
              onClick={() => alert("Оплату не делал(")}
              className="bg-[#101010] hover:bg-green-600 z-10 transition duration-300 rounded-[20px] absolute -bottom-5 left-0 right-0 py-4 w-full font-semibold text-[17px] text-white"
            >
              Перейти к оформлению
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
