import forecastHandler from "./forecast";
import weatherHandler from "./weather";

export const handlers = [...weatherHandler, ...forecastHandler];
