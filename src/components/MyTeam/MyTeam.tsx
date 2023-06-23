import "./MyTeam.scss";
// import TeamRows from "./TeamRows/TeamRows";
// import useFetch from "../../hooks/useFetch";

// const API_URL_TEAM = `${process.env.REACT_APP_API_URL as string}/user/team`;

const MyTeam = (): JSX.Element => {
  // const [playersData] = useFetch(API_URL_TEAM);

  // const deletePlayer = (value: string) => {
  //   const deletePlayer = {
  //     ...props.myTeam,
  //     players: [...props.myTeam.players]
  //   }
  //   deletePlayer.players = deletePlayer.players.filter(player => player.firstName !== value.firstName)
  //   props.onClickRemovePlayers(deletePlayer)
  // }
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
          {/* {props.myTeam.map((player) =>{
            <TeamRows onClick={() => deletePlayer(player)}></TeamRows>
          })} */}
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
