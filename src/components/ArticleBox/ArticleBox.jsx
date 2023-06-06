import React from "react";
import "./ArticleBox.scss";

export default function ArticleBox({ item, height }) {
  return (
    <div>
      <div key={item.id} className="ab" style={{height: height}}>
        <div className="ab-img">
          <img src={item.banner} alt="" />
          <div className="ab-img-mask"></div>
        </div>
        <div className="ab-content">
          <div className="ab-content-tag">{item.tag}</div>
          <div className="ab-content-title">{item.title}</div>
          <div className="ab-content-content">{item.content}</div>
          <div className="ab-content-time">{item.time}</div>
        </div>
        <div className="ab-tip">
          <div>FEATURED</div>
        </div>
      </div>
    </div>
  );
}
