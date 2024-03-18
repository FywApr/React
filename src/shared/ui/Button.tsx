import { ButtonHTMLAttributes, FC } from "react";
import { COLORS_TEXT } from "./colors";

type ButtonType = "default" | "border" | "dark";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonType;
}

export const Button: FC<Props> = function Button(props) {
  const { mode = "default", ...rest } = props; // rest берет все атрибуты в компонгенте Header

  let bgButton = "bg-black";
  let textColor = "text-white";

  if (mode === "dark") {
    bgButton = "bg-gray-800";
  } else if (mode === "border") {
    bgButton = "border bg-white border-gray-400";
    textColor = "text-gray-800";
  }

  if (props.disabled) {
    bgButton = "bg-gray-300";
    textColor = COLORS_TEXT.secondary200;
  }

  return (
    <button
      {...rest}
      className={`rounded pb-2 pt-2 w-full ${bgButton} ${rest.className}`}
    >
      <p className={`font-semibold ${textColor}`}>{rest.children}</p>
    </button>
  );
};
