import { Suspense, useEffect } from "react";
import "./App.scss";
import Header from "@components/Header/Header";
import RoutesConfig from "@routes";
import Footer from "@components/Footer/Footer";

function App() {

  useEffect(()=> {
    if(localStorage.getItem('data-theme')) {
      window.document.documentElement.setAttribute("data-theme", localStorage.getItem('data-theme'));
    } else {
      window.document.documentElement.setAttribute("data-theme", 'light');
    }
  }, [])
  return (
    <div className="app">
      <div className="app-banner"></div>
      <div className="app-container">
        <Header />
        <Suspense fallback={<div>loading...</div>}>
          <RoutesConfig />
        </Suspense>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
