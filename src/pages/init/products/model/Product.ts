export interface ProductModel {
  id: string;
  year: number;
  color: TColor;
  price: number;
  model: string;
  brand: string;
}

type TColor = "red" | "blue" | "yellow" | "green" | "white" | "black"

export const products: ProductModel[] = [
  {
    id: "CAR001",
    year: 2020,
    color: "red",
    price: 30000,
    model: "SUV",
    brand: "ABC Motors"
  },
  {
    id: "CAR002",
    year: 2021,
    color: "black",
    price: 28000,
    model: "Hatchback",
    brand: "XYZ Cars"
  },
  {
    id: "CAR003",
    year: 2019,
    color: "black",
    price: 35000,
    model: "Sedan",
    brand: "123 Autos"
  },
  {
    id: "CAR004",
    year: 2022,
    color: "blue",
    price: 40000,
    model: "Convertible",
    brand: "SuperCars Inc."
  },
  {
    id: "CAR005",
    year: 2023,
    color: "white",
    price: 32000,
    model: "Coupe",
    brand: "Luxury Autos"
  },
  {
    id: "CAR006",
    year: 2021,
    color: "green",
    price: 38000,
    model: "SUV",
    brand: "Elite Motors"
  },
  {
    id: "CAR007",
    year: 2020,
    color: "yellow",
    price: 45000,
    model: "Sports Car",
    brand: "Speedster Vehicles"
  },
  {
    id: "CAR008",
    year: 2022,
    color: "red",
    price: 37000,
    model: "Electric",
    brand: "GreenDrive Autos"
  },
  {
    id: "CAR009",
    year: 2023,
    color: "white",
    price: 42000,
    model: "Luxury Sedan",
    brand: "Opulence Motors"
  },
  {
    id: "CAR010",
    year: 2021,
    color: "blue",
    price: 38000,
    model: "SUV",
    brand: "Adventure Motors"
  }
];
