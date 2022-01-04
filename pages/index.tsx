import { GetServerSideProps } from "next";
import Head from "next/head";
import { initializeApollo } from "../lib/client";
import { gql, useQuery } from "@apollo/client";
import CompanyList from "../components/company-list";
import { CompanySpecialities } from "../backend/types";

import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Main from "../components/main";
import Footer from "../components/footer";

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
  const result = useQuery<CompaniesQuery>(GET_ALL_COMPANIES_QUERY, {
    variables: { input: {} },
  });

  return (
    <>
      <Header />
      <Main result={result} />
      <Footer />
    </>
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
