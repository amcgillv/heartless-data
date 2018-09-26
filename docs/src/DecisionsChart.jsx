var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DecisionsCharts extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Which partner made decisions on a regular basis?",
				fontFamily:"sans-serif"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				text: "63% Alyssa",
				verticalAlign: "center",
				dockInsidePlotArea: true,
				fontFamily: "Sans-Serif"
			}],
			data: [{
				type: "doughnut",
				showInLegend: false,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "Alyssa", y: 62.5 },
					{ name: "The Partner", y: 37.5 }
				],
				fontFamily: "Sans-Serif"
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
module.exports = DecisionsCharts;
