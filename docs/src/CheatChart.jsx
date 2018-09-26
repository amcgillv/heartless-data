/* App.js */
var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CheatChart extends Component {
	render() {
		const options = {
			// theme: "light2",
			title: {
				text: "Degree of Infidelity",
				fontFamily: "sans-serif"
			},
			subtitles: [{
				text: "...because there was so much of it",
					fontFamily: "sans-serif"
			}],
			backgroundColor: "#00000000",
			axisY: {
				minimum: 0,
				maximum: 5
			},
			axisX: {
				minimum: 1,
				valueFormatString: " "
			},
			toolTip: {
				shared: true
			},
			data: [
			{
				type: "bar",
				name: "The Partner",
				showInLegend: false,
				xValueFormatString: " ",
				yValueFormatString: "#,####",
				dataPoints: [
					{ x: 1, y: 4},
					{ x: 2, y: 1},
					{ x: 3, y: 2},
					{ x: 4, y: 1},
					{ x: 5, y: 1},
					{ x: 6, y: 5},
					{ x: 7, y: 3},
					{ x: 8, y: 5},
					{ x: 9, y: 1}
				]
			},
			{
				type: "bar",
				name: "Alyssa",
				showInLegend: false,
				xValueFormatString: " ",
				yValueFormatString: "#,####",
				dataPoints: [
					{ x: 1, y: 4},
					{ x: 2, y: 2},
					{ x: 3, y: 3},
					{ x: 4, y: 5},
					{ x: 5, y: 1},
					{ x: 6, y: 1},
					{ x: 7, y: 3},
					{ x: 8, y: 2},
					{ x: 9, y: 1}
				]
			}
			]
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
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}
module.exports = CheatChart;
