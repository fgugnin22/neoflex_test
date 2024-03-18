import CategoryProducts from "../components/CategoryProducts";
import { Categories } from "../mock/categories";
import { Category } from "../types";

const Catalog = () => {
  const categoryNamesEn = Object.keys(Categories) as Category[];

  return (
    <div className="flex flex-wrap gap-x-[39px] gap-y-[30px] mt-[28px] mb-[22px]">
      {categoryNamesEn.map((categoryName, i) => {
        return (
          <CategoryProducts key={categoryName + i} category={categoryName} />
        );
      })}
    </div>
  );
};

export default Catalog;
