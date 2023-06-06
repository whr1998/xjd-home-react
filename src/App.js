import { Suspense } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import RoutesConfig from "./routes";
import Footer from "./components/Footer/Footer";

function App() {
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
