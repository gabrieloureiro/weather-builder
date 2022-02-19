import { rest } from "msw";
import { url, responseResolver } from "../utils";
import forecastData from "mocks/data/forecast.json";

const forecastHandler = [
  rest.get(url("/forecast"), responseResolver(forecastData)),
];

export default forecastHandler;
