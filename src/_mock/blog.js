import { faker } from '@faker-js/faker';

// ----------------------------------------------------------------------

const POST_TITLES = [
  'The QPR Configuration Manager is a tool that is used to configure all installed QPR products.',
  'The QPR Portal main window consists of five elements: the Tabs, the Toolbar, the Navigation Frame, the Viewing Frame, and the Details Pane.',
  'Strategy planning includes the strategic themes and targets related to business operations of the organization',
  '✨QPR Metrics ✨',
  'Processes are crucial for improving business performance',
  'Six Socks Studio',
  'QPR ProcessAnalyzer is the first and only process mining solution to run natively on the Snowflake data cloud',
  'Introducing the next-gen process mining for large international companies with complex business processes and billions of data rows',
  'QPR Metrics is your perfect tool for automating strategy execution, operational performance management, people performance management, risk management and project portfolio management. QPR also uniquely combines performance and quality management enabling operational improvement',
  'Examining the Evolution of the Typical Web Design Client',
  'Latest product updates: New Snowflake features and more improvements',
  'The American Dream retold through mid-century railroad graphics',
  'Illustration System Design',
  'CarZio-Delivery Driver App SignIn/SignUp',
  'How to create a client-serverless Jamstack app using Netlify, Gatsby and Fauna',
  'Tylko Organise effortlessly -3D & Motion Design',
  'RAYO ?? A expanded visual arts festival identity',
  'Normally a user logs into the User Management System by using his or her UMS username and password. However, if NT/LDAP authentication is enabled for the QPR Foundation Server, then NT/LDAP usernames and passwords can be used as well.',
  'Inside the Mind of Samuel Day',
  'Process mining analyzes a wide range of systems',
  'Akkers van Margraten',
  'Gradient Ticket icon',
  'Here’s a Dyson motorcycle concept that doesn’t ‘suck’!',
  'How to Animate a SVG with border-image',
];

const posts = [...Array(23)].map((_, index) => ({
  id: faker.datatype.uuid(),
  cover: `/assets/images/covers/cover_${index + 1}.jpg`,
  title: POST_TITLES[index + 1],
  createdAt: faker.date.past(),
  view: faker.datatype.number(),
  comment: faker.datatype.number(),
  share: faker.datatype.number(),
  favorite: faker.datatype.number(),
  author: {
    name: faker.name.fullName(),
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
}));

export default posts;
