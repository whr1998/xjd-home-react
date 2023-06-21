import React, { useState } from "react";
import ArticleBox from "@components/ArticleBox/ArticleBox";
import "./Home.scss";
import Title from "@components/Title/Title";
import Card from "../../components/Card/Card";
import avatar from "@assets/avatar.webp";

export default function Home() {
  const [list] = useState([
    {
      id: 1,
      title: "11111",
      content: "这是第一篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 2,
      title: "22222",
      content: "这是第二篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 3,
      title: "33333",
      content: "这是第三篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 4,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
  ]);
  const [list2] = useState([
    {
      id: 1,
      title: "11111",
      content: "这是第一篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 2,
      title: "22222",
      content: "这是第二篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 3,
      title: "33333",
      content: "这是第三篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 4,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 5,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 6,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 7,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 8,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 9,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
    {
      id: 10,
      title: "44444",
      content: "这是第四篇文章",
      time: "2022/06/23",
      banner:
        "http://aurora-xu.oss-cn-hangzhou.aliyuncs.com/aurora/articles/2c6ff6f793352540e6c4e09e9530d391.png",
      tag: "tag",
    },
  ]);
  const [tab] = useState([
    {
      id: 1,
      name: "测试",
      num: 1,
    },
    {
      id: 2,
      name: "学习",
      num: 1,
    },
    {
      id: 3,
      name: "前端",
      num: 1,
    },
    {
      id: 4,
      name: "后端",
      num: 1,
    },
    {
      id: 5,
      name: "大数据",
      num: 1,
    },
    {
      id: 6,
      name: "哈哈哈",
      num: 1,
    },
    {
      id: 7,
      name: "呵呵呵",
      num: 1,
    },
    {
      id: 8,
      name: "嘿嘿嘿",
      num: 1,
    },
    {
      id: 9,
      name: "嘻嘻嘻",
      num: 1,
    },
    {
      id: 10,
      name: "嘿嘿嘿",
      num: 1,
    },
    {
      id: 11,
      name: "嘻嘻嘻",
      num: 1,
    },
    {
      id: 12,
      name: "嘿嘿嘿",
      num: 1,
    },
    {
      id: 13,
      name: "嘻嘻嘻",
      num: 1,
    },
  ]);
  const [cardList] = useState([
    {
      id: 1,
      title: 'RECENT COMMENTS',
      icon: ''
    },
    {
      id: 2,
      title: 'TAGS',
      icon: ''
    },
    {
      id: 3,
      title: 'NOTICE',
      icon: ''
    },
    {
      id: 4,
      title: 'WEBSITE INFO',
      icon: ''
    }
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
              <li className="active">
                <span>ALL</span>
              </li>
              {tab.map((item) => {
                return (
                  <li key={item.id}>
                    <span>{item.name}</span>
                    <span>{item.num}</span>
                  </li>
                );
              })}
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
                <Title align="center" title="小激动" />
              </div>
              <div className="slogan">这是一段不知道在说什么的文字</div>
            </div>
          </div>
          {
            cardList.map((item) => {
              return <Card key={item.id} {...item} />
            })
          }
        </div>
      </div>
    </div>
  );
}
