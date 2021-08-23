import React from 'react';
import ServiceCard from './ServiceCard';

export default {
  component: ServiceCard,
  title: 'Transcend/UI Elements/Cards/ServiceCard',
};

const Template = (args) => <ServiceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardType: 'service',
  name: 'WEB DEVELOPMENT',
  iconUrl: 'https://media.graphcms.com/Al1CZprSY2S2xtjupMAz',
  description:
    'We ensure that you’ll make an impression online. We take advantage of our development potential and expertise to deliver top-tier responsive web applications based on user-centered design. Whether you need a B2C portal or enterprise web-based software, you acquire a solution optimized for your custom requirements.',
};
