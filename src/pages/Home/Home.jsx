import React, { useState } from "react";
import ArticleBox from "../../components/ArticleBox/ArticleBox";
import "./Home.scss";
import banner from "../../assets/banner.jpg";
import Title from "../../components/Title/Title";

export default function Home() {
  const [list] = useState([
    {
      id: 1,
      title: "11111",
      content: "这是第一篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 2,
      title: "22222",
      content: "这是第二篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 3,
      title: "33333",
      content: "这是第三篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 4,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
  ]);
  const [list2] = useState([
    {
      id: 1,
      title: "11111",
      content: "这是第一篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 2,
      title: "22222",
      content: "这是第二篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 3,
      title: "33333",
      content: "这是第三篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 4,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 5,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 6,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 7,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 8,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 9,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
    {
      id: 10,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: banner,
      tag: "tag",
    },
  ]);
  return (
    <div className="home">
      <div className="home-banner">
        {list.map((item) => {
          return <ArticleBox key={item.id} item={item} height="410px" />;
        })}
      </div>
      <Title title="ARTICLES" />
      <div className="home-articles">
        <div className="home-articles-left">
          <div className="home-articles-left-tab">s</div>
          <div className="home-articles-left-list">
            {list2.map((item) => {
              return <ArticleBox key={item.id} item={item} height="500px" />;
            })}
          </div>
        </div>
        <div className="home-articles-right">
          <div className="home-articles-right-IDCard"></div>
        </div>
      </div>
    </div>
  );
}
