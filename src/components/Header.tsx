import { FC, HTMLAttributes } from "react";

export const Header: FC<HTMLAttributes<HTMLElement>> = function Header(props) {
  return <header className={"bg-blue-400 py-4"}>{props.children}</header>;
};
         