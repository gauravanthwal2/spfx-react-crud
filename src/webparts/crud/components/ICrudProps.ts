import { WebPartContext } from "@microsoft/sp-webpart-base";

export interface ICrudProps {
  description: string;
  siteurl: string;
  context: WebPartContext;
}
