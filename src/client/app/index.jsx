import React from 'react';
import {render} from 'react-dom';
import response from './json_response.json';

var data = response.restaurants;

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

var RestaurantPanel = React.createClass({
  render: function() {
    var categories = this.props.categories.join(', ');

    return (
      <div className="restaurantPanel panel panel-default">
        <h5 className="restaurantName"><strong>{this.props.name}</strong></h5>
        <div className="row">
          <div className="col-sm-6 yelp-summary">
            <p><img src={this.props.rating_img_url}/>&nbsp;&nbsp;
            <span className="text-muted">{this.props.review_count} reviews</span></p>
            <p>{categories}</p>
            <button type="button" className="btn btn-default">
              <a href={this.props.url} target="_blank">view on Yelp</a>
            </button>
          </div>
          <div className="col-sm-6 travel-summary">
            <p><strong>{this.props.total_travel.duration.text}</strong>&nbsp;&nbsp;
            <span className="text-muted">({this.props.total_travel.distance.text})</span> total</p>
            <p>{this.props.to_restaurant.duration.text} to there</p>
            <p>{this.props.from_restaurant.duration.text} from there</p>
          </div>
        </div>
      </div>
    );
  }
});

var RestaurantList = React.createClass({
  render: function() {
    var restaurantNodes = this.props.data.map(function(restaurant){
      return (
        <RestaurantPanel key={restaurant.name}
                         name={restaurant.name}
                         rating={restaurant.rating}
                         review_count={restaurant.review_count}
                         categories={restaurant.categories}
                         url={restaurant.url}
                         rating_img_url={restaurant.rating_img_url}
                         total_travel={restaurant.total_travel}
                         to_restaurant={restaurant.to_restaurant}
                         from_restaurant={restaurant.from_restaurant}>
        </RestaurantPanel>
      );
    });

    return(
      <div className="restaurantList">
        {restaurantNodes}
      </div>
    );
  }
});

var SearchBox = React.createClass({
  render: function() {
    return(
      <div className="searchBox panel panel-default">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="originInput" className="col-sm-3 control-label">Origin</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="originInput" placeholder="Disneyland"/>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="destinationInput" className="col-sm-3 control-label">Destination</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="destinationInput" placeholder="Universal Studios"/>
            </div>
          </div>
        </form>
      </div>
    );
  }
});

var DataBox = React.createClass({
  render: function() {
    return(
      <div className="dataBox">
        <SearchBox />
        <RestaurantList data={this.props.data}/>
      </div>
    );
  }
})


render(<DataBox data={data}/>, document.getElementById('data-box'));
