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
				text: "Typically, Alyssa was the decision maker in the relationship",
				fontFamily:"sans-serif",
				fontColor: "#7b7979",
			},
			backgroundColor: "#00000000",
			subtitles: [{
				// text: "ususally Alyssa",
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
					{ name: "Alyssa made most decisions", y: 62.5,indexLabelFontColor: "#7b7979", color: "#ff7c5c" },
					{ name: "The Partner made most decisions", y: 37.5,indexLabelFontColor: "#7b7979", color: "#d7bfe9"  }
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
