import React, { useRef, useState } from "react";
import Tag from "../Tag/Tag";
import { useDisclosure } from "../../hooks/useDisclosure";
import classNames from "classnames";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import { SelectDropdownProps, ValueDropdown } from "./interface";
import SearchInput from "./SearchInput";
import ClosedIcon from "./ClosedIcon";

const SelectDropdown: React.FC<SelectDropdownProps> = ({
  placeholder,
  options,
  isMulti,
  value,
  withSearch,
  withInput = true,
  className,
  onChange,
}) => {
  const ref = useRef(null);
  const { open, onOpen, onClose, onToggle } = useDisclosure();

  useOutsideClick({
    ref: ref,
    handler: () => onClose(),
  });

  const [search, setSearch] = useState("");

  // define variable
  const selectClass = classNames(
    "w-full flex flex-col items-center h-64 mx-auto",
    className
  );
  const newPlaceholder = value ? "" : placeholder || "";
  const newValues = Array.isArray(value) ? value : value ? [value] : [];
  const optionsFiltered = options.filter((option) =>
    option.label.toLowerCase().includes(search.toLowerCase())
  );

  const onRemove = (val?: ValueDropdown) => {
    const value = newValues.filter((v) => v?.value !== val?.value);
    if (value.length === 0) {
      return onChange && onChange(undefined);
    } else {
    }
    return onChange && onChange(value as ValueDropdown[]);
  };

  const onSelect = (val: ValueDropdown) => {
    if (isMulti) {
      const value = newValues.some((v) => v?.value === val.value)
        ? newValues.filter((v) => v?.value !== val.value)
        : [...newValues, val];
      return onChange && onChange(value as ValueDropdown[]);
    } else {
      return onChange && onChange(val);
    }
  };

  return (
    <div className={selectClass} ref={ref}>
      <div className="w-full px-4">
        <div className="flex flex-col items-center relative">
          {/* Input */}
          <div className="w-full svelte-1l8159u">
            <div className="my-2 p-1 flex border border-gray-200 bg-white rounded svelte-1l8159u">
              <div className="flex flex-auto flex-wrap">
                {/* Tags */}
                {newValues &&
                  newValues.map((val) => (
                    <Tag
                      key={val?.value}
                      label={val?.label ?? ""}
                      rightIcon={<ClosedIcon onClick={() => onRemove(val)} />}
                    />
                  ))}

                <div
                  className="flex-1"
                  onClick={() => (withSearch || !withInput ? onToggle() : null)}
                >
                  {!withSearch && withInput && (
                    <input
                      value={search}
                      onFocus={onOpen}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder={newPlaceholder}
                      className="bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                    />
                  )}
                </div>
              </div>
              <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 svelte-1l8159u">
                <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
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
                    className={classNames(
                      "feather feather-chevron-up w-4 h-4 rotate-180",
                      {
                        "rotate-0": open,
                      }
                    )}
                  >
                    <polyline points="18 15 12 9 6 15"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Dropdown */}
          {open && (
            <div className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded">
              {withSearch && (
                <SearchInput
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              )}
              <div className="max-h-select overflow-y-auto">
                <div className="flex flex-col w-full">
                  {optionsFiltered.map((option, idx) => {
                    const isSelected = newValues.some(
                      (val) => val?.value === option.value
                    );
                    return (
                      <div
                        onClick={() =>
                          !option.isDisabled ? onSelect(option) : null
                        }
                        key={option.value}
                        className={classNames(
                          "cursor-pointer w-full border-gray-100 rounded-t hover:bg-blue-100",
                          {
                            "border-b": idx !== options.length - 1,
                            "bg-blue-100": isSelected,
                            "!bg-gray-100 cursor-not-allowed":
                              option.isDisabled,
                          }
                        )}
                      >
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                          <div className="w-full items-center flex">
                            <div className="mx-2 leading-6">{option.label}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectDropdown;
