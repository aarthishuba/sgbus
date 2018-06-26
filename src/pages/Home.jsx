import React, { Component } from 'react';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: '' };

    this.searchStop = this.searchStop.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  searchStop(event) {
    event.preventDefault();
    fetch(`/arrivals/${this.state.userInput}`, {
      method: "GET",
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'        
      }
    }).then(res => res.json())
    .then(res => console.log(res));
  }

  render() {
    return (
      <div>
        <form >
          <div className="form-group">
            <label htmlFor="userInput">Enter the busstop</label>
            <input type="userInput" className="form-control" id="userInput" value={this.state.userInput} onChange={this.handleChange} />
            <button type="submit" className="btn btn-primary" onClick={this.searchStop}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
