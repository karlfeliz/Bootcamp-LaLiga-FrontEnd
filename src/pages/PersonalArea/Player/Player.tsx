import Header from "../../../components/Header/Header";
import MyTeam from "../../../components/MyTeam/MyTeam";
import "./Player.scss";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import LongMatch from "../../../components/LongMatch/LongMatch";
import { useContext } from "react";
import { AuthContext } from "../../../App";
import useFetch from "../../../hooks/useFetch";
// import useFetch from "../../../hooks/useFetch";

const API_URL = `${process.env.REACT_APP_API_URL as string}/user`;
const API_URL_MATCH = `${process.env.REACT_APP_API_URL as string}/match`;

const PlayerPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo.userToken);
  const [players] = useFetch(API_URL, "GET", authInfo.userToken as string);
  const [matches] = useFetch(API_URL_MATCH, "GET", authInfo.userToken as string);
  return (
    <div className="player-page">
      <Header />
      <div className="player-page__layout">
        <div className="player-page__profile-info">
          <ProfileInfo />
        </div>
        <div className="player-page__content">
          {/* {console.log(playersData)} */}
          <MyTeam players={players?.data?.teamUsers} />
          <LongMatch matches={matches?.data}/>
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
