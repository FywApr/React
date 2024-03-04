import { FC, LiHTMLAttributes } from "react";
import { Title } from "./Title";
import { Paragraph } from "./Paragraph";
import { Button } from "./Button";

type TBackgroundColor = "bg-gray-700" | "bg-white" | "bg-slate-500";
type TBackgroundButton = "bg-gray-700" | "bg-white" | "bg-slate-500";
type TBorder = "border-2";
type TBorderColor = "border-white";
type TColor = "text-white" | "text-black";
type TButton = "default" | "border" | "dark";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  backgroundColor?: TBackgroundColor;
  border?: TBorder;
  borderColor?: TBorderColor;
  color?: TColor;
  backgroundButton?: TBackgroundButton;
  buttonType?: TButton;
}

export const Card: FC<Props> = function Card(props) {
  const {
    backgroundColor = "bg-white",
    border = "border-0",
    borderColor = "border-white",
    color = "text-black",
    backgroundButton = "bg-slate-500",
    buttonType = "default",
    ...rest
  } = props;

  return (
    <li
      {...rest}
      className={`${backgroundColor} ${border} ${borderColor}`}
    ></li>
  );
};
