var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PathCharts extends Component {
	render() {
		const options = {
			animationEnabled: true,
			fontColor: "#7b7979",
			title: {
				text: "Between classes, they went out of their way to see each other",
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
					{ name: "Alyssa and The Partner took detours to class so that they'd run into each other", y: 77.8,indexLabelFontColor: "#7b7979", color: "#ff7c5c" },
					{ name: "Alyssa and The Partner didn't have that kind of relationship", y: 22.2,indexLabelFontColor: "#7b7979", color: "#d7bfe9"  }
				],
				fontFamily: "sans-serif"
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
		</div>
		);
	}
}
module.exports = PathCharts;
