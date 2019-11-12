import React from 'react';
import './League.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap';

class League extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            LeagueId: '',
            LeagueName: '',
            LeagueTable: []

        }
    }

    //2014 - Spain
    //2015 - France
    //2021 - England
    //2019 - Italy



    componentDidMount() {
        fetch(`http://api.football-data.org//v2/competitions/${this.props.id}/standings`, { //Premier League standings
            "method": "GET",
            "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data)
            this.setState ({
                LeagueId : data.competition.id,
                LeagueName : data.competition.name,
                LeagueTable : data.standings[0].table
            })
        })
        .catch(err => {
        console.log(err);
        });
    }



    render() {
        const {LeagueId, LeagueName,LeagueTable} = this.state;
        return (

            <div className="league-wrapper">
                <div className="heading">{LeagueName}</div>


                <Table size="sm" striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>Standings</th>
                        <th>Club Photo</th>
                        <th>Name</th>
                        <th>Points</th>
                        <th>Win</th>
                        <th>Draw</th>
                        <th>Lost</th>
                        </tr>
                    </thead>
                    <tbody>
                    {LeagueTable.map((item,index) => (
                        <tr>
                            <td>{item.position}</td>
                            <td><img className="team-logo" src={item.team.crestUrl}></img></td>
                            <td>{item.team.name}</td>
                            <td>{item.points}</td>
                            <td>{item.won}</td>
                            <td>{item.draw}</td>
                            <td>{item.lost}</td>
                        </tr>        
                    ))}
                    </tbody>
                </Table>
            </div>

        );
    }
}

export default League;