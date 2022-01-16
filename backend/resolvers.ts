import { IResolvers } from "@graphql-tools/utils";
import { ELEMENTS_PER_PAGE } from "../lib/company/constants";
import { ContextI, GetAllCompaniesInputI } from "./types";
import {  ObjectId } from "mongodb";

const DEFAULT_PAGINATION_LIMIT = 40;

export const resolvers: IResolvers = {
  Query: {
    async getAllCompanies(
      parent,
      args: { input?: GetAllCompaniesInputI },
      context: ContextI
    ) {
      let result = [];
      const { input } = args;

      try {
        result = await context.db.collection("companies").find({}).toArray();

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
      } catch (e) {
        console.log(e);
        throw new Error("An error occured");
      }

      // added pagination
      const limit = !input?.limit ? ELEMENTS_PER_PAGE : input.limit;

      return result.splice(
        input?.offset || 0,
        input?.search ? result.length : limit
      );
    },
    async getCompanyById(parent, args: { input: any }, context: ContextI) {
      let result;
      const id = args.input?.id;
      try {
        if (id) {
          result = await context.db
            .collection("companies")
            .findOne({ _id: new ObjectId(id) });
        }
      } catch (e) {
        throw new Error("An error occured");
      }

      return result;
    },
  },
  Mutation: {
    //TODO: Will be added soon
    createCompany(parent, args, context) {
      return { ...args.input, id: 1 };
    },
    async updateCompany(parent, args, context: ContextI) {
      try {
        await context.db.collection("companies").updateOne(
          { _id: new ObjectId(args.input.id) },
          {
            $set: {
              name: args.input.name,
              specialities: args.input.specialities,
              logo: args.input.logo,
            },
          }
        );
      } catch (e) {
        throw new Error("An error occured");
      }

      return { ...args.input, _id: new ObjectId(args.input.id) };
    },
    async deleteCompany(parent, args, context) {
      let result;
      let item;
      try {
        item = await context.db.collection("companies").findOne({
          _id: new ObjectId(args.input.id),
        });

        if (!item) {
          throw new Error("Item not found!");
        } else {
          result = await context.db
            .collection("companies")
            .deleteOne({ _id: new ObjectId(args.input.id) });
        }
      } catch (e) {
        throw new Error("An error occured");
      }

      return { ...item };
    },
  },
};
