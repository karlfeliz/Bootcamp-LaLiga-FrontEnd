import "./LongMatch.scss";
import MatchRows from "./MatchRows/MatchRows";
const LongMatch = (props: any): JSX.Element => {
  return (
    <div className="long-match__team">
      <h3 className="long-match__content-title">PARTIDOS</h3>
      <div className="long-match__table">
        <table>
          {props.matches?.map((match: any) => {
            return <MatchRows key={match._id} match={match}></MatchRows>
          })}
        </table>
      </div>
    </div>
  );
};

export default LongMatch;
