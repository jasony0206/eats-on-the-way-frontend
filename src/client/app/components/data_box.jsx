import React from 'react';
import SearchBox from './search_box.jsx';
import RestaurantList from './restaurant_list.jsx';

export default class DataBox extends React.Component {
  constructor() {
    super();
    this.state = {data:[], loading: false};
    this.updateList = this.updateList.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  updateList(newData) {
    this.setState({data: newData, loading: false});
    this.putMarkersOnMap(newData);
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

  putMarkersOnMap(newData) {
    this.removeMarkers();

    newData.restaurants.map(function(restaurant) {
        var marker = new google.maps.Marker({
          position: {lat: restaurant.location.latitude, lng: restaurant.location.longitude},
          map: mapObject
        });

        markers.push(marker);
      }
    );
  }

  removeMarkers() {
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
  }

  setLoading(newLoadingValue) {
    this.setState({data: [], loading: newLoadingValue});
  }

  render() {
    return(
      <div className="dataBox">
        <SearchBox updateList={this.updateList} displayRouteOnMap={this.displayRouteOnMap} setLoading={this.setLoading}/>
        <RestaurantList data={this.state.data} loading={this.state.loading}/>
      </div>
    );
  }
}
