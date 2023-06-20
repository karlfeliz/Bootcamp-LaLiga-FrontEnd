import "./FreePlayers.scss";
import HomeBanner from "../../assets/Home_banner.png";

const FreePlayers = (): JSX.Element => {
  return (
    <div className="free-players__team">
      <h3 className="free-players__content-title">SIN EQUIPO</h3>
      <div className="free-players__table">
        <table>
          <div className="free-players__row-block">
            <tr className="free-players__row-block-tr">
              <th className="free-players__table-head-photo"></th>
              <th className="free-players__table-head-name">NOMBRE</th>
              <th className="free-players__table-head-lastname">APELLIDOS</th>
              <th className="free-players__table-head-email">EMAIL</th>
              <th className="free-players__table-head-role">ROL</th>
              <th className="free-players__table-head-out">AÑADIR AL EQUIPO</th>
            </tr>
          </div>
          <div className="free-players__row-block">
            <tr className="free-players__row-block-tr">
              <td className="free-players__table-row-photo"><img className="free-players__table-row-photo-img" src={HomeBanner} /></td>
              <td className="free-players__table-row-name">Karl Brandon</td>
              <td className="free-players__table-row-lastname">Féliz Ramos</td>
              <td className="free-players__table-row-email">karlbrandon@hotmail.com</td>
              <td className="free-players__table-row-role">Delegado</td>
              <td className="free-players__table-row-out"><button className="free-players__table-row-out--button">AÑADIR</button></td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
};

export default FreePlayers;
