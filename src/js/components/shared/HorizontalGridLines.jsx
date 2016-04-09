var React = require("react");
var PropTypes = React.PropTypes;
var map = require("lodash/map");

var VerticalGridLines = React.createClass({

	propTypes: {
		tickValues: PropTypes.array,
		orient: PropTypes.string,
		dimensions: PropTypes.object,
		yScale: PropTypes.func
	},

	_generateTicks: function(props) {
		return map(props.tickValues, function(tickValue, i) {
			var scalePos = props.yScale(tickValue);
			return (
				<line
					key={i}
					className="tick"
					y1={scalePos}
					y2={scalePos}
					x1={props.dimensions.width}
					x2="0"
				/>
			)
		});
	},

	render: function() {
		var ticks = this._generateTicks(this.props);

		return (
			<g className="grid-lines horizontal-grid-lines" >
				{ticks}
			</g>
		);
	}

});

module.exports = VerticalGridLines;