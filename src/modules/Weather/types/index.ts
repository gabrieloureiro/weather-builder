export * from "./weather";
export * from "./forecast";

export type QueryParams = {
  lat: number;
  lon: number;
  units?: string;
  lang?: string;
};
