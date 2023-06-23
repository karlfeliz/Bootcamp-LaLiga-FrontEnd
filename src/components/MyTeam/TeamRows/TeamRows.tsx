import "./TeamRows.scss"
import useFetch from "../../../hooks/useFetch";
import { useContext } from "react";
import { AuthContext } from "../../../App";

const API_URL = `${process.env.REACT_APP_API_URL as string}/user`;

const deletePlayer = (player: any): any[] => {
  const authInfo = useContext(AuthContext);

  const prueba = useFetch(`${API_URL}/${player._id as string}`, "PUT", authInfo.userToken as string);
  if (prueba) {
    alert("algo");
  };
  return prueba;
};

const TeamRows = (props: any): JSX.Element => {
  return (
    <div className="my-team__row-block">
      <tr className="my-team__row-block-tr">
        <td className="my-team__table-row-photo"><img className="my-team__table-row-photo-img" src={props.player.logo} /></td>
        <td className="my-team__table-row-name">{props.player.firstName}</td>
        <td className="my-team__table-row-lastname">{props.player.lastName}</td>
        <td className="my-team__table-row-email">{props.player.email}</td>
        <td className="my-team__table-row-role">{props.player.rol}</td>
        <td className="my-team__table-row-out"><button className="my-team__table-row-out--button" onClick={() => deletePlayer(props.player._id)} type="button">ELIMINAR</button></td>
      </tr>
    </div>
  );
};

export default TeamRows;
