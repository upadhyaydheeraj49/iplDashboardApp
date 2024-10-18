// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamMatchesData: {latestMatchDetails: {}, recentMatches: []},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {id} = match.params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.convertToCamelCase(data.latest_match_details),
      recentMatches: data.recent_matches.map(matchDetails =>
        this.convertToCamelCase(matchDetails),
      ),
    }
    console.log(updatedData)
    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  convertToCamelCase = match => ({
    umpires: match.umpires,
    result: match.result,
    manOfTheMatch: match.man_of_the_match,
    id: match.id,
    date: match.date,
    venue: match.venue,
    competingTeam: match.competing_team,
    competingTeamLogo: match.competing_team_logo,
    firstInnings: match.first_innings,
    secondInnings: match.second_innings,
    matchStatus: match.match_status,
  })

  render() {
    const {teamMatchesData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesData
    return (
      <div className="team-matches-container">
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader type="Oval" color="#fff" width={50} height={50} />
          </div>
        ) : (
          <>
            <img
              src={teamBannerUrl}
              className="team-banner-img"
              alt="team banner"
            />
            <h4 className="latest-matches-heading">Latest Matches</h4>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="recent-match-container">
              {recentMatches.map(recentMatch => (
                <MatchCard key={recentMatch.id} recentMatch={recentMatch} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default TeamMatches
