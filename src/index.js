import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
// */

/*
var React = require('react'),
    ReactDOM = require('react-dom'),
    Highcharts = require('highcharts'),
    addFunnel = require('highcharts/modules/funnel');
*/

/*
import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts';
import addFunnel from 'highcharts/modules/funnel';
import BarChart from './BarChart';

var element = React.createElement('div', { id: 'chart' });

ReactDOM.render(element, document.getElementById('root'), function () {
    // Apply funnel after window is present
    addFunnel(Highcharts);
    // Construct the chart
    
    Highcharts.chart('chart', { /* // Options*/ /* });
});
// */
