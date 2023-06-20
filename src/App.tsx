/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// Page Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DeputyPage from "./pages/PersonalArea/Deputy/Deputy";
import PlayerPage from "./pages/PersonalArea/Player/Player";

function App() {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="/personal-area/player" element={<PlayerPage></PlayerPage>}></Route>
          <Route path="/personal-area/deputy" element={<DeputyPage></DeputyPage>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
