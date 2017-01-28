import Highcharts from 'highcharts';
window.Highcharts = Highcharts;
import React, { Component } from 'react';
import './Chart.css';


class Chart extends Component {

    render() {
        return React.createElement('div', { id: this.props.container, className: 'Chart' });
    }

    componentDidMount() {
    
	    if (this.props.modules) {
            this.props.modules.forEach(function (module) {
                module(Highcharts);
            });
        }
   
        this.chart = new Highcharts[this.props.type || "Chart"](
            this.props.container,
            {
                chart: {
				    type: 'bar'
			    },
			    xAxis: {
				    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
			    },
                legend: {
                    layout: 'vertical',
                    floating: true,
                    backgroundColor: '#FFFFFF',
                    align: 'right',
                    verticalAlign: 'top',
                    y: 60,
                    x: -60
                },
                tooltip: {
                    formatter: function () {
                        return '<b>' + this.series.name + '</b><br/>' +
                            this.x + ': ' + this.y;
                    }
                },
                series: [{
                    name: 'Whatever we\'re charting',
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
                }]
		    } // end of options parameter*/
        ); // end this.chart initialization */
    }
  
    componentWillUnmount() {
        this.chart.destroy();
    }
}

export default Chart;
