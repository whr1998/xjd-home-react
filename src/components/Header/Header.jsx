import React, { useState } from "react";
import {FaGithub} from 'react-icons/fa'
import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [navList] = useState([
    {
      id: 1,
      label: "HOME",
      path: 'home'
    },
    {
      id: 2,
      label: "ABOUT",
      path: 'about'
    },
    {
      id: 3,
      label: "CONTACT",
      path: 'contact'
    },
  ]);
  return (
    <div className="header">
      <div className="header-left">
        <div className="header-logo">
          <p className="header-logo-name">小激动</p>
          <p className="header-logo-usName">XIAO JI DONG</p>
        </div>
        <div className="header-nav">
          <ul>
            {navList.map((item) => {
              return <NavLink className="navLink" key={item.id} to={'/' + item.path}>{item.label}</NavLink>;
            })}
          </ul>
        </div>
      </div>
      <div className="header-right">
        <div className="header-operate">
          <span><FaGithub className="icon"/></span>
          <span><FaGithub className="icon"/></span>
          <span><FaGithub className="icon"/></span>
          <span><FaGithub className="icon"/></span>
        </div>
      </div>
    </div>
  );
}
