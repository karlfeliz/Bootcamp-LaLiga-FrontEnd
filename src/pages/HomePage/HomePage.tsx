import "./HomePage.scss";
import Header from "../../components/Header/Header";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <Header />
      <div className="info-wrapper">
        <div className="card">
          <div className="card__header">
            <h1 className="card__title">CLASIFICACIÓN</h1>
            <div className="card__columns">
              <div className="card__columns-headers">
                <p>POS</p>
                <p>EQUIPO</p>
              </div>
              <div className="card__columns-headers">
                <p>PTS</p>
                <p>PG</p>
                <p>PP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
