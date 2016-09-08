import React from 'react';
import $ from 'jquery';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.BACKEND_URL = "https://eats-on-the-way-api.herokuapp.com/search?";
  }

  handleClick() {
    var origin = document.getElementById('originInput').value;
    var destination = document.getElementById('destinationInput').value;
    var queryString = `origin=${encodeURI(origin)}&destination=${encodeURI(destination)}`;
    var fullURI = `${this.BACKEND_URL}${queryString}`;
    this.props.setLoading(true);

    $.ajax({
      url: fullURI,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.props.setLoading(false);
        this.props.updateList(data);
        this.props.displayRouteOnMap(origin, destination);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return(
      <div className="searchBox panel panel-override panel-default">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="originInput" className="col-sm-3 control-label">Origin</label>
            <div className="col-sm-9">
              <input type="text" className="controls form-control" id="originInput" placeholder="Enter starting location"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="destinationInput" className="col-sm-3 control-label">Destination</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="destinationInput" placeholder="Enter destination"/>
            </div>
          </div>
          <button type="button" className="btn btn-warning pull-right" onClick={this.handleClick}>Search</button>
        </form>
      </div>
    );
  }
}
