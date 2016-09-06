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

  render() {
    return(
      <div className="dataBox">
        <SearchBox updateList={this.updateList}/>
        <RestaurantList data={this.state.data}/>
      </div>
    );
  }
}
