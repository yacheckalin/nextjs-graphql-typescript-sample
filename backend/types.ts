export enum CompanySpecialities {
  excavation = "excavation",
  plumbing = "plumbing",
  electrical = "electrical",
}
export interface Company {
  id: number;
  name: string;
  logo: string;
  city: string;
  specialities: CompanySpecialities;
}
export interface GetAllCompaniesInputI {
  search?: string;
  specialities?: CompanySpecialities;
  city?: string;
  limit?: number;
  offset?: number;
}

export interface GetCompanyByIdI {
  id: number;
}
export interface ContextI {
  data: Company[];
}
