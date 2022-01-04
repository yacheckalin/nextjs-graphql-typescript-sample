import { IResolvers } from "@graphql-tools/utils";
import { data } from "./data.json";
import { Company, GetAllCompaniesInputI, GetCompanyByIdI } from "./types";

export const resolvers: IResolvers = {
  Query: {
    getAllCompanies(parent, args: { input?: GetAllCompaniesInputI }, context) {
      let result = [...data];
      const { input } = args;

      // filtering by specialities
      if (input?.specialities) {
        result = result.filter(
          (item) =>
            item.specialities.toUpperCase() ===
            input.specialities?.toUpperCase()
        );
      }

      // filtering by search
      if (input?.search) {
        result = result.filter((item) =>
          item.name.match(new RegExp(`${input.search}`, `is`))
        );
      }

      // filtering by city
      if (input?.city) {
        result = result.filter(
          (item) => item.city.toUpperCase() === input.city?.toUpperCase()
        );
      }
      return result;
    },
    getCompanyById(parent, args: { input: any }, context): Company | undefined {
      let result = undefined;
      const id = parseInt(args.input?.id);
      if (id) {
        result = data.find((item) => item.id === id);
      }

      return result;
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
