export type PlantType = {
  _id: string;
  cover: string;
  title: string;
  description: string;
  rating: number;
  price: number;
  originalPrice?: number; // optional original price for sale items
  category: string;
  isOnSale?: boolean; // optional flag for sale
};
