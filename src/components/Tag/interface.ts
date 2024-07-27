import React from "react";

export interface TagProps {
  label: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "solid";
  //   onDelete: () => void;
}
