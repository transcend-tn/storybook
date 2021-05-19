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

### TAILWINDCSS SETUP

Install the TailwindCSS library and some useful PostCSS polyfills

```sh
npm install --save-dev tailwindcss postcss-preset-env
```

Generate a `tailwind.config.js` file

```sh
npx tailwind init
```

Edit `tailwind.config.js` file

```sh
module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
```

Create `postcss.config.js` to configure PostCSS in a minimal way, like the following

```sh
module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env"
  ]
};
```

Create `/styles/index.css` and populate it using the postcss-import-friendly `@import` directives (instead of using `@tailwind`)

```sh
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
```

Import `/styles/index.css` inside `/pages/_app.tsx`

```sh
import "../styles/index.css"; // <- applied everywhere in the NextJS application scope
```

### STORYBOOK SETUP

```sh
npm install --save-dev @storybook/react babel-loader @babel/core awesome-typescript-loader react-docgen-typescript-loader
```

Create `.storybook/tsconfig.json`

```sh
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": false,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react"            // <- important!
  },
  "exclude": ["node_modules"],
  "include": [                // <- important!
    "../types.d.ts",
      "../next-env.d.ts",
      "../**/*.stories.ts",
      "../**/*.stories.tsx"
    ]
  }
```

Create `/.storybook/main.js`

```sh
const path = require("path");

module.exports = {
stories: ["../components/**/**/*.stories.@(tsx|mdx)"],
};
```

Create `/.storybook/preview.js` and use it to import our stylesheet

```sh
// The preview application is essentially just your stories with
// a framework-agnostic 'router'.
// It renders whichever story the manager application tells it to render.
// In this case we just use it to import the stylesheet and inject it
// in the context of our stories

import "../styles/index.css";
```

Update `postcss.config.js` to use an object-based format. This is super important in order to solve any issues Storybook's webpack process may encounter while resolving the dependencies!

```sh
module.exports = {
  plugins: {
    tailwindcss: {},
    "postcss-preset-env": {}
  }
};
```

Now add this script in the `package.json`

```sh
"storybook": "start-storybook -p 5000"
```

### DONE

Now you will be able to create your component stories in your own component's folders (ex.: `/components/button/1-button.stories.tsx`) using this powerful toolset.

P.S : If you wish to organize your Storybook stories using a different folder structure, you'll need to do no more than editing the `stories` property inside the exported configuration in `/.storybook/main.js` using your desired glob patterns
