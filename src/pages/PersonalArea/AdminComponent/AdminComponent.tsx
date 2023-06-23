import Header from "../../../components/Header/Header";
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo";
import "./AdminComponent.scss";
import AdminUserPage from "./Users/AdminUserPage";

const AdminComponent = (): JSX.Element => {
  return (
    <div className="admin-page">
      <Header />
      <div className="player-page__layout">
        <div className="player-page__profile-info">
          <ProfileInfo />
        </div>
        <div className="player-page__content">
          <div className="admin-page__nav">
            <button className="admin-page__nav--btn">USUARIOS</button>
            <button className="admin-page__nav--btn">EQUIPOS</button>
            <button className="admin-page__nav--btn">LIGA</button>
          </div>
          <AdminUserPage></AdminUserPage>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
