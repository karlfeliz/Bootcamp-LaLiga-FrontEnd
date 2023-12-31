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
const API_URL_USER = `${process.env.REACT_APP_API_URL as string}/user`;
const API_URL_CLUB = `${process.env.REACT_APP_API_URL as string}/team`;

const DeputyPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  console.log(authInfo.userToken);
  const [matches] = useFetch(API_URL_MATCH, "GET", authInfo.userToken as string);
  const [players] = useFetch(API_URL_USER, "GET", authInfo.userToken as string);
  const [player] = useFetch(`${API_URL_USER}/${authInfo.userInfo?._id as string}`, "GET", authInfo.userToken as string);

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const [club] = useFetch(`${API_URL_CLUB}/${authInfo?.userInfo?.team}`, "GET", authInfo.userToken as string);
  console.log("user info", authInfo?.userInfo?.team);
  console.log("user token", authInfo.userToken);
  console.log("user club", club);
  // console.log("user player", player[0]);

  return (
    <div className="deputy-page">
      <Header />
      <div className="deputy-page__layout">
        <div className="deputy-page__profile-info">
          <ProfileInfo player={player} />
          <ClubInfo club={club} />
        </div>
        <div className="deputy-page__content">
          <MyTeam players={players?.data?.teamUsers} />
          <button className="deputy-page__add">AÑADIR JUGADORES</button>
          <LongMatch matches={matches?.data}/>
          <FreePlayers players={players?.data?.freeUsers}/>
        </div>
      </div>
    </div>
  );
};

export default DeputyPage;
