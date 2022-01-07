declare module "*.graphql" {
  import { DocumentNode } from "graphql";
  const Schema: DocumentNode;

  export = Schema;
}

// declare module "*.css" {
//   interface IClassNames {
//     [className: string]: string;
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

declare namespace NodeJS {
  interface ProcessEnv {
    GOOGLE_MAP_API_KEY: string;
  }
}

declare global {
  interface Window {
    google?: any;
  }
}
