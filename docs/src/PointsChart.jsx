var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PointsChart extends Component {
	render() {
		const options = {
			backgroundColor: "#00000000",
			title: {
				text: "Have we been too lenient with point distribution?",
				fontFamily: "sans-serif",
				fontColor: "#662d91"
			},
			toolTip: {
				shared: false
			},
			axisY: {
				suffix: "",
				lineThickness: 0,
				tickLength: 0,
				gridThickness: 0,
		    labelFormatter: function(){
		      return " ";
				}
			},
			axisX:{
    gridThickness: 0,
    tickLength: 0,
    lineThickness: 0,
    labelFormatter: function(){
      return " ";
    }
	},
			data: [{
				type: "stackedBar100",
				color: "#9bbb59",
				name: "Present",
				// showInLegend: true,
				indexLabel: "",
				// indexLabelFontColor: "white",
				yValueFormatString: "#,###'%'",
				color: "#ff9f87",
				dataPoints: [
					{label: "Yes! She should get +1 point for running away and another +1 for screaming", y: 75 }
				]
			},{
				type: "stackedBar100",
				color: "#7f7f7f",
				name: "No, not really.",
				// showInLegend: true,
				indexLabel: "",
				// indexLabelFontColor: "white",
				color: "#d5c2c2",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{label: "No, not really", y: 25 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
module.exports = PointsChart;
