// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamsName()
  }

  getTeamsName = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const teamList = await response.json()
    const updatedTeamList = teamList.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageUrl: team.team_image_url,
    }))
    this.setState({
      teamsList: updatedTeamList,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    return (
      <div className="home-container">
        <div className="ipl-logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="ipl-logo-heading">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#fff" width={50} height={50} />
          </div>
        ) : (
          <ul className="teams-container">
            {teamsList.map(team => (
              <TeamCard key={team.id} team={team} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
