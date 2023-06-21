import "./ProfileInfo.scss";
import HomeBanner from "../../assets/Home_banner.png";

const ProfileInfo = (): JSX.Element => {
  return (
    <div className="profile-info__profile-data">
      <img className="profile-info__img" src={HomeBanner} />
      <h3 className="profile-info__title">Karl Brandon Féliz Ramos</h3>
      <p className="profile-info__subtitle">DELEGADO</p>
      <button className="profile-info__button">Editar Perfil</button>
    </div>
  );
};

export default ProfileInfo;
