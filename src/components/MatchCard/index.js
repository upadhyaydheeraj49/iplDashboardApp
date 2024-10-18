// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {id, competingTeam, competingTeamLogo, result, matchStatus} =
    recentMatch
  const status = matchStatus === 'Won' ? 'won' : 'lost'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="match-card-img"
        alt={`competing team {competingTeam}`}
      />
      <p className="match-card-team-name">{competingTeam}</p>
      <p className="match-card-team-result">{result}</p>
      <p className={status}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
