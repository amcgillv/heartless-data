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
				text: "But she only felt like she was turning into her mother sometimes",
				fontFamily: "sans-serif",
				fontColor: "#7b7979"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				// text: "% of relationships that made Alyssa feel like she was turning into her mother ",
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
				dataPoints: [
					{ name: "Turning into her mother", y: 22.2,indexLabelFontColor: "#7b7979", color: "#7b7979" },
					{ name: "NOT turning into her mother", y: 77.8,indexLabelFontColor: "#7b7979", color: "#ff7c5c" }
				],
				fontFamily: "Sans-Serif",
					fontColor: "#7b7979"
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
