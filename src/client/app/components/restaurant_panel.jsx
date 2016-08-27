import React from 'react';
import { Button, Collapse, Well } from 'react-bootstrap';

export default class RestaurantPanel extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  render() {
    var categories = this.props.categories.join(', ');

    return (
      <div className="restaurantPanel panel panel-default">
        <div onClick={ ()=> this.setState({ open: !this.state.open })}>
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
              <p>{this.props.to_restaurant.duration.text} to there<br></br>
              {this.props.from_restaurant.duration.text} from there</p>
              <p className="route-details-text">more details</p>
            </div>
          </div>
        </div>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              <div className="row">
                <div className="col-sm-7 travel-additional">
                  <p>Adds <strong>{this.props.added_travel.duration.text}</strong> to direct route</p>
                </div>
                <div className="col-sm-5 travel-additional">
                  <a href="https://www.google.com/maps/dir/San+Jose,+CA/Los+Angeles,+CA/" target="_blank">
                    <button type="button" className="btn btn-primary route-button">
                      View directions on Google
                    </button>
                  </a>
                </div>
              </div>
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }

  render1() {
    return (
      <div>
        <Button onClick={ ()=> this.setState({ open: !this.state.open })}>
          click
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Well>
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </Well>
          </div>
        </Collapse>
      </div>
    );
  }
}
