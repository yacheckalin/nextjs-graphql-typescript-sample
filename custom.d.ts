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
