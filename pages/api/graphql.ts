import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { NextApiRequest, NextApiResponse } from "next";
import { schema } from "../../backend/schema";

import { connectToDatabase } from "../../backend/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  let { db } = await connectToDatabase();

  const apolloServer = new ApolloServer({
    schema,
    plugins: [
      ...(process.env.NODE_ENV === "development"
        ? [ApolloServerPluginLandingPageGraphQLPlayground]
        : []),
    ],
    context: { db },
  });

  const startServer = apolloServer.start();

  await startServer;
  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
