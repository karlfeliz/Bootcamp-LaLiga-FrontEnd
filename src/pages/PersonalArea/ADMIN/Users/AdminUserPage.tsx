import "./AdminUserPage.scss";
import Avatar_user1 from "../../../../assets/Avatar_user1.jpg";
import useFetch from "../../../../hooks/useFetch";

const AdminUserPage = (): JSX.Element => {
  const prueba = useFetch(`${process.env.REACT_APP_API_URL as string}/user`);
  console.log(prueba);

  return (
    <div className="admin-user">
      <h3 className="admin-user__content-title">MI EQUIPO</h3>
      <div className="admin-user__table">
        <table>
          <div className="admin-user__row-block">
            <tr className="admin-user__row-block-tr">
              <th className="admin-user__table-head-photo"></th>
              <th className="admin-user__table-head-name">NOMBRE</th>
              <th className="admin-user__table-head-lastname">APELLIDOS</th>
              <th className="admin-user__table-head-email">EMAIL</th>
              <th className="admin-user__table-head-role">ROL</th>
            </tr>
          </div>
          <div className="admin-user__row-block">
            <tr className="admin-user__row-block-tr">
              <td className="admin-user__table-row-photo">
                <img className="admin-user__table-row-photo-img" src={Avatar_user1} />
              </td>
              <td className="admin-user__table-row-name">Domingo</td>
              <td className="admin-user__table-row-lastname">Diaz Festivo</td>
              <td className="admin-user__table-row-email">ddiaz@gmail.com</td>
              <td className="admin-user__table-row-role">Usuario</td>
              <td className="admin-user__table-row-out">
                <button className="admin-user__table-row-out--button-edit">EDITAR</button>
                <button className="admin-user__table-row-out--button-delete">ELIMINAR</button>
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
};

export default AdminUserPage;
