import React from 'react';
import ServiceCard from './TeamMemberCard';

export default {
  component: ServiceCard,
  title: 'Transcend/UI Elements/Cards/TeamMemberCard',
};

const Template = (args) => <ServiceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'John Doe',
  iconUrl: 'https://media.graphcms.com/prQXH90uTDSihTlW3jGv',
  role: 'CEO & Founder',
  description:
    'Patrick Sébastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.',
  social: {
    facebook: 'fb',
    twitter: 'twitter',
    github: 'github',
    linkedin: 'linkedin',
  },
};
