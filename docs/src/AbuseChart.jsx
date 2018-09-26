var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class AbuseChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			// theme: "light2",
			title:{
				text: "Degree of Abuse",
				fontFamily: "sans-serif"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				text: "...because any amount of it is too much of it",
					fontFamily: "sans-serif"
			}],
			axisX: {
				title: "",
				// reversed: true,
				valueFormatString: " "
			},
			axisY: {
				title: "Count of relationships where this variety of abuse occurred",
				// labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				name: "The Partner",
								showInLegend: false,
				xValueFormatString: " ",
				yValueFormatString: "#,####",
				showInLegend: false,
				dataPoints: [
					{ y:  3, label: "The Partner: Verbal" },
					{ y:  1, label: "The Partner: Physical" },
					{ y:  6, label: "The Partner: None, what a good egg!" }
				]
			},
			{
					type: "bar",
					name: "Alyssa",
									showInLegend: false,
					xValueFormatString: " ",
					yValueFormatString: "#,####",
					showInLegend: false,
					dataPoints: [
						{ y:  0, label:  "Verbal" },
						{ y:  0, label: "Physical" },
						{ y:  10, label: "None, what a good egg!" }
					]
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
	addSymbols(e){
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if(order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
}
module.exports = AbuseChart;
