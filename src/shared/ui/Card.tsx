import { FC, LiHTMLAttributes } from "react";

type TBackgroundColor = "bg-gray-700" | "bg-white" | "bg-slate-500";
type TBorder = "border-2";
type TBorderColor = "border-white";
type TColor = "text-white" | "text-black";
type TButton = "default" | "border" | "dark";

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  backgroundColor?: TBackgroundColor;
  border?: TBorder;
  borderColor?: TBorderColor;
  color?: TColor;
  buttonType?: TButton;
}

export const Card: FC<Props> = function Card(props) {
  const {
    backgroundColor = "bg-lime-400",
    border = "border-0",
    borderColor = "border-white",
    ...rest
  } = props;

  return (
    <li {...rest} className={`flex flex-col w-80 p-10 rounded shadow-xl text-center ${backgroundColor} ${border} ${borderColor}`}>
    </li>
  );
};
