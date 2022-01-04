#### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

#### Generate new data with faker.js

```bash
npm run mock:generate
```

That will update ./backend/data.json file entirely with 1000 items!

You can fix that number by changing ./mock/generate.js file values

#### GraphQL Playground

You need to start application at first in development mode

```bash
npm run dev
```

Then you will be able to access http://localhost:3000/api/graphql with playground

#### Futher updates ...

- Load More button
- Read Info about Company in Modal
- Edit Company info
- Delete Company from the list
- Connect with the MongoDB / MySQL
