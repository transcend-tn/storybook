import { ChevronUpIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Services from '../components/services';
import Team from '../components/team';
import Technologies from '../components/technologies';
import {
  getSection,
  getServices,
  getTeam,
  getTechnologies,
  getValues,
  getWorkflow,
} from '../lib/graphcms';

export async function getStaticProps() {
  const hero = await getSection('transcend');
  const servicesMeta = await getSection('services');
  const workflowMeta = await getSection('workflow');
  const valuesMeta = await getSection('values');
  const services = await getServices();
  const technologies = await getTechnologies();
  const workflow = await getWorkflow();
  const values = await getValues();
  const team = await getTeam();
  return {
    props: {
      hero,
      servicesMeta,
      services,
      technologies,
      workflowMeta,
      workflow,
      valuesMeta,
      values,
      team,
    },
  };
}
export default function Home({
  hero,
  servicesMeta,
  services,
  technologies,
  workflowMeta,
  workflow,
  valuesMeta,
  values,
  team,
}) {
  return (
    <div>
      <Head>
        <title>Transcend</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Transcend Cyberprise is Tunisian Software Company"
        />
      </Head>

      <Hero
        title={hero?.title}
        subtitle={hero?.subtitle}
        description={hero?.description}
        slug={hero?.slug}
      />
      <Services bg="dark:bg-gray-700" meta={servicesMeta} data={services} />
      <Technologies title="technologies" data={technologies} />
      <Services bg="dark:bg-gray-700" meta={workflowMeta} data={workflow} />
      <Services
        bg="bg-gray-50 dark:bg-gray-800"
        meta={valuesMeta}
        data={values}
      />
      <Team data={team} />
      <Contact />
      <a
        href="#"
        className="back-to-top w-10 h-10 fixed bottom-0 right-0 mb-5 mr-5 flex items-center justify-center rounded-full bg-gray-600 text-white text-lg z-20 duration-300 hover:bg-gray-400"
      >
        <ChevronUpIcon />
      </a>
    </div>
  );
}
