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
				fontFamily: "sans-serif",
				fontColor: "#662d91"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				text: "Not well*",
				verticalAlign: "center",
				dockInsidePlotArea: true,
				fontFamily: "Sans-Serif",
				fontColor: "#662d91"
			}],
			data: [{
				type: "doughnut",
				showInLegend: false,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "The Partner", y: 33.3, indexLabelFontColor: "#662d91", color: "#ff9f87" },
					{ name: "Alyssa", y: 33.3, indexLabelFontColor: "#662d91", color: "#bfbaba"  },
					{ name: "Can't respond to something that never happened", y: 33.3, indexLabelFontColor: "#662d91", color: "white"}
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
