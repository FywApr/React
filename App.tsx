import { FC, useState } from "react";
import { Header } from "./src/components/Header";
import { Shop } from "./src/components/Shop";
import { Button } from "./src/shared/ui/Button";
import { ProductCard } from "./src/shared/ui/ProductCard";

export const App: FC = function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      {/* <Header count={count} /> */}
      {/* <Button mode="dark" onClick={() => setCount(count + 1)}>
        {"Прибавить count"}
      </Button> */}
      <div className="container mx-auto">
        <Shop count={count}></Shop>
        <ul className={"flex justify-center"}>
          <ProductCard
            name={"Молоко"}
            price={500}
            onClick={() => {
              setCount(count + 500);
            }}
          ></ProductCard>
          <ProductCard
            name={"Хлеб"}
            price={150}
            onClick={() => {
              setCount(count + 150);
            }}
          ></ProductCard>
          <ProductCard
            name={"Кола 0.5"}
            price={400}
            onClick={() => {
              setCount(count + 400);
            }}
          ></ProductCard>
        </ul>
      </div>
    </>
  );
};
