import React from "react";

function ActivityCard({ title, current, previous, timeframe }) {
  let label;

  if (timeframe === "daily") {
    label = "Yesterday";
  } else if (timeframe === "weekly") {
    label = "Last Week";
  } else if (timeframe === "monthly") {
    label = "Last Month";
  }

  return (
    <div>
      <p>{title}</p>
      <h2>{current}hrs</h2>
      <p>{label} - {previous}hrs</p>
    </div>
  );
}
export default ActivityCard;