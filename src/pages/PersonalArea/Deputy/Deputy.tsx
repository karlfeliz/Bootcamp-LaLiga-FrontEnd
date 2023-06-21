import Header from "../../../components/Header/Header";
import MyTeam from "../../../components/MyTeam/MyTeam";
import "./Deputy.scss";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import ClubInfo from "../../../components/ClubInfo/ClubInfo";
import FreePlayers from "../../../components/FreePlayers/FreePlayers";
import LongMatch from "../../../components/LongMatch/LongMatch";

const DeputyPage = (): JSX.Element => {
  return (
    <div className="deputy-page">
      <Header />
      <div className="deputy-page__layout">
        <div className="deputy-page__profile-info">
          <ProfileInfo />
          <ClubInfo />
        </div>
        <div className="deputy-page__content">
          <MyTeam />
          <button className="deputy-page__add">AÑADIR JUGADORES</button>
          <FreePlayers />
          <LongMatch />
        </div>
      </div>
    </div>
  );
};

export default DeputyPage;
