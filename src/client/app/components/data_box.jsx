import React from 'react';
import SearchBox from './search_box.jsx';
import RestaurantList from './restaurant_list.jsx';

export default class DataBox extends React.Component {
  constructor() {
    super();
    this.state = {data:[]};
    this.updateList = this.updateList.bind(this);
  }

  updateList(newData) {
    this.setState({data: newData});
  }

  displayRouteOnMap(origin, destination) {
    var directionsService = new google.maps.DirectionsService();
    var request = {
      origin: origin,
      destination: destination,
      travelMode: 'DRIVING'
    };
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        directionsDisplay.setDirections(result);
      }
    });
  }

  render() {
    return(
      <div className="dataBox">
        <SearchBox updateList={this.updateList} displayRouteOnMap={this.displayRouteOnMap}/>
        <RestaurantList data={this.state.data}/>
      </div>
    );
  }
}
