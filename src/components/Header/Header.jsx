import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [navList] = useState([
    {
      id: 1,
      label: "HOME",
      path: "home",
    },
    {
      id: 2,
      label: "ABOUT",
      path: "about",
    },
    {
      id: 3,
      label: "CONTACT",
      path: "contact",
    },
  ]);
  const [theme, setTheme] = useState(localStorage.getItem("data-theme") || 'light');
  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark')
      window.document.documentElement.setAttribute("data-theme", 'dark');
      localStorage.setItem("data-theme", "dark")
    }
    if(theme === 'dark') {
      setTheme('light')
      window.document.documentElement.setAttribute("data-theme", 'light');
      localStorage.setItem("data-theme", "light")
    }
  }

  return (
    <header className="header">
      <nav className="header-left">
        <div className="header-logo">
          <p className="header-logo-name">小激动</p>
          <p className="header-logo-usName">XIAO JI DONG</p>
        </div>
        <div className="header-nav">
          <ul>
            {navList.map((item) => {
              return (
                <NavLink className="navLink" key={item.id} to={"/" + item.path}>
                  {item.label}
                </NavLink>
              );
            })}
          </ul>
        </div>
      </nav>
      <nav className="header-right">
        <div className="header-operate">
          <div className="header-operate-toggle">
            <div
              onClick={toggleTheme}
              className={theme === 'dark' ? "slide bgDark" : "slide bgLight"}
            >
              <div className={theme === 'dark' ? "sliderDark" : "sliderLight"}></div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
