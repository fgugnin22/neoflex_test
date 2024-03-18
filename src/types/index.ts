export type Product = {
  id: number;
  img: string;
  title: string;
  price: number;
  rating: number;
  discountedPrice?: number;
  category: "wire" | "wireless";
};

export type Category = Product["category"];
