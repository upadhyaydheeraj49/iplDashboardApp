// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {team} = props
  const {id, name, teamImageUrl} = team
  return (
    <Link className="team-card-link" to={`/team-matches/${id}`}>
      <li className="team-card">
        <img src={teamImageUrl} alt={`${name}`} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
