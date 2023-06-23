import Header from "../../../components/Header/Header";
import MyTeam from "../../../components/MyTeam/MyTeam";
import "./Deputy.scss";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import ClubInfo from "../../../components/ClubInfo/ClubInfo";
import FreePlayers from "../../../components/FreePlayers/FreePlayers";
import LongMatch from "../../../components/LongMatch/LongMatch";
import useFetch from "../../../hooks/useFetch";
import { useContext } from "react";
import { AuthContext } from "../../../App";

const API_URL_MATCH = `${process.env.REACT_APP_API_URL as string}/match`;

const DeputyPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo.userToken);
  const [matches] = useFetch(API_URL_MATCH, "GET", authInfo.userToken as string);
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
          <LongMatch matches={matches?.data}/>
        </div>
      </div>
    </div>
  );
};

export default DeputyPage;
