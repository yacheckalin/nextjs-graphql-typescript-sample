import { IResolvers } from "@graphql-tools/utils";
import { ELEMENTS_PER_PAGE } from "../lib/company/constants";
import { Company, ContextI, GetAllCompaniesInputI } from "./types";

const DEFAULT_PAGINATION_LIMIT = 40;

export const resolvers: IResolvers = {
  Query: {
    getAllCompanies(
      parent,
      args: { input?: GetAllCompaniesInputI },
      context: ContextI
    ) {
      let result = [...context.data];
      const { input } = args;

      // filtering by specialities (could be several)
      if (input?.specialities && input.specialities.length > 0) {
        result = result.filter((item) =>
          input.specialities?.includes(item.specialities)
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

      // added pagination

      const limit = !input?.limit ? ELEMENTS_PER_PAGE : input.limit;

      return result.splice(
        input?.offset || 0,
        input?.search ? result.length : limit
      );
    },
    getCompanyById(
      parent,
      args: { input: any },
      context: ContextI
    ): Company | undefined {
      let result = undefined;
      const id = parseInt(args.input?.id);
      if (id) {
        result = context.data.find((item) => item.id === id);
      }

      return result;
    },
  },
  //TODO: Will be added soon
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
