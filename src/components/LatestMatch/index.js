// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    secondInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    umpires,
    venue,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <div className="latest-match-c1">
        <div>
          <p className="latest-match-team-name">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="latest-match-venue">{venue}</p>
          <p className="latest-match-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="competing-team-logo-sm"
          alt={`latest match {competingTeam}`}
        />
      </div>
      <img
        src={competingTeamLogo}
        className="competing-team-logo-lg"
        alt={`latest match {competingTeam}`}
      />
      <div className="latest-match-c2">
        <p className="title">First Innings</p>
        <p className="title-name">{firstInnings}</p>
        <p className="title">Second Innings</p>
        <p className="title-name">{secondInnings}</p>
        <p className="title">Man Of The Match</p>
        <p className="title-name">{manOfTheMatch}</p>
        <p className="title">Umpires</p>
        <p className="title-name">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
