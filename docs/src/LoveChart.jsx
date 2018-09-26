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
				fontFamily: "sans-serif",
				fontColor: "#662d91"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				text: "56% The Partner",
				verticalAlign: "center",
				dockInsidePlotArea: true,
				fontFamily: "sans-serif",
				fontColor: "#662d91"
			}],
			data: [{
				type: "doughnut",
				showInLegend: false,
				indexLabel: "{name}: {y}",
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "The Partner", y: 55.6, indexLabelFontColor: "#662d91", color: "#ff9f87" },
					{ name: "Alyssa", y: 11.1, indexLabelFontColor: "#662d91", color: "#bfbaba"  },
					{ name: "LOL Nobody", y: 33.3, indexLabelFontColor: "#662d91", color: "white"  }
				],
				fontFamily: "sans-serif",
				fontColor: "#662d91"
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
