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

That will update ./fixture/companies.json file entirely with 1000 items!

You can fix that number by changing ./mock/generate.js file values

#### Start docker containers

You need to start docker container after generating fixture data!

```bash
docker-compose up
```

#### GraphQL Playground

You need to start application at first in development mode

```bash
npm run dev
```

Then you will be able to access http://localhost:3000/api/graphql with playground

#### Future updates ...

- Improve Error handling strategy
- Delete Company from the list with confirmation modal
- Add pagination with right caching strategy
- Add more tests
  - functional one
  - e2e
  - unit tests for helpers
- Performance optimization
  - improve Apollo client caching strategy
  - use react-tracked for React.Context
  - memoization for dump-components and hooks
