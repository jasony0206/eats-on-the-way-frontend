import React from 'react';
import RestaurantPanel from './restaurant_panel.jsx';
import 'react-spinner';

export default class RestaurantList extends React.Component {
  render() {
    var restaurantNodes = null;
    var data = this.props.data;
    if (data.restaurants) {
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
    } else if (this.props.loading) {
      return (
        <div className="restaurantList">
          <div className="loader"></div>
        </div>
      );
    }

    return(
      <div className="restaurantList">
        {restaurantNodes}
      </div>
    );
  }
}
