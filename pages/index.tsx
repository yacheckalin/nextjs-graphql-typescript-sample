import { GetServerSideProps } from "next";
import { initializeApollo } from "../lib/client";
import { gql, useLazyQuery } from "@apollo/client";
import { CompanySpecialities } from "../backend/types";

import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import { useEffect } from "react";

export const GET_ALL_COMPANIES_QUERY = gql`
  query GET_ALL_COMPANIES_QUERY($input: GetAllCompaniesInput!) {
    companies: getAllCompanies(input: $input) {
      id
      name
      city
      logo
      specialities
    }
  }
`;

export interface CompaniesQuery {
  companies: {
    id: number;
    name: string;
    city: string;
    logo: string;
    specialities: CompanySpecialities;
  }[];
}

export default function Home() {
  const [companies, { loading, error, data, called }] = useLazyQuery(
    GET_ALL_COMPANIES_QUERY,
    { fetchPolicy: "no-cache" }
  );

  useEffect(() => {
    companies({ variables: { input: {} } });
  }, []);

  return (
    <div>
      <Header searchCallback={companies} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>An error occured</div>
      ) : data ? (
        <Main data={data} />
      ) : (
        <div>You don't have companies yet!</div>
      )}
      {/* {!loading && !error && data && <Footer />} */}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //TODO: Add check for '?search=TEXT&filter=TEXT&limit=2&offset=2' here

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_ALL_COMPANIES_QUERY,
    variables: {
      input: {},
    },
  });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
