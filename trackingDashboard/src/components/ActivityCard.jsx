import React from "react";
import WorkIcon from "../assets/icon-work.svg";
import PlayIcon from "../assets/icon-play.svg";
import StudyIcon from "../assets/icon-study.svg";
import ExerciseIcon from "../assets/icon-exercise.svg";
import SocialIcon from "../assets/icon-social.svg";
import SelfcareIcon from "../assets/icon-self-care.svg";
import EllipsisIcon from "../assets/icon-ellipsis.svg";

function ActivityCard({ title, current, previous, timeframe }) {
  const bgColor = {
    Work: "bg-orange-300",
    Play: "bg-sky-300",
    Study: "bg-pink-400",
    Social: "bg-purple-700",
    Exercise: "bg-green-400",
    "Self Care": "bg-yellow-200",
  };

  const icons = {
    Work: WorkIcon,
    Play: PlayIcon,
    Study: StudyIcon,
    Exercise: ExerciseIcon,
    Social: SocialIcon,
    "Self Care": SelfcareIcon,
  };

  let label;
  if (timeframe === "daily") label = "Yesterday";
  else if (timeframe === "weekly") label = "Last Week";
  else if (timeframe === "monthly") label = "Last Month";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden 
      w-full md:w-52  pt-12
      ${bgColor[title]} 
      transition-transform hover:scale-105`}
    >
      {/* ICON */}
      <img
        src={icons[title]}
        className="absolute opacity-40 -top-2 right-4 w-14 z-0"
      />

      {/* INNER CARD */}
      <div
  className="relative z-10 bg-[hsl(235,46%,20%)] text-white 
  p-4 md:p-5 
  rounded-xl 
  hover:bg-[hsl(235,45%,30%)] cursor-pointer"
>
        {/* HEADER */}
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium">{title}</p>
          <img src={EllipsisIcon} alt="dots" />
        </div>

        {/* HOURS + LABEL */}
        <div className="flex justify-between items-center md:block">
          <h2 className="text-3xl md:text-4xl font-light">
            {current}hrs
          </h2>

          <p className="text-gray-400 text-sm">
            {label} - {previous}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default ActivityCard;