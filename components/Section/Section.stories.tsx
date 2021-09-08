import React from 'react';
import ServiceCard from './Section';

export default {
  component: ServiceCard,
  title: 'Transcend/Content Related/Section',
};

const Template = (args) => <ServiceCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  bg: 'dark:bg-gray-700',
  meta: {
    title: 'WORKFLOW',
    subtitle:
      'A well-thought out development process becomes your secret weapon. Each stage in the process is vitally important as it contributes to the overall project success.',
    description:
      'We apply Agile methodologies to achieve success and address the requirements specific to each project. Our team promotes transparency and ease of communication through Slack, Trello/Jira, and other tools. At Transcend, we believe in the client-first approach to development. We provide flexible options that respond to ongoing changes in the project workflow. You can choose between our several business and engagement models depending on your needs.',
    slug: 'workflow',
  },
  data: [
    {
      icon: {
        url: 'https://media.graphcms.com/10YfAEIEQvu78NwIlckm',
      },
      name: 'Web Development',
      description:
        'We ensure that you’ll make an impression online. We take advantage of our development potential and expertise to deliver top-tier responsive web applications based on user-centered design. Whether you need a B2C portal or enterprise web-based software, you acquire a solution optimized for your custom requirements.',
    },
    {
      icon: {
        url: 'https://media.graphcms.com/fkblQzsgS26jKA2RGgll',
      },
      name: 'Mobile Development',
      description:
        'Mobile traffic has gained momentum and companies are looking for unique mobile solutions to remain competitive players in the game. Our success in implementing both cross-platform and native mobile applications has enabled us to create superior projects that allow businesses to stand out in today’s volatile marketplace.',
    },
    {
      icon: {
        url: 'https://media.graphcms.com/u8gVzlqoTzqSYkUs01ff',
      },
      name: 'UX & UI Design',
      description:
        'Code quality alone won’t make your app great. We know how to guide user interactions, deliver the right information at the right time, and create beautiful designs.',
    },
    {
      icon: {
        url: 'https://media.graphcms.com/6D44lxGVQQCLbr8z3cYI',
      },
      name: 'Custom Software Development',
      description:
        'We create responsive products tailored to your goals and expectations. Vast experience lets us provide you with robust custom software development services to push your business along. Our team analyzes your requirements and develops entirely customized web applications. We apply the most advanced technologies to help you boost your business. Let us deliver superior and budget-efficient solutions that will take you farther and make you faster',
    },
    {
      icon: {
        url: 'https://media.graphcms.com/pjSw5d4QLWZWOTTSG5sv',
      },
      name: 'Dev Ops',
      description:
        'Based on our experience in development and methodologies, we can build up a team of DevOps experts who will improve your project infrastructure, shorten your product time-to-market, and accelerate development cycles. We can gather a cross-functional team of engineers who will combine the DevOps and Agile approaches to make your development process more flexible, and your project, more reliable.',
    },
    {
      icon: {
        url: 'https://media.graphcms.com/j0ko7wXySoaFl0Lt8FYK',
      },
      name: 'Software Testing and QA',
      description:
        'No piece of software can be allowed in production without proper testing. Our team applies field-proven testing methods and approaches to ensure high quality of your end-product. We will make sure that your entire project works as it should, beginning with its design through basic functionality to performance',
    },
  ],
};
