import React from 'react';
import {render} from 'react-dom';
import response from './json_response.json';

import RestaurantPanel from './components/restaurant_panel.jsx';
import RestaurantList from './components/restaurant_list.jsx';
import SearchBox from './components/search_box.jsx';
import DataBox from './components/data_box.jsx';

var data = response.restaurants;

render(
  <DataBox/>,
  document.getElementById('data-box')
);
