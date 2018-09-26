var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MotherChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "Did Alyssa feel like she was turning into her mother?",
				fontFamily: "sans-serif"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				text: "22% Yes",
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
					{ name: "Yes", y: 22.2 },
					{ name: "No", y: 77.8 }
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
module.exports = MotherChart;
