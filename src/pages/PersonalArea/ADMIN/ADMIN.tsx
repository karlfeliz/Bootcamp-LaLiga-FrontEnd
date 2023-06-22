import Header from "../../../components/Header/Header";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import AdminUserPage from "./Users/AdminUserPage";

const AdminPage = (): JSX.Element => {
  return (
    <div className="admin-page">
      <Header />
      <div className="player-page__layout">
        <div className="player-page__profile-info">
          <ProfileInfo />
        </div>
        <div className="player-page__content">
          <div className="admin-page__nav">
            <button>USUARIOS</button>
            <button>EQUIPOS</button>
            <button>LIGA</button>
          </div>
          <AdminUserPage />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
