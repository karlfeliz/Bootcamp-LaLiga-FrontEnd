import Header from "../../../components/Header/Header";
import MyTeam from "../../../components/MyTeam/MyTeam";
import "./Player.scss";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import LongMatch from "../../../components/LongMatch/LongMatch";

const PlayerPage = (): JSX.Element => {
  return (
    <div className="player-page">
      <Header />
      <div className="player-page__layout">
        <div className="player-page__profile-info">
          <ProfileInfo />
        </div>
        <div className="player-page__content">
          <MyTeam />
          <LongMatch />
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
