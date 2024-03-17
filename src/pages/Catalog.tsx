import CatalogProduct from "../components/CatalogProduct";
import { products } from "../mock/products";

const Catalog = () => {
  return (
    <div className="flex flex-wrap gap-x-[39px] gap-y-[30px]">
      {products.map((product) => (
        <CatalogProduct
          key={"catalog-product" + product.id}
          img={product.img}
          title={product.title}
          discountedPrice={product.discountedPrice}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
};

export default Catalog;
