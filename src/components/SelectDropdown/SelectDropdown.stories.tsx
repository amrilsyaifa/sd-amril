import type { Meta, StoryObj } from "@storybook/react";

import SelectDropdown from "./SelectDropdown";
import { JSX } from "react/jsx-runtime";
import { SelectDropdownProps } from "./interface";
import { useState } from "react";

const meta = {
  title: "Form/SelectDropdown",
  component: SelectDropdown,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof SelectDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "ocean", label: "Ocean", color: "#00B8D9" },
  { value: "blue", label: "Blue", color: "#0052CC", isDisabled: true },
  { value: "purple", label: "Purple", color: "#5243AA" },
  { value: "red", label: "Red", color: "#FF5630" },
  { value: "orange", label: "Orange", color: "#FF8B00" },
  { value: "yellow", label: "Yellow", color: "#FFC400" },
  { value: "green", label: "Green", color: "#36B37E" },
  { value: "forest", label: "Forest", color: "#00875A" },
  { value: "slate", label: "Slate", color: "#253858" },
  { value: "silver", label: "Silver", color: "#666666" },
];

const RenderComponent = (
  args: JSX.IntrinsicAttributes & SelectDropdownProps
) => {
  const [value, setValue] = useState(args.value);

  const onChange = (value: any) => {
    setValue(value);
  };

  return <SelectDropdown {...args} value={value} onChange={onChange} />;
};

export const SelectDropdownInput: Story = {
  args: {
    placeholder: "Select a color",
    options,
    isMulti: true,
    withSearch: false,
    withInput: false,
    value: undefined,
  },
  render: (args) => <RenderComponent {...args} />,
};
