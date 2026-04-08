import React from 'react';
import data from "../data/data.json";
import ActivityCard from './ActivityCard';
import ProfileCard from './ProfileCard';
import { useState } from 'react';

const Dashboard = () => {
    console.log(data)
    const [timeframe, setTimeframe] = useState("weekly");





  return (
    <div>
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
  )
}

export default Dashboard
