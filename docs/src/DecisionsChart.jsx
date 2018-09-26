var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class DecisionsCharts extends Component {
	render() {
		const options = {
			animationEnabled: true,
			fontColor: "#7b7979",
			title: {
				text: "Which partner made decisions on a regular basis?",
				fontFamily:"sans-serif",
				fontColor: "#7b7979",
			},
			backgroundColor: "#00000000",
			subtitles: [{
				text: "63% Alyssa",
				verticalAlign: "center",
				dockInsidePlotArea: true,
				fontFamily: "Sans-Serif",
				fontColor: "#7b7979"
			}],
			data: [{
				type: "doughnut",
				showInLegend: false,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				fontColor: "#7b7979",
				fontFamily: "sans-serif",
				dataPoints: [
					{ name: "Alyssa", y: 62.5,indexLabelFontColor: "#7b7979", color: "#ff7c5c" },
					{ name: "The Partner", y: 37.5,indexLabelFontColor: "#7b7979", color: "#7b7979"  }
				],
				fontFamily: "sans-serif"
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
