import { gql } from "@apollo/client";

export const typeDefs = gql`
  enum CompanySpecialities {
    excavation
    plumbing
    electrical
  }

  type Company {
    id: ID!
    name: String!
    logo: String!
    specialities: CompanySpecialities!
    city: String!
  }

  """
  We can use
  """
  input GetAllCompaniesInput {
    search: String
    specialities: CompanySpecialities
    city: String
    limit: Int
    offset: Int
  }

  """
  Get Info about company by ID
  """
  input GetCompanyByIdInput {
    id: ID!
  }

  """
  Create Company
  """
  input CreateCompanyInput {
    name: String!
    logo: String!
    specialities: CompanySpecialities!
    city: String!
  }

  """
  Update Company Info
  """
  input UpdateCompanyInput {
    id: ID!
    name: String
    logo: String
    specialities: CompanySpecialities
    city: String
  }

  """
  Delete Company By ID
  """
  input DeleteCompanyInput {
    id: ID!
  }

  type Query {
    """
    Get all companies with filters and search (with pagination in future)
    """
    getAllCompanies(input: GetAllCompaniesInput!): [Company!]!
    getCompanyById(input: GetCompanyByIdInput!): Company
  }

  type Mutation {
    createCompany(input: CreateCompanyInput!): Company!
    updateCompany(input: UpdateCompanyInput!): Company
    deleteCompany(input: DeleteCompanyInput!): Company
  }
`;
