import "./FreePlayersRow.scss"
// import HomeBanner from "../../assets/Home_banner.png";

// import useFetch from "../../hooks/useFetch";

const FreePlayersRow = (props: any): JSX.Element => {
  return (
    <div className="my-team__row-block">
      <tr className="my-team__row-block-tr">
        <td className="my-team__table-row-photo"><img className="my-team__table-row-photo-img" src={props.player.logo} /></td>
        <td className="my-team__table-row-name">{props.player.firstName}</td>
        <td className="my-team__table-row-lastname">{props.player.lastName}</td>
        <td className="my-team__table-row-email">{props.player.email}</td>
        <td className="my-team__table-row-role">{props.player.rol}</td>
        <td className="my-team__table-row-out"><button className="my-team__table-row-out--button" onClick={() => props.onClick()} type="button">AÑADIR</button></td>
      </tr>
    </div>
  );
};

export default FreePlayersRow;
