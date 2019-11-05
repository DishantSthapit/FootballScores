import React from 'react';
import './Header.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

//https://www.football-data.org/documentation/quickstart
//https://www.football-data.org/coverage
//2081 -Ligue 1
//2088-Germany
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            premierLeaguelist:[]
        }
    }

    componentDidMount() {
        fetch("http://api.football-data.org/v2/competitions/2018", { //Premier League standings
            "method": "GET",
            "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data); 
            this.setState ({
                premierLeaguelist : data
            })
        })
        .catch(err => {
        console.log(err);
        });

        fetch("http://api.football-data.org/v2/competitions/2021/scorers", { //Premier League scorers
        "method": "GET",
        "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data); 
            this.setState ({
                premierLeaguelist : data
            })
        })
        .catch(err => {
        console.log(err);
        });

        fetch("http://api.football-data.org/v2/matches?competitions=2021", { //Premier League scorers
        "method": "GET",
        "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
        })
        .then(res => res.json())
        .then((data) => {
            console.log(data); 
            this.setState ({
                premierLeaguelist : data
            })
        })
        .catch(err => {
        console.log(err);
        });
    }


    render() {
        return (
            <div></div>
        );
    }
}

export default Header;