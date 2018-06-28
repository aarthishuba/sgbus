import React, { Component } from 'react';
import SearchResult from './SearchResult';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BusArrival from './BusArrival';


class Home extends Component {
  render() {
      return (
        <div className="row">
          <div className="col-md-6">
            <Router>
              <div>
                <Route exact path="/" component={SearchResult} />
                <Route exact path="/busarrival/:stopcode" component={BusArrival} />
              </div>
            </Router>

          </div>
        </div>
      );
  }
}
export default Home;
