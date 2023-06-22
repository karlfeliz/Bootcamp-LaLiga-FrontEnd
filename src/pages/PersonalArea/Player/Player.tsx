import Header from "../../../components/Header/Header";
import MyTeam from "../../../components/MyTeam/MyTeam";
import "./Player.scss";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import LongMatch from "../../../components/LongMatch/LongMatch";
// import useFetch from "../../../hooks/useFetch";

// const API_URL = `${process.env.REACT_APP_API_URL as string}/user`;

const PlayerPage = (): JSX.Element => {
  return (
    <div className="player-page">
      <Header />
      <div className="player-page__layout">
        <div className="player-page__profile-info">
          <ProfileInfo />
        </div>
        <div className="player-page__content">
          {/* {console.log(playersData)} */}
          {<MyTeam />}
          <LongMatch />
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
