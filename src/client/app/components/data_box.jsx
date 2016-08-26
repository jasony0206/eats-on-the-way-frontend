import React from 'react';
import SearchBox from './search_box.jsx';
import RestaurantList from './restaurant_list.jsx';

export default class DataBox extends React.Component {
  render() {
    return(
      <div className="dataBox">
        <SearchBox />
        <RestaurantList data={this.props.data}/>
      </div>
    );
  }
}
