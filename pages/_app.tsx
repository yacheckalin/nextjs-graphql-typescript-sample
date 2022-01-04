import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import { useApollo } from "../lib/client";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
