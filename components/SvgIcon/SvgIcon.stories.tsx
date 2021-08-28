import React from 'react';
import { iconsPath } from './constant.icons';
import ServiceCard from './SvgIcon';

export default {
  component: ServiceCard,
  title: 'Transcend/UI Elements/SGVIcon',
  argTypes: {
    fill: {
      control: 'color',
    },
    path: {
      control: {
        type: 'select',
        options: iconsPath,
      },
    },
  },
};

const Template = (args) => <ServiceCard {...args} />;

export const Facebook = Template.bind({});
Facebook.args = { path: iconsPath.facebook };

export const Github = Template.bind({});
Github.args = { path: iconsPath.github };

export const Linkedin = Template.bind({});
Linkedin.args = { path: iconsPath.linkedin };

export const Twitter = Template.bind({});
Twitter.args = { path: iconsPath.twitter };
