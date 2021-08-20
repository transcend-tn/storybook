import { GraphQLClient } from "graphql-request";
const graphcms = new GraphQLClient(
  "https://api-eu-central-1.graphcms.com/v2/ckpy57uxvcs5q01xxfq290ng0/master"
);

export async function getSection(mySlug) {
  const { section } = await graphcms.request(
    `
    query getSection($slug: String!){
      section(where: {slug: $slug}) {
        title
        subtitle
        description
        slug
      }
    }
    `,
    {
      slug: mySlug,
    }
  );
  return section;
}

export async function getServices() {
  const { services } = await graphcms.request(
    `
      {
        services {
          icon {
            url
          }
          name
          description
        }
      }
      `
  );
  return services;
}

export async function getTechnologies() {
  const { technologies } = await graphcms.request(
    `
      {
        technologies {
          name
          img {
            url
          }
        }
      }      
      `
  );
  return technologies;
}

export async function getWorkflow() {
  const { workflows } = await graphcms.request(
    `
      {
        workflows {
          name
          icon {
            url
          }
          description
        }
      }      
      `
  );
  return workflows;
}

export async function getValues() {
  const { values } = await graphcms.request(
    `
      {
        values {
          name
          icon {
            url
          }
          description
        }
      }      
      `
  );
  return values;
}

export async function getTeam() {
  const { teamMembers } = await graphcms.request(
    `
      {
        teamMembers {
          name
          img {
            url
          }
          role
        }
      }     
      `
  );
  return teamMembers;
}
