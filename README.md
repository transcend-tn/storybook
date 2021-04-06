![N|Solid](https://avatars3.githubusercontent.com/u/71799188?s=200&v=4)
# NextJS + TypeScript + TailwindCSS + Storybook project setup
Build components faster for your NextJproject.

### NEXTJS SETUP
Start a project from scratch with create-next-app.
```sh
create-next-app storybook --use-npm
npm install --save-dev typescript @types/react @types/node
touch tsconfig.json
npm run dev
```
this will start NextJS, which will automagically recognize our newly created `tsconfig.json` and inject a valid configuration.
Create a `/pages/_app.tsx` file
```sh
import React from "react";

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
```