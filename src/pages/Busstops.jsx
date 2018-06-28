import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function ListItem(props) {
    const busStop = props.busStop;
    // Correct! There is no need to specify the key here:
    return (
        <Link to={'/busarrival/' + busStop.busStopCode}
            className="list-group-item list-group-item-action flex-column align-items-start" key={busStop.busStopCode}>
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{busStop.description}, {busStop.roadName} </h5>                
            </div>
            <p class="mb-1">{busStop.busStopCode}</p>
           

        </Link>
    );

}
function BusstopList(props) {
    const busStops = props.busStops;
    const listItems = busStops.map((busStop) =>
        // Correct! Key should be specified inside the array.
        <ListItem key={busStop.busStopCode} busStop={busStop} />
    );
    return (
        <div className="list-group">
            {listItems}
        </div>
    );
}

class Busstops extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <BusstopList busStops={this.props.busStops} />
            </div>
        );
    }
}
export default Busstops;