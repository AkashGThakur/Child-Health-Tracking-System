import './App.css';
import './table.css';
import './New.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Dashboard extends Component {
	render() {

    const option1 = {
			animationEnabled: true,
			colorSet: "colorSet2",
			axisX: {
				valueFormatString: " "
			},
			axisY: {
				prefix: " ",
				labelFormatter: this.addSymbols
			},
			toolTip: {
				shared: true
			},
			legend: {
				cursor: "pointer",
				itemclick: this.toggleDataSeries,
				verticalAlign: "top"
			},
			data: [{
				type: "column",
				name: "Screening Done",
				showInLegend: true,
				xValueFormatString: "MMMM YYYY",
				yValueFormatString: "#,##0",
				dataPoints: [
          			{ label: "Ambegaon", y:  2200  },
					{ label: "Baramati", y:  1800  },
					{ label: "Bhor", y:  8000 },
					{ label: "Daund", y:  5630,  },
					{ label: "Haveli", y:  3760  },
					{ label: "Indapur", y:  3360  },
					{ label: "Junnar", y:  3300  },
          			{ label: "Khed", y:  2800  },
					{label: "Maval", y:  1200 },
					{ label: "Mulshi", y:  6000 },
					{label: "Pune", y:  5030,  },
					{ label: "Purandar", y:  3060  },
					{ label: "Shirur", y:  4260  },
					{ label: "Velhe", y:  5100  }

				]
			}
    ]
  }	
		return (
		<div>
      <TemporaryDrawer/>
	  <div className='hlt-head'>
	  <h3 className='healthcard-head'>Children Records</h3>
	  </div>
	  <div className='graph'>
      <CanvasJSChart options = {option1}/>
		</div>
   		 </div>
		);
	}
}

export default Dashboard;
