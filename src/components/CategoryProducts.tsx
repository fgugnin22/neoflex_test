import { Categories } from "../mock/categories";
import { products } from "../mock/products";
import { Product } from "../types";
import CatalogProduct from "./CatalogProduct";

type CategoryProductsProps = Pick<Product, "category">;

const CategoryProducts = (props: CategoryProductsProps) => {
  return (
    <>
      <p className="pl-3 font-semibold text-[20px] text-secondary min-w-full">
        {Categories[props.category]}
      </p>
      <div className="flex flex-wrap gap-x-[39px] gap-y-[27px] w-full">
        {products
          .filter((product) => product.category === props.category)
          .map((product, i) => (
            <CatalogProduct
              key={"catalog-product" + i + product.title}
              product={product}
            />
          ))}
      </div>
    </>
  );
};

export default CategoryProducts;
