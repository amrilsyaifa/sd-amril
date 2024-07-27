import { FC } from "react";
import classNames from "classnames";
import { TagProps } from "./interface";

const Tag: FC<TagProps> = ({
  label,
  leftIcon,
  rightIcon,
  size,
  variant = "solid",
  className,
}) => {
  const tagClass = classNames(
    "flex justify-center items-center m-1 font-medium py-1 px-2 rounded-full text-white min-w-1 max-w-fit",
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
      "border border-blue-500 bg-white text-blue-500": variant === "outline",
      "bg-blue-500": variant === "solid",
    },
    className // Include the passed className prop
  );

  const labelClass = classNames(
    "text-xs font-normal leading-none max-w-full flex-initial",
    {
      "text-sm": size === "sm",
      "text-base": size === "md",
      "text-lg": size === "lg",
    }
  );

  return (
    <div className={tagClass}>
      {leftIcon && <div className="flex flex-auto">{leftIcon}</div>}
      <div className={labelClass}>{label}</div>
      {rightIcon && <div className="flex flex-auto">{rightIcon}</div>}
    </div>
  );
};

export default Tag;
