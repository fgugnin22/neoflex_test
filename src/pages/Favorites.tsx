import { Link } from "react-router-dom";
import CatalogProduct from "../components/CatalogProduct";
import { useAppSelector } from "../store";
import { ROUTES } from "../routes";

const Favorites = () => {
  const favorites = useAppSelector((state) => state.main.favorites);

  return (
    <div className="flex flex-wrap gap-x-[39px] gap-y-[30px] mt-[28px] mb-[22px]">
      {favorites.length > 0 ? (
        favorites.map((product, i) => (
          <CatalogProduct
            key={"favorites " + i + product.title}
            product={product}
          />
        ))
      ) : (
        <Link
          to={ROUTES.catalog}
          className="text-2xl text-main font-semibold hover:underline"
        >
          В вашем избранном пусто, перейти в каталог
        </Link>
      )}
    </div>
  );
};
export default Favorites;
