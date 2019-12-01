import React from 'react';
import './home.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './../NavBar/NavBar';
import {Carousel} from 'react-bootstrap';
import {BANNER_ITEMS} from './../../data/data';
import BottomWrapper from '../BottomWrapper/BottomWrapper';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            premierLeague : [],
            spaninshMatchday: [],
            LeagueTable: [],
            loading: true,

        }
    }


    componentDidMount() {

        setTimeout(() => {
            this.setState({ loading: false });
          }, 1000);


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
        const {loading} = this.state;

        const banneItems = BANNER_ITEMS.map(item => (
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={item.img}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        {item.label}<br/>
                        {item.actions}

                    </Carousel.Caption>
                </Carousel.Item>
            ));
        return (
            <div className="home-wrapper">
                {!loading ? (
                    <>
                        <NavBar/>
                        <div className="carousel-wrapper">
                            <Carousel>
                                {banneItems}
                            </Carousel>
                        </div>
                        <BottomWrapper premierLeague={this.state.premierLeague} laliga={this.state.spaninshMatchday} />
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
                    </>
                    
                ) : <div class="loader">Loading...</div>
                }
                

            </div>

        );
    }
}

export default Home;