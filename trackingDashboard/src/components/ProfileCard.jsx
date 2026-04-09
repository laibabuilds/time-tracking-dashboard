import React from "react";
import ProfileImg from "../assets/image-jeremy.png";

function ProfileCard({ timeframe, setTimeframe }) {
  return (
    <div
      className="bg-[hsl(235,46%,20%)] rounded-2xl text-white 
                    md:col-span-1 md:row-span-2 flex flex-col"
    >
      {/* Top Section */}
      <div
        className="bg-[hsl(246,80%,60%)] p-6 rounded-2xl 
                      flex items-center gap-4 md:flex-col md:items-start md:gap-6"
      >
        <img
          src={ProfileImg}
          className="w-16 border-2 border-white rounded-full"
        />

        <div>
          <p className="text-sm text-gray-300">Report for</p>
          <h2 className="text-xl md:text-3xl font-light leading-tight">
            Jeremy <br className="hidden md:block" /> Robson
          </h2>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-6 flex justify-between md:flex-col md:gap-4 text-gray-400 text-sm">
<button onClick={() => setTimeframe("daily")} className={`capitalize hover:text-white transition text-left ${
              timeframe === "daily" ? "text-white" : ""
            }`} > Daily </button>
<button onClick={() => setTimeframe("weekly")} className={`capitalize hover:text-white transition text-left ${
              timeframe === "weekly" ? "text-white" : ""
            }`} > Weekly </button>
        <button onClick={() => setTimeframe("monthly")} className={`capitalize hover:text-white transition text-left ${
              timeframe === "monthly" ? "text-white" : ""
            }`} > Monthly </button>
        {/* {["daily", "weekly", "monthly"].map((t) => (
          <button
            key={t}
            onClick={() => setTimeframe(t)}
            className={`capitalize hover:text-white transition text-left ${
              timeframe === t ? "text-white" : ""
            }`}
          >
            {t} */}
          {/* </button> */}
        {/* ))} */}
      </div>
    </div>
  );
}

export default ProfileCard;
