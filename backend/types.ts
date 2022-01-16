import { Db } from "mongodb";

export enum CompanySpecialities {
  excavation = "excavation",
  plumbing = "plumbing",
  electrical = "electrical",
}
export interface Company {
  _id: string;
  name: string;
  logo: string;
  city: string;
  specialities: CompanySpecialities;
  lat: number;
  lng: number;
}
export interface GetAllCompaniesInputI {
  search?: string;
  specialities?: CompanySpecialities;
  city?: string;
  limit?: number;
  offset?: number;
}

export interface GetCompanyByIdI {
  id: string;
}
export interface ContextI {
  db: Db;
}
