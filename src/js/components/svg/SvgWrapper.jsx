var React = require("react");
var PropTypes = React.PropTypes;
var BackgroundRect = require("./BackgroundRect.jsx");
var SvgText = require("./SvgText.jsx");

var SvgWrapper = React.createClass({

	propTypes: {
		outerDimensions: PropTypes.object,
		metadata: PropTypes.object,
		margin: PropTypes.object,
		displayConfig: PropTypes.object
	},

	_createTitle: function(props) {
		return (
			<SvgText
				text={props.metadata.title}
				key="title"
				translate={[
					props.displayConfig.margin.left,
					props.displayConfig.margin.top
				]}
				align="top"
				className="svg-text-title"
			/>
		);
	},

	_getYOffset: function(props) {
		if (props.metadata.title.length > 0) {
			return props.displayConfig.afterTitle;
		} else {
			return 0;
		}
	},

	render: function() {
		var props = this.props;
		var yOffset = this._getYOffset(props);
		var outerDimensions = {
			width: props.outerDimensions.width,
			height: props.outerDimensions.height + yOffset
		};

		// Add to the chart margin if title is present
		var translate = [
			props.displayConfig.margin.left,
			props.displayConfig.margin.top + yOffset
		];

		return (
			<svg width={outerDimensions.width} height={outerDimensions.height}>
				<BackgroundRect dimensions={outerDimensions} />
				{this._createTitle(props)}
				<g className="chart-margin" transform={"translate(" + translate + ")"} >
					{props.children}
				</g>
			</svg>
		);
	}

});

module.exports = SvgWrapper;