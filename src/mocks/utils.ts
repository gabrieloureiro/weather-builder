import { WeatherQueryResponse } from "modules/Weather/types";
import { ResponseFunction, RestContext, MockedResponse } from "msw";

export const url = (path: string): string =>
  new URL(path, process.env.NEXT_PUBLIC_API_URL).href;

type Response = MockedResponse | Promise<MockedResponse>;

export const responseResolver =
  (data: WeatherQueryResponse) =>
  (_, res: ResponseFunction, ctx: RestContext): Response =>
    res(ctx.delay(2000), ctx.json(data));
