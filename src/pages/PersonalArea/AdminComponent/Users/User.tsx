import "./User.scss";
import Avatar_user1 from "../../../../assets/Avatar_user1.jpg";
import useFetch from "../../../../hooks/useFetch";

const AdminUserPage = (): JSX.Element => {
  const prueba = useFetch(`${process.env.REACT_APP_API_URL as string}/user`, "GET");
  console.log(prueba);

  return (
    <div className="admin-user">
      <h3 className="admin-user__content-title">USUARIOS</h3>
      <table className="admin-user__table">
        <div className="admin-user__row-block">
          <tr className="admin-user__row-block-tr">
            <th className="admin-user__table-head">NOMBRE</th>
            <th className="admin-user__table-head">APELLIDOS</th>
            <th className="admin-user__table-head">EMAIL</th>
            <th className="admin-user__table-head">ROL</th>
          </tr>
        </div>
        <div className="admin-user__row-block">
          <tr className="admin-user__row-block-tr">
            <td className="admin-user__table-row-photo">
              <img className="admin-user__table-row-photo-img" src={Avatar_user1} />
            </td>
            <td className="admin-user__table-row">Borja</td>
            <td className="admin-user__table-row">Mariano Diaz</td>
            <td className="admin-user__table-row">bmdiaz@gmail.com</td>
            <td className="admin-user__table-row">Usuario</td>
            <td className="admin-user__table-row">
              <button className="admin-user__table-row-out--button-edit">EDITAR</button>
              <button className="admin-user__table-row-out--button-delete">ELIMINAR</button>
            </td>
          </tr>
        </div>
      </table>
    </div>
  );
};

export default AdminUserPage;
