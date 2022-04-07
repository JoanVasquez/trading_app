import { useEffect, useState } from "react";
import { ICandle } from "../../models/Candle";
import { getDataFromAPI } from "../../services/FetchDataService";
import { BottomData } from "./BottomData";
import { MiddleData } from "./MiddleData";
import { UpData } from "./UpData";

export const Home = () => {
  const [levelUp, setLevelUp] = useState<number>(0);
  const [resistence, setResistence] = useState<number>(0);
  const [middleUp, setMiddleUp] = useState<number>(0);
  const [middleDown, setMiddleDown] = useState<number>(0);
  const [support, setSupport] = useState<number>(0);
  const [levelDown, setLevelDown] = useState<number>(0);
  const [nextCandleDirection, setNextCandleDirection] = useState<string>("");
  const [isCandleRed, setIsCandleRed] = useState<boolean>(false);
  const [isCandleBodyBigger, setIsCandleBodyBigger] = useState<boolean>(false);

  const [data, setData] = useState<ICandle>({
    close: 0,
    high: 0,
    low: 0,
    open: 0,
    time: 0,
  });

  useEffect(() => {
    const getData = async () => {
      const serverData: ICandle = await getDataFromAPI("USD", "1m");
      const lastTime: any = localStorage.getItem("last-time");
      if (serverData.time !== (parseFloat(lastTime) || 0)) {
        localStorage.setItem("last-time", String(serverData.time));
        setData(serverData);
        setIsCandleRed(serverData.close > serverData.open);
        setIsCandleBodyBigger(
          serverData.open + serverData.close > serverData.high + serverData.low
        );

        if (serverData.high > resistence) {
          if (!isCandleRed && isCandleBodyBigger) {
            setNextCandleDirection("UP");
          } else if (isCandleRed && isCandleBodyBigger) {
          }
        }

        // if (isCandleRed) {
        //   if ((serverData.high > resistence) && isCandleBodyBigger) {
        //     setNextCandleDirection("UP")
        //   }
        // } else {
        // }
      }
    };

    const timer = setInterval(() => {
      if (
        levelUp > 0 &&
        resistence > 0 &&
        middleUp > 0 &&
        middleDown > 0 &&
        support > 0 &&
        levelDown > 0
      ) {
        getData();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  console.log(data);

  return (
    <div className="container mt-5">
      <span className="fs-2">Enter data</span>
      <UpData
        levelUp={String(levelUp)}
        setLevelUp={setLevelUp}
        resistence={String(resistence)}
        setResistence={setResistence}
      />
      <MiddleData
        middleUp={String(middleUp)}
        setMiddleUp={setMiddleUp}
        middleDown={String(middleUp)}
        setMiddleDown={setMiddleDown}
      />
      <BottomData
        support={String(support)}
        setSupport={setSupport}
        levelDown={String(levelDown)}
        setLevelDown={setLevelDown}
      />

      <div className="profit-indicator mt-5">
        <div className="fs-1 text-success bg-dark p-3 fw-bold">UP</div>
      </div>
    </div>
  );
};
