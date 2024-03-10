import { FC } from "react";
import { Button } from "../shared/ui/Button";
import { Card } from "../shared/ui/Card";
import { Typography } from "../shared/ui/Typography";
import { COLORS_TEXT } from "../shared/ui/colors";


interface Props {
  count: number;
}

export const Header: FC<Props> = function Header(props) {
  const handlePress = () => {
    console.log("click");
  };


  return (
    <header className={"bg-white py-4"}>
      <div className="container mx-auto">
        <button onClick={handlePress}>{"Dva dvainoi adin adinoi"}</button>

        <Button onClick={handlePress}>{"default"}</Button>
        <Button onClick={handlePress} mode={"border"}>
          {"border"}
        </Button>
        <Button onClick={handlePress} mode={"dark"}>
          {"dark"}
        </Button>


        <ul>
          <Card
            backgroundColor="bg-gray-700"
            border="border-2"
            borderColor="border-white"
            color="text-white"
            buttonType="border"
          ></Card>
          <Card></Card>
          <Card backgroundColor="bg-slate-500" color="text-white"></Card>
        </ul>

        <Typography size={24} color={COLORS_TEXT.primary}>
          {props.count}
        </Typography>
      </div>
    </header>
  );
};
