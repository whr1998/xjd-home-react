import React from "react";
import "./Card.scss";

export default function Card({ title, icon }) {
  return <div className="card">{title}</div>;
}
