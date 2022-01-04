import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";
import Layout from "../components/layout";
import { useApollo } from "../lib/client";
import CompanyContextProvider from "../lib/company/context";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <CompanyContextProvider>
          <Component {...pageProps} />;
        </CompanyContextProvider>
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
