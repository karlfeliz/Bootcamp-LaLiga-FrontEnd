import Header from "../../../components/Header/Header";
import HomeBanner from "../../../assets/Home_banner.png";
import "./Deputy.scss";

const DeputyPage = (): JSX.Element => {
  return (
    <div className="deputy-page">
      <Header />
      <div className="deputy-page__layout">
        <div className="deputy-page__profile-info">
          <div className="deputy-page__profile-data">
            <img className="deputy-page__img" src={HomeBanner} />
            <h3 className="deputy-page__title">Karl Brandon Féliz Ramos</h3>
            <p className="deputy-page__subtitle">DELEGADO</p>
            <button className="deputy-page__button">Editar Perfil</button>
          </div>
          <div className="deputy-page__club-data">
            <p className="deputy-page__subtitle">DELEGADO DEL:</p>
            <img className="deputy-page__img" src={HomeBanner} />
            <h3 className="deputy-page__title">Karl Football Club</h3>
            <p className="deputy-page__subtitle">KFC</p>
            <button className="deputy-page__button">Editar Equipo</button>
          </div>
        </div>
        <div className="deputy-page__content">
          <div className="deputy-page__team">
            <h3 className="deputy-page__content-title">MI EQUIPO</h3>
            <div className="deputy-page__table">
              <table>
                <div className="deputy-page__row-block">
                  <tr className="deputy-page__row-block-tr">
                    <th className="deputy-page__table-head-photo"></th>
                    <th className="deputy-page__table-head-name">NOMBRE</th>
                    <th className="deputy-page__table-head-lastname">APELLIDOS</th>
                    <th className="deputy-page__table-head-email">EMAIL</th>
                    <th className="deputy-page__table-head-role">ROL</th>
                    <th className="deputy-page__table-head-out">SACAR DEL EQUIPO</th>
                  </tr>
                </div>
                <div className="deputy-page__row-block">
                  <tr className="deputy-page__row-block-tr">
                    <td className="deputy-page__table-row-photo"><img className="deputy-page__table-row-photo-img" src={HomeBanner} /></td>
                    <td className="deputy-page__table-row-name">Karl Brandon</td>
                    <td className="deputy-page__table-row-lastname">Féliz Ramos</td>
                    <td className="deputy-page__table-row-email">karlbrandon@hotmail.com</td>
                    <td className="deputy-page__table-row-role">Delegado</td>
                    <td className="deputy-page__table-row-out"><button className="deputy-page__table-row-out--button">ELIMINAR</button></td>
                  </tr>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeputyPage;
