import type { Meta, StoryObj } from "@storybook/react";

import Tag from "./Tag";

const meta = {
  title: "Form/Tag",
  component: Tag,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

interface ClosedIconProps {
  className?: string;
}

const ClosedIcon = (props: ClosedIconProps) => (
  <div>
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
      className={`feather feather-x cursor-pointer hover:text-teal-400 rounded-full w-4 h-4 ${props.className}`}
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  </div>
);

export const SampleTag: Story = {
  args: {
    label: "Jane Doe",
    size: "md",
  },
};

export const WithClassName: Story = {
  args: {
    label: "Jane Doe",
    size: "md",
    className: "bg-red-500 text-blue-500",
  },
};

export const OutlineTag: Story = {
  args: {
    label: "Jane Doe",
    size: "md",
    variant: "outline",
  },
};

export const withRightIcon: Story = {
  args: {
    label: "Jane Doe",
    size: "md",
    rightIcon: <ClosedIcon className="ml-1" />,
  },
};

export const withLeftIcon: Story = {
  args: {
    label: "Jane Doe",
    size: "md",
    leftIcon: <ClosedIcon className="mr-1" />,
  },
};
