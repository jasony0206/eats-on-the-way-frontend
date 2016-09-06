import React from 'react';
import {render} from 'react-dom';
import response from './json_response.json';

import RestaurantPanel from './components/restaurant_panel.jsx';
import RestaurantList from './components/restaurant_list.jsx';
import SearchBox from './components/search_box.jsx';
import DataBox from './components/data_box.jsx';

var BACKEND_URL = "https://eats-on-the-way-api.herokuapp.com/search?origin=Hammer+Museum,+10899+Wilshire+Blvd,+Los+Angeles&destination=424+kelton+ave+los+angeles"
var data = response.restaurants;

render(
  <DataBox url={BACKEND_URL}/>,
  document.getElementById('data-box')
);
