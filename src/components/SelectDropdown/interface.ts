import { ChangeEvent } from "react";

export interface SelectDropdownProps {
  placeholder?: string;
  isMulti?: boolean;
  withSearch?: boolean;
  withInput?: boolean;
  withPortal?: boolean;
  value?: ValueDropdown | ValueDropdown[];
  options: ValueDropdown[];
  className?: string;
  onChange?: (value: ValueDropdown | ValueDropdown[] | undefined) => void;
}

export interface ValueDropdown {
  value: string;
  label: string;
  isDisabled?: boolean;
  color?: string;
}

export interface SearchInputProps {
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export interface ClosedIconProps {
  onClick: () => void;
}
