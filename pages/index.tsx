import { GetServerSideProps } from "next";
import { initializeApollo } from "../lib/client";
import { gql, useLazyQuery } from "@apollo/client";
import { CompanySpecialities } from "../backend/types";

import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import { useEffect } from "react";
import CompnayContextProvider, {
  useCompanyContext,
} from "../lib/company/context";
import { ELEMENTS_PER_PAGE } from "../lib/company/constants";
import Filter from "../components/filter";

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
  const state = useCompanyContext();
  const [companies, { loading, error, data, called }] = useLazyQuery(
    GET_ALL_COMPANIES_QUERY,
    { fetchPolicy: state.filter ? "cache-first" : "cache-and-network" }
  );

  useEffect(() => {
    companies({ variables: { input: { limit: ELEMENTS_PER_PAGE } } });
  }, []);

  return (
    <div>
      <Header searchCallback={companies} />
      <Filter callback={companies} />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>An error occured</div>
      ) : data && data.companies.length > 0 ? (
        <Main data={data} />
      ) : (
        <div>You don't have companies yet!</div>
      )}
      {!loading &&
        !error &&
        data &&
        data.companies.length > 0 &&
        !state.search && <Footer />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //TODO: Add check for '?search=TEXT&filter=TEXT&limit=2&offset=2' here

  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_ALL_COMPANIES_QUERY,
    variables: {
      input: { limit: ELEMENTS_PER_PAGE },
    },
  });

  return { props: { initialApolloState: apolloClient.cache.extract() } };
};
