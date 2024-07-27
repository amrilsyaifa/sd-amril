import { FC } from "react";
import { ClosedIconProps } from "./interface";

const ClosedIcon: FC<ClosedIconProps> = ({ onClick }) => (
  <div onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ml-2"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </div>
);

export default ClosedIcon;
