import React, { Component } from 'react';
import environment from '../Environment';
function BusListItem(props) {
    const bus = props.bus;
    // Correct! There is no need to specify the key here:
    return (
        <li className="list-group-item d-flex justify-content-between" key={bus.serviceNo}>
            <div>{bus.serviceNo}</div>
            <div>
                {calculateTime(bus.nextBus.estimatedArrival)}  <span class="small">Mins</span> </div>
            <div> {calculateTime(bus.nextBus2.estimatedArrival)} <span class="small">Mins</span></div>
            <div> {calculateTime(bus.nextBus3.estimatedArrival)} <span class="small">Mins</span></div>
        </li>
    );

}


function BusList(props) {
    const buses = props.buses;
    const listItems = buses.map((bus) =>
        // Correct! Key should be specified inside the array.
        <BusListItem key={bus.serviceNo} bus={bus} />

    );
    return (
        <ul className="list-group">
            {listItems}
        </ul>

    );
}
function calculateTime(arrivalTime) {
    if (arrivalTime === "") {
        return "-";
    }
    const arrival = new Date(arrivalTime);
    const now = new Date();
    return Math.floor((arrival - now) / 60000);

}

class BusArrival extends Component {
    constructor(props) {
        super(props);
        this.state = { result: [] };
    }
    componentDidMount() {
        const stopCode = this.props.match.params.stopcode;
        fetch(`${environment.url}/arrivals/${stopCode}`).then(res => res.json())
            .then(res => {
                this.setState({ result: res.response.data });
            });
    }

    render() {
        return (
            <div>
                <h2>{this.props.match.params.stopcode}</h2>
                <BusList buses={this.state.result} />
            </div>
        );
    }
}
export default BusArrival;