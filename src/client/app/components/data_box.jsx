import React from 'react';
import SearchBox from './search_box.jsx';
import RestaurantList from './restaurant_list.jsx';
import $ from 'jquery';

var DataBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return(
      <div className="dataBox">
        <SearchBox />
        <RestaurantList data={this.state.data}/>
      </div>
    );
  }
});

export default DataBox;
