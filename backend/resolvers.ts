import { IResolvers } from "@graphql-tools/utils";

export const resolvers: IResolvers = {
  Query: {
    getAllCompanies(parent, args, context) {
      return [];
    },
    getCompanyById(parent, args, context) {
      return null;
    },
  },
  Mutation: {
    createCompany(parent, args, context) {
      return { ...args.input, id: 1 };
    },
    updateCompany(parent, args, context) {
      return { ...args.input };
    },
    deleteCompany(parent, args, context) {
      return null;
    },
  },
};
