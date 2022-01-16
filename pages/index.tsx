import { GetServerSideProps } from "next";
import { initializeApollo } from "../lib/client";
import { gql, useLazyQuery } from "@apollo/client";
import { CompanySpecialities } from "../backend/types";

import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";
import { useEffect } from "react";
import { useCompanyContext } from "../lib/company/context";
import { ELEMENTS_PER_PAGE } from "../lib/company/constants";
import Filter from "../components/filter";
import Modal from "../components/modal";

export const GET_ALL_COMPANIES_QUERY = gql`
  query GET_ALL_COMPANIES_QUERY($input: GetAllCompaniesInput!) {
    companies: getAllCompanies(input: $input) {
      _id
      name
      city
      logo
      specialities
      lat
      lng
    }
  }
`;

export const UPDATE_COMPANY_BY_ID = gql`
  mutation UPDATE_COMPANY_BY_ID($input: UpdateCompanyInput!) {
    updateCompany(input: $input) {
      _id
      name
      logo
      specialities
    }
  }
`;

export interface CompaniesQuery {
  companies: {
    _id: string;
    name: string;
    city: string;
    logo: string;
    specialities: CompanySpecialities;
    lat: string;
    lng: string;
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
        !state.search && <Footer callback={companies} />}
      {state.modal.open && state.modal?.data && (
        <Modal data={state.modal.data} />
      )}
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
