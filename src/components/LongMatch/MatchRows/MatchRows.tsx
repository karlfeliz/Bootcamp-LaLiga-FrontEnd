import "./MatchRows.scss"

const MatchRows = (props: any): JSX.Element => {
  return (
    <div className="long-match__row-block">
      <tr className="long-match__row-block-tr">
        <td className="long-match__table-row-match-day">Jornada {props.match.round}</td>
        <td className="long-match__table-row-date">{props.match.matchDate}</td>
        <td className="long-match__table-row-short--1">{props.match.localTeam.alias}</td>
        <td className="long-match__table-row-logo--1">
          <img className="long-match__logo--1" src={props.match.localTeam.logo} />
        </td>
        <td className="long-match__table-row-result">
          <p className="long-match__result">{props.match.score}</p>
        </td>
        <td className="long-match__table-row-logo--2">
          <img className="long-match__logo--2" src={props.match.awayTeam.logo} />
        </td>
        <td className="long-match__table-row-short--2">{props.match.awayTeam.alias}</td>
      </tr>
    </div>
  );
};

export default MatchRows;
