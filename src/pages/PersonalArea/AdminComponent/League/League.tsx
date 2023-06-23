import "./League.scss";

const LeagueComponent = (): JSX.Element => {
  return (
    <div className="league-page">
      <h3 className="league-page__content-title">LIGA</h3>
      <div className="league-page__btn-box">
        <button className="league-page__btn-box--text">GENERAR LIGA</button>
      </div>
    </div>
  );
};

export default LeagueComponent;
