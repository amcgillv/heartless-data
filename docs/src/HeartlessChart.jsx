var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class HeartlessChart extends Component {
	render() {
		const options = {
			backgroundColor: "#00000000",
			toolTip: {
				shared: false
			},
			axisY: {
				suffix: "",
				lineThickness: 0,
				gridThickness: 0,
				tickLength: 0,
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
				indexLabel: "{y}  {label}",
				indexLabelFontColor: "white",
				yValueFormatString: "#,###''",
				color: "#662d91",
				dataPoints: [
					{label: "Points of the heartless bastard variety", y: 9 }
				]
			},{
				type: "stackedBar100",
				color: "#7f7f7f",
				name: "Not Present",
				// showInLegend: true,
				indexLabel: "{y}  {label}",
				indexLabelFontColor: "white",
				color: "#d7bfe9",
				yValueFormatString: "#,###''",
				dataPoints: [
					{label: "Potential points that Alyssa could have earned but did NOT earn (because she is weak)", y: 16 }
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
module.exports = HeartlessChart;
