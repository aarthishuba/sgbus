import React, { Component } from 'react';
import Busstops from './Busstops';
import environment from '../Environment';


class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '', list: [] };
    this.searchStop = this.searchStop.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  searchStop(event) {
    event.preventDefault();
    fetch(`${environment.url}/busstops/search?q=${this.state.userInput}`).then(res => res.json())
      .then(res => {
        this.setState({ list: res.response.data.busStops });
      });

  }


  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <form >
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="basic-addon2" onChange={this.handleChange} value={this.userInput} />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button" onClick={this.searchStop}>Search</button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {this.state.list.length > 0 && (<Busstops busStops={this.state.list} />)}
          </div>
        </div>
      </div>
    )
  }


}
export default SearchResult;