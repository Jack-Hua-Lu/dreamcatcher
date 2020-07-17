import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { electionStore } from './stores/electionStore';
import { votingSystemStore } from './stores/votingSystemStore';
import { VoterRegistrationContainer } from './containers/VoterRegistrationContainer';
import { VoterListContainer } from './containers/VoterListContainer';
import { ElectionToolContainer } from './containers/ElectionContainer';

import { Layout } from './components/Layout';
import { BallotToolContainer } from './containers/BallotToolContainer';

import logo from './tm-dreamCatcher.jpg';

ReactDOM.render(
  <Router>
    <Layout>
      <header id="page-header">
        <h1>Dream Voting System</h1>
      </header>
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/voter-registration">Voter Registration</Link></li>
          <li><Link to="/voter-list">Voter List</Link></li>
          <li><Link to="/election-tool">Election Tool</Link></li>
          <li><Link to="/ballot-tool">Ballot Tool</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact>
            <img src={logo} alt="teamcatcher" />
          </Route>
          <Route path="/election-tool">
            <Provider store={electionStore}>
              <ElectionToolContainer />
            </Provider>
          </Route>
          <Route path="/voter-list">
            <Provider store={votingSystemStore}>
              <VoterListContainer />
            </Provider>
          </Route>
          <Route path="/voter-Registration">
            <Provider store={votingSystemStore}>
              <VoterRegistrationContainer />
            </Provider>
          </Route>
          <Route path="/ballot-tool">
            <Provider store={votingSystemStore}>
              <BallotToolContainer />
            </Provider>
          </Route>
        </Switch>
      </main>
      <footer id="page-footer">
        <small>Dream without Fear, Code without Limits</small>
      </footer>
    </Layout>
  </Router>,
  document.querySelector('#root'),
);
