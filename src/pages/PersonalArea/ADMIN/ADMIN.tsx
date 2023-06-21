import Header from "../../../components/Header/Header";
import LongMatch from "../../../components/LongMatch/LongMatch";
import MyTeam from "../../../components/MyTeam/MyTeam";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";

const AdminPage = (): JSX.Element => {
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

export default AdminPage;
