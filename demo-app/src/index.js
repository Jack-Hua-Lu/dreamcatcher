import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { colorToolStore } from './stores/colorToolStore';
import { voterToolStore } from './stores/voterToolStore';
import { calcToolStore } from './stores/calcToolStore';

import { ColorToolContainer } from './containers/ColorToolContainer';
import { VoterToolContainer } from './containers/VoterToolContainer';
import { CalcToolContainer } from './containers/CalcToolContainer';

import { Layout } from './components/Layout';

ReactDOM.render(
  <Router>
    <Layout>
      <header id="page-header">
        <h1>App Tools</h1>
      </header>
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/color-tool">Color Tool</Link></li>
          <li><Link to="/voter-tool">Voter Tool</Link></li>
          <li><Link to="/calc-tool">Calc Tool</Link></li>
        </ul>
      </nav>
      <main id="content">
        <Switch>
          <Route path="/" exact>
            <div>Home</div>
          </Route>
          <Route path="/color-tool">
            <Provider store={colorToolStore}>
              <ColorToolContainer />
            </Provider>
          </Route>
          <Route path="/voter-tool">
            <Provider store={voterToolStore}>
              <VoterToolContainer />
            </Provider>
          </Route>
          <Route path="/calc-tool">
            <Provider store={calcToolStore}>
              <CalcToolContainer />
            </Provider>
          </Route>
        </Switch>
      </main>
      <aside id="sidebar">
        Sidebar
      </aside>
      <footer id="page-footer">
        <small>A Cool Company, Inc.</small>
      </footer>
    </Layout>
  </Router>,
  document.querySelector('#root'),
);
