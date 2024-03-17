export type Product = {
  id: number;
  img: string;
  title: string;
  price: number;
  rating: number;
  discountedPrice?: number;
  category: "wire" | "wireless";
};
