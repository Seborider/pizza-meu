export type PizzaProps = {
  pizza: {
    name: string;
    ingredients: string;
    price: number;
    soldOut: boolean;
    photoName: string;
  };
};

export type OrderProps = {
  closeHour: number;
  openHour: number;
};

export type PizzaData = {
  name: string;
  ingredients: string;
  price: number;
  soldOut: boolean;
  photoName: string;
};
