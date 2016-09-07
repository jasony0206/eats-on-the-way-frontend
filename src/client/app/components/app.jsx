import React from 'react';
import DataBox from './data_box.jsx';
import MapComponent from './map_component.jsx';

export default class App extends React.Component {
  render() {
    return(
      <div className="app">
        <DataBox/>
        <MapComponent/>
      </div>
    );
  }
}
