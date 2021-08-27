import React from 'react';
import { iconsPath } from './constant.icons';
import ServiceCard from './SvgIcon';

export default {
  component: ServiceCard,
  title: 'Transcend/UI Elements/SGVIcon',
  argTypes: {
    path: {
      control: {
        type: 'select',
        options: [
          ...Object.keys(iconsPath)
            .map((key) => iconsPath[key])
            .filter((k) => !(parseInt(k) >= 0)),
        ],
      },
    }
  },
};

const Template = (args) => <ServiceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: 100,
  height: 100,
  fill: "red",
  path: iconsPath.facebook
};
