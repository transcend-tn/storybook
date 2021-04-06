import React from "react";
import { Button } from './button';

export default {
  component: Button,
  title: 'Button',
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { label: 'Default', onClick: ()=>{} };

export const Primary = Template.bind({});
Primary.args = {...Default.args, label: 'Primary', variant:'primary'}

export const Outlined = Template.bind({});
Outlined.args = {...Default.args, label: 'Outlined', variant:'outlined'}

export const Secondary = Template.bind({});
Secondary.args = {...Default.args, label: 'Secondary', variant:'secondary'}

export const Light = Template.bind({});
Light.args = {...Default.args, label: 'Light', variant:'light'}

export const Pill = Template.bind({});
Pill.args = {...Default.args, label: 'Pill', variant:'pill'}
