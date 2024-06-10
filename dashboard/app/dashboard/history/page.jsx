"use client";
import Card from "@/app/ui/dashboard/card/card";
import "./history.css";
import CardDetail from "@/app/ui/dashboard/card/cardDetail";
import { useState } from "react";

const History = () => {
  const [expand, setExpand] = useState(false);
  const [detail, setDetail] = useState({});

  const handleClick = ({ number, detail, positive, percentage }) => {
    setExpand((prev) => !prev);

    setDetail({
      number: number,
      detail: detail,
      positive: positive,
      percentage: percentage,
    });
  };

  return (
    <div className="history-container">
      <div className="card-container">
        <div
          onClick={() =>
            handleClick({
              number: 110200,
              positive: true,
              percentage: "12%",
              detail: "more interaction",
            })
          }
        >
          <Card header="Merhaba" />
        </div>
        <div
          onClick={() =>
            handleClick({
              number: 15,
              positive: true,
              percentage: "12%",
              detail: "more interaction",
            })
          }
        >
          <Card header="Selam" />
        </div>
        <div
          onClick={() =>
            handleClick({
              number: 15,
              positive: true,
              percentage: "12%",
              detail: "more interaction",
            })
          }
        >
          <Card header="Selam" />
        </div>
        <div
          onClick={() =>
            handleClick({
              number: 15,
              positive: true,
              percentage: "12%",
              detail: "more interaction",
            })
          }
        >
          <Card header="Selam" />
        </div>
      </div>

      {expand && <CardDetail detail={detail} />}
    </div>
  );
};

export default History;
