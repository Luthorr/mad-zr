type OrderElement = {
  id: number;
  quantity: number;
};

export type OrderPost = {
  order: OrderElement[];
  first_name: string;
  last_name: string;
  city: string;
  zip_code: string;
};
