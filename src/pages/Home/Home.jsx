import React, { useState } from "react";
import ArticleBox from "@/components/ArticleBox/ArticleBox";
import "./Home.scss";
import Title from "@/components/Title/Title";
import avatar from '@/assets/avatar.webp'

export default function Home() {
  const [list] = useState([
    {
      id: 1,
      title: "11111",
      content: "这是第一篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 2,
      title: "22222",
      content: "这是第二篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 3,
      title: "33333",
      content: "这是第三篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 4,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
  ]);
  const [list2] = useState([
    {
      id: 1,
      title: "11111",
      content: "这是第一篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 2,
      title: "22222",
      content: "这是第二篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 3,
      title: "33333",
      content: "这是第三篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 4,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 5,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 6,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 7,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 8,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 9,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
      tag: "tag",
    },
    {
      id: 10,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner: 'http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png',
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
          <div className="tab">
            <ul>
              <li>
                <span className=""></span>
              </li>
            </ul>
          </div>
          <div className="list">
            {list2.map((item) => {
              return <ArticleBox key={item.id} item={item} height="500px" />;
            })}
          </div>
        </div>
        <div className="home-articles-right">
          <div className="IDCard">
            <div className="mask">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="name">
                <Title align="center" title="小激动"/>
              </div>
              <div className="slogan">
                这是一段不知道在说什么的文字
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
