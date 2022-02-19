import { rest } from "msw";
import { url, responseResolver } from "../utils";
import weatherData from "mocks/data/weather.json";

const weatherHandler = [
  rest.get(url("/weather"), responseResolver(weatherData)),
];

export default weatherHandler;
