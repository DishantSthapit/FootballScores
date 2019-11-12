import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import League from './components/League/League';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      premierLeagueMatchday : null,
      spaninshMatchday : null,
  }
}


componentDidMount() {

  fetch(`http://api.football-data.org/v2/competitions/2021`, { //Premier League standings
      "method": "GET",
      "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
  })
  .then(res => res.json())
  .then((data) => {
      console.log(data)
      this.setState ({
        premierLeagueMatchday: data.currentSeason.currentMatchday
      })
  })
  .catch(err => {
  console.log(err);
  });

  fetch(`http://api.football-data.org/v2/competitions/2015`, { //spaninsh League standings
    "method": "GET",
    "headers": { 'X-Auth-Token': '0324e08a61de4fde97372bd6c003ab6b' }
  })
  .then(res => res.json())
  .then((data) => {
    console.log(data)
    this.setState ({
      spaninshMatchday: data.currentSeason.currentMatchday
    })
  })
  .catch(err => {
  console.log(err);
  });
}

  

render() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={()=> <Home premierLeagueMatchday={this.state.premierLeagueMatchday}  spaninshMatchday={this.state.spaninshMatchday}/>} />
        <Route exact path="/league/premierleague" component={()=> <League id="2021"/>} />
        <Route exact path="/league/spanish" component={()=> <League id="2014"/>} />
        <Route exact path="/league/league1" component={()=> <League id="2015"/>} />
        <Route exact path="/league/italia" component={()=> <League id="2019"/>} />
      </Router>
    </div>
  );
}
}

export default App;
