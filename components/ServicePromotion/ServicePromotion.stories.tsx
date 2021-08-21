import React from "react";
import ServiceCard from './ServicePromotion';

export default {
  component: ServiceCard,
  title: "ServiceCard",
};

const Template = (args) => <ServiceCard {...args} />;

export const Default = Template.bind({});
Default.args = {name: 'WEB DEVELOPMENT', iconUrl: 'https://media.graphcms.com/Al1CZprSY2S2xtjupMAz', description: 'We ensure that you’ll make an impression online. We take advantage of our development potential and expertise to deliver top-tier responsive web applications based on user-centered design. Whether you need a B2C portal or enterprise web-based software, you acquire a solution optimized for your custom requirements.'};

