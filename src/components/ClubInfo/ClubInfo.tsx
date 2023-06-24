import "./ClubInfo.scss";

const ClubInfo = (props: any): JSX.Element => {
  console.log("props", props);
  return (
    <div className="club-info__club-data">
      <p className="club-info__subtitle">DELEGADO DEL:</p>
      <img className="club-info__img" src={props?.club[0]?.logo} />
      <h3 className="club-info__title">{props?.club[0]?.name}</h3>
      <p className="club-info__subtitle">{props?.club[0]?.alias}</p>
      <button className="club-info__button">Editar Equipo</button>
    </div>
  );
};

export default ClubInfo;
