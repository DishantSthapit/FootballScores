import React from 'react';
import './home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './../NavBar/NavBar';
import {Carousel} from 'react-bootstrap';
import premierLeagueIcon from './../../media/premier-league.png';
import laLigaIcon from './../../media/laliga.png';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            premierLeague : [],
            spaninshMatchday: [],
            LeagueTable: []

        }
    }


    componentDidMount() {
        fetch(`http://api.football-data.org/v2/competitions/2021/matches?matchday=${this.props.premierLeagueMatchday}`, { //Premier League standings
            "method": "GET",
            "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data.matches)
            this.setState ({
                premierLeague: data.matches
            })
        })
        .catch(err => {
        console.log(err);
        }); 
        
        fetch(`http://api.football-data.org/v2/competitions/2015/matches?matchday=${this.props.spaninshMatchday}`, { 
            "method": "GET",
            "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data.matches)
            this.setState ({
                spaninshMatchday: data.matches
            })
        })
        .catch(err => {
        console.log(err);
        });     
        
        fetch(`http://api.football-data.org//v2/competitions/2021/standings`, { //Premier League standings
        "method": "GET",
        "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            this.setState ({
                LeagueTable : data.standings[0].table
            })
        })
        .catch(err => {
        console.log(err);
        });
        
    }

    render() {
        return (
            <div className="home-wrapper">
                <NavBar/>
                <div className="featured-heading">Featured Stories</div>
                <div className="featured-stories-wrapper">
                    <div className="premier-league-featured">
                       
                        <Carousel>
                            {this.state.premierLeague && this.state.premierLeague.map((item) => (
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={premierLeagueIcon}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <div className="scores">{item.awayTeam.name} -  {item.score.fullTime.awayTeam}</div>
                                    <div className="scores">{item.homeTeam.name} - {item.score.fullTime.homeTeam}</div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className="laliga-league-featured">

                        <Carousel>
                            {this.state.spaninshMatchday && this.state.spaninshMatchday.map((item) => (
                                <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={laLigaIcon}
                                    alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <div className="scores">{item.awayTeam.name} -  {item.score.fullTime.awayTeam}</div>
                                    <div className="scores">{item.homeTeam.name} - {item.score.fullTime.homeTeam}</div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))}
                        </Carousel>
   
                    </div>
                </div>
                <div className="premier-league-wrapper">
                    <div className="premier-league-heading">Premier league Teams</div>
                    <div className="premier-league-teams">
                        {this.state.LeagueTable.map((item,index) => (
                            <div className="team-image">
                                <img className="team-logo" src={item.team.crestUrl}></img> 
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        );
    }
}

export default Home;