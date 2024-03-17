import { Product } from "../types";

type CatalogProductProps = Omit<Product, "category" | "id">;

const CatalogProduct = (props: CatalogProductProps) => {
  return (
    <div className="flex flex-col pt-[15px] px-5 pb-6 bg-white rounded-[30px] shadow-default w-[300px] sm:w-[350px]">
      <img
        width={220}
        height={237}
        className=" w-[220px] h-[237px] objec-contain mx-auto"
        src={props.img}
        alt={props.title}
      />
      <div className="flex justify-between w-full mt-[50px]">
        <p className="text-[17px] text-main font-semibold">{props.title}</p>
        <p className="text-[17px] font-semibold text-price">
          {props.price + " ₽"}
        </p>
      </div>
      <div className="flex justify-between w-full mt-[25px]">
        <div className="flex gap-[10px]">
          <img src="./star.svg" alt="Star." />
          <span className="text-[17px] font-semibold text-rating">
            {props.rating}
          </span>
        </div>
        <p className="text-[17px] font-semibold">Купить</p>
      </div>
    </div>
  );
};

export default CatalogProduct;
