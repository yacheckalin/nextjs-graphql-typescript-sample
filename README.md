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

#### Future updates ...

- Improve Error handling strategy
- Info about Company in Modal
- Edit Company info in the same modal
- Delete Company from the list with confirmation modal
- Add pagination with right caching strategy
- Connect with the MongoDB / MySQL
- Add more tests
  - functional one
  - e2e
  - unit tests for helpers
- Performance optimization
  - improve Apollo client caching strategy
  - use react-tracked for React.Context
  - memoization for dump-components and hooks
