import "./Teams.scss";
import Logo from "../../../../assets/Logo.png";
const TeamsComponent = (): JSX.Element => {
  return (
    <div className="teams-page">
      <h3 className="teams-page__title">EQUIPOS</h3>
      <table className="teams-page__table">
        <div className="teams-page__row-block">
          <tr className="teams-page__row-block-tr">
            <th className="teams-page__table-head">NOMBRE</th>
            <th className="teams-page__table-head">ALIAS</th>
            <th className="teams-page__table-head">DELEGADO</th>
          </tr>
        </div>
        <div className="teams-page__row-block">
          <tr className="teams-page__row-block-tr">
            <td className="teams-page__table-row-photo">
              <img className="teams-page__table-row-photo-img" src={Logo} />
            </td>
            <td className="teams-page__table-row">The Valley Club</td>
            <td className="teams-page__table-row">TVC</td>
            <td className="teams-page__table-row">Jorge Carlos Valle</td>
            <td>
              <button className="teams-page__table-row-out--button-jugadores">JUGADORES</button>
              <button className="teams-page__table-row-out--button-edit">EDITAR</button>
              <button className="teams-page__table-row-out--button-delete">ELIMINAR</button>
            </td>
          </tr>
        </div>
      </table>
    </div>
  );
};

export default TeamsComponent;
