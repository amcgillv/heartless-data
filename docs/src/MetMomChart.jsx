var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class MetMomChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			fontColor: "#7b7979",
			title: {
				// text: "Alyssa and The Partner tended to collaborate on projects for class",
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
					{ name: "The Partner didn't meet Alyssa's mother", y: 66.7,indexLabelFontColor: "#7b7979", color: "#ff7c5c" },
					{ name: "The Partner met Alyssa mother and it went well because The Partner was a BORING man", y: 33.3,indexLabelFontColor: "#7b7979", color: "#d5c2c2"  }
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
module.exports = MetMomChart;
