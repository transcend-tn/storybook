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

export const Transcend = Template.bind({});
Transcend.args = { path: iconsPath.transcend, width: 500, height: 500 };

export const Facebook = Template.bind({});
Facebook.args = { path: iconsPath.facebook };

export const Github = Template.bind({});
Github.args = { path: iconsPath.github };


export const Linkedin = Template.bind({});
Linkedin.args = { path: iconsPath.linkedin };

export const Twitter = Template.bind({});
Twitter.args = { path: iconsPath.twitter };


export const Facebook_Footer = Template.bind({});
Facebook_Footer.args = { path: iconsPath.facebook_c, width: 7000, height: 7000 };

export const Twitter_Footer = Template.bind({});
Twitter_Footer.args = { path: iconsPath.twitter_c, width: 7000, height: 7000  };

export const Instagram_Footer  = Template.bind({});
Instagram_Footer.args = { path: iconsPath.instagram_c, width: 7000, height: 7000 };


