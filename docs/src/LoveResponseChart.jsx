var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LoveResponseChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: "How'd that go?",
				fontFamily: "sans-serif"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				text: "Not well*",
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
					{ name: "The Partner", y: 33.3 },
					{ name: "Alyssa", y: 33.3 },
					{ name: "Can't respond to something that never happened", y: 33.3 }
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
module.exports = LoveResponseChart;
