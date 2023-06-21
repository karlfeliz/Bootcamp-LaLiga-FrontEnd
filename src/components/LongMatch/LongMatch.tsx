import "./LongMatch.scss";
import Logo from "../../assets/Logo.png";

const LongMatch = (): JSX.Element => {
  return (
    <div className="long-match__team">
      <h3 className="long-match__content-title">PARTIDOS</h3>
      <div className="long-match__table">
        <table>
          <div className="long-match__row-block">
            <tr className="long-match__row-block-tr">
              <td className="long-match__table-row-match-day">Jornada 1</td>
              <td className="long-match__table-row-date">01/12/23</td>
              <td className="long-match__table-row-short--1">KFC</td>
              <td className="long-match__table-row-logo--1"><img className="long-match__logo--1" src={Logo}/></td>
              <td className="long-match__table-row-result"><p className="long-match__result">3 - 0</p></td>
              <td className="long-match__table-row-logo--2"><img className="long-match__logo--2" src={Logo}/></td>
              <td className="long-match__table-row-short--2">CBF</td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
};

export default LongMatch;
