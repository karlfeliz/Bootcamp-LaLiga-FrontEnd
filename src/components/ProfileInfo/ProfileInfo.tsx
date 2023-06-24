import "./ProfileInfo.scss";

const ProfileInfo = (props: any): JSX.Element => {
  return (
    <div className="profile-info__profile-data">
      <img className="profile-info__img" src={props.player[0].logo} />
      <h3 className="profile-info__title">{props.player[0].firstName} {props.player[0].lastName}</h3>
      <p className="profile-info__subtitle">{props.player[0].rol}</p>
      <button className="profile-info__button">Editar Perfil</button>
    </div>
  );
};

export default ProfileInfo;
