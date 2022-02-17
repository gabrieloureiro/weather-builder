import { Card } from "components";
import { useWeatherContent } from "modules/Weather/context";
import moment from "moment";

const CurrentTimeLocaleCard = () => {
  const { weather, isLoading, isFetching, isFetched, isError } =
    useWeatherContent();

  const formattedCurrentTime = moment
    .unix(weather?.dt)
    .format("DD/MM/YYYY HH:mm:ss");

  return <Card highlightColor="red.400">{formattedCurrentTime}</Card>;
};

export default CurrentTimeLocaleCard;
