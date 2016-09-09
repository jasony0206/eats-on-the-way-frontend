import React from 'react';
import RestaurantPanel from './restaurant_panel.jsx';
import $ from 'jquery';

export default class RestaurantList extends React.Component {
  render() {
    var restaurantNodes = null;
    var data = this.props.data;
    if (data.restaurants) {
      // Received query results, display properly
      restaurantNodes = this.props.data.restaurants.map(function(restaurant){
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
                           from_restaurant={restaurant.from_restaurant}
                           added_travel={restaurant.added_travel}
                           origin={data.start_location.address}
                           destination={data.end_location.address}
                           address={restaurant.location.address}>
          </RestaurantPanel>
        );
      });

      return(
        <div className="restaurantList">
          {restaurantNodes}
        </div>
      );
    } else if (this.props.loading) {
      // Query is executing, show loading spinner
      return (
        <div className="restaurantList">
          <div className="loader"></div>
          <h4 className="text-center text-muted">This might take a few seconds...</h4>
        </div>
      );
    } else {
      // Stand by for the first query
      // Wake up heroku backened by hitting the endpoint beforehand
      var URL = "https://eats-on-the-way-api.herokuapp.com"
      $.ajax({
        url: URL,
        cache: false,
        success: function(data) {
          console.log("endpoint is awake!");
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(URL, status, err.toString());
        }.bind(this)
      });

      return (
        <div className="restaurantList">
          <div className="intro panel panel-default">
            <h2><strong>On The Way</strong></h2>
            <h4>Search restaurants and more along your travel route!</h4><br/>
            <p>Tell me where you are traveling from and to, and find out which restaurants on the way are highly rated on Yelp.
            Search results will also include direct links to Yelp pages as well as Google Maps directions.</p>
            <p>If you have any feedback or comments, please contact me through <a href="http://jasony0206.github.io" target="_blank">here</a>.</p>
            <div className="footer text-center">
              Copyright &copy; 2016 Jason Yoon
            </div>
          </div>
        </div>
      );
    }
  }
}
