import React from 'react';

export default class RestaurantPanel extends React.Component {
  render() {
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
}
