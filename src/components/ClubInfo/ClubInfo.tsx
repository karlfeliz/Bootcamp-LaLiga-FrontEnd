import "./ClubInfo.scss";
import HomeBanner from "../../assets/Home_banner.png";

const ClubInfo = (): JSX.Element => {
  return (
    <div className="club-info__club-data">
      <p className="club-info__subtitle">DELEGADO DEL:</p>
      <img className="club-info__img" src={HomeBanner} />
      <h3 className="club-info__title">Karl Football Club</h3>
      <p className="club-info__subtitle">KFC</p>
      <button className="club-info__button">Editar Equipo</button>
    </div>
  );
};

export default ClubInfo;
