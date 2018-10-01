var React = require('react');
var Component = React.Component;
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class AbuseChart extends Component {
	render() {
		const options = {
			animationEnabled: true,
			colorSet: "greenShades",
			title:{
				text: "And sometimes the relationship became more than unhealthy",
				fontFamily: "sans-serif",
				fontColor: "#7b7979"
			},
			backgroundColor: "#00000000",
			subtitles: [{
				// text: "...because any amount of it is too much of it",
					fontFamily: "sans-serif",
					fontColor: "#7b7979"
			}],
			toolTip: {
				fontColor: "black",
				content: "{name}: {y}"
			},
			axisX: {
				title: "",
				// reversed: true,
				valueFormatString: " ",
				indexLabelFontColor:"#7b7979",
				fontColor: "#7b7979",
				fontFamily: "sans-serif"

			},
			axisY: {
				title: "Count of relationships where this variety of abuse occurred",
				// labelFormatter: this.addSymbols
				labelFontColor:"#7b7979",
				fontColor: "#7b7979",
				fontFamily: "sans-serif"
			},
			data: [{
				type: "bar",
				name: "The Partner",
				showInLegend: false,
				xValueFormatString: " ",
				yValueFormatString: "#,####",
				color: "#7b7979",
				showInLegend: false,
				dataPoints: [
					{ y:  6, label: "The Partner: None, what a good egg!", indexLabelFontColor:"#7b7979" },
					{ y:  3, label: "The Partner: Verbal", indexLabelFontColor:"#7b7979" },
					{ y:  1, label: "The Partner: Physical", indexLabelFontColor:"#7b7979" }
				]
			},
			{
					type: "bar",
					name: "Alyssa",
					showInLegend: false,
					xValueFormatString: " ",
					yValueFormatString: "#,####",
					color: "#d5c2c2",
					showInLegend: false,
					dataPoints: [
						{ y:  10, label: "No abuse whatsoever, what a good egg!", indexLabelFontColor:"#7b7979" },
						{ y:  0, label:  "Verbal Abuse", indexLabelFontColor:"#7b7979" },
						{ y:  0, label: "Physical Abuse", indexLabelFontColor:"#7b7979" }

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
