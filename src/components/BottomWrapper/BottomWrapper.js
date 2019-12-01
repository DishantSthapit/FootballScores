import React from 'react';
import './BottomWrapper.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import premierLeagueIcon from './../../media/premier-league.png';
import laLigaIcon from './../../media/laliga.png';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
class BottomWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }


    render() {
        return (
            <div className="bottom-wrapper">
                <div className="premier-league-results">
                    <div className="heading-wrapper">Premier League Results</div>
                    <div className="content-wrapper">
                    {this.props.premierLeague && this.props.premierLeague.map((item) => (
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <img
                                className="image"
                                src={premierLeagueIcon}
                                alt="premier-league"
                                />
                            </div>
                            <div className="scores-wrapper">
                                <div className="scores">{item.awayTeam.name} -  {item.score.fullTime.awayTeam}</div>
                                <div className="scores">{item.homeTeam.name} - {item.score.fullTime.homeTeam}</div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="laliga-results">
                    <div className="heading-wrapper">LaLiga Result</div>
                    <div className="content-wrapper">
                        {this.props.laliga && this.props.laliga.map((item) => (
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <img
                                className="image"
                                src={laLigaIcon}
                                alt="laliga-league"
                                />
                            </div>
                            <div className="scores-wrapper">
                                <div className="scores">{item.awayTeam.name} -  {item.score.fullTime.awayTeam}</div>
                                <div className="scores">{item.homeTeam.name} - {item.score.fullTime.homeTeam}</div>
                            </div>
                        </div>
                        ))}

                    </div>
                </div>
                <div className="twitter-content">
                    <div className="heading-wrapper">Tweets</div>
                    <div className="content-wrapper">
                    <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="premierleague"
                    options={{height: 400}}
                    />
                    </div>

                </div>


            </div>
        );
    }
}

export default BottomWrapper;