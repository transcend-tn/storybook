import React from "react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "light",
          "dark",
        ],
      },
    },
    // backgroundColor: { control: 'color' },
  },
  parameters: {
    docs: {
      page: null,
    },
    jest: ['button.test.ts'],
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Button", onClick: action("clicked") };
