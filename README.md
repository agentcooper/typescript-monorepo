> **⚠️ This project is archived. Take a look at [Turborepo](https://turborepo.org).**

# TypeScript full-stack monorepo example

[Lerna](https://lerna.js.org/) + [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html).

## Features

- One `tsc` invocation to build all the packages
- Each package has it's own `tsconfig.json`
- Each package can be published to NPM
- `packages/playground` is a full-stack project with shared code between frontend and backend

## How to run

```
npm run bootstrap
npm start
```
