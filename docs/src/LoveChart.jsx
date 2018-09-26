var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class LoveChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title: {
				text: 'Who said "I love you" first?',
				fontFamily: "sans-serif"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				text: "56% The Partner",
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
					{ name: "The Partner", y: 55.6 },
					{ name: "Alyssa", y: 11.1 },
					{ name: "LOL Nobody", y: 33.3 }
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
module.exports = LoveChart;
