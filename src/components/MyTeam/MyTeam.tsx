import "./MyTeam.scss";
import HomeBanner from "../../assets/Home_banner.png";

const MyTeam = (): JSX.Element => {
  return (
    <div className="my-team__team">
      <h3 className="my-team__content-title">MI EQUIPO</h3>
      <div className="my-team__table">
        <table>
          <div className="my-team__row-block">
            <tr className="my-team__row-block-tr">
              <th className="my-team__table-head-photo"></th>
              <th className="my-team__table-head-name">NOMBRE</th>
              <th className="my-team__table-head-lastname">APELLIDOS</th>
              <th className="my-team__table-head-email">EMAIL</th>
              <th className="my-team__table-head-role">ROL</th>
              <th className="my-team__table-head-out">SACAR DEL EQUIPO</th>
            </tr>
          </div>
          <div className="my-team__row-block">
            <tr className="my-team__row-block-tr">
              <td className="my-team__table-row-photo"><img className="my-team__table-row-photo-img" src={HomeBanner} /></td>
              <td className="my-team__table-row-name">Karl Brandon</td>
              <td className="my-team__table-row-lastname">Féliz Ramos</td>
              <td className="my-team__table-row-email">karlbrandon@hotmail.com</td>
              <td className="my-team__table-row-role">Delegado</td>
              <td className="my-team__table-row-out"><button className="my-team__table-row-out--button">ELIMINAR</button></td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
