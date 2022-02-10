import { useEffect, useState } from "react";
import useWeather from "../hooks/use-weather";

export default function Weather() {
  const [currentLat, setCurrentLat] = useState(0);
  const [currentLon, setCurrentLon] = useState(0);

  const { data, isLoading } = useWeather({ lat: currentLat, lon: currentLon });

  useEffect(() => {
    const a = navigator.geolocation.getCurrentPosition(
      (position) => position.coords.latitude
    );
    console.log(a);
  }, []);
  return <h1>Hello world</h1>;
}
