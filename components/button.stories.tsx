import React from "react";
import { Button } from "./button";
import { action } from "@storybook/addon-actions";

export default {
  component: Button,
  title: "Button",
  argTypes: {
    color: {
      control: {
        type: "select",
        options: [
          "blue",
          "gray",
          "green",
          "red",
          "yellow",
          "pink",
          "indigo",
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
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { label: "Button", onClick: action("clicked") };
