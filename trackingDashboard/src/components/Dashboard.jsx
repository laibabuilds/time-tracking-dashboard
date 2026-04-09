import React from "react";
import data from "../data/data.json";
import ActivityCard from "./ActivityCard";
import ProfileCard from "./ProfileCard";
import { useState } from "react";

const Dashboard = () => {
  console.log(data);
  const [timeframe, setTimeframe] = useState("weekly");

  return (
    <div className="min-h-screen flex justify-center items-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

      {data.map((item) => (
        <ActivityCard
          //   key={item.id}
          title={item.title}
          current={item.timeframes[timeframe].current}
          previous={item.timeframes[timeframe].previous}
          timeframe={timeframe}
        />
      ))}
      </div>
    </div>
  );
};

export default Dashboard;
