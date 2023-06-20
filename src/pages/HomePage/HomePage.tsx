import React from "react";
import "./HomePage.scss";
import Header from "../../components/Header/Header";
import TeamStats from "../../components/TeamStats/TeamStats";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <Header />
      <div className="info-wrapper">
        <div className="card">
          <div className="card__header">
            <h1 className="card__title">CLASIFICACIÓN</h1>
            <div className="card__columns">
              <div className="card__columns-left">
                <p className="card__columns-left__pos">POS</p>
                <p>EQUIPO</p>
              </div>
              <div className="card__columns-right">
                <p>PTS</p>
                <p>PG</p>
                <p>PP</p>
              </div>
            </div>
          </div>
          <TeamStats />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
