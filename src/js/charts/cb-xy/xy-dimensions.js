var chartSizes = require("../../config/chart-sizes");

// TODO: jsDocify this if it works

/**
 * see [ChartConfig#calculateDimensions](#chartconfig/calculatedimensions)
 * @see ChartConfig#calculateDimensions
 * @instance
 * @memberof xy_config
 */
function calculate_xy_dimensions(width, opts) {
	var height;
	var aspectRatio = opts.displayConfig.aspectRatio;
	var metadata = opts.metadata;
	var sizeClass = chartSizes[metadata.size].sizeClass;

	if (metadata.size == "auto" || opts.enableResponsive) {
		// use current width
	} else {
		width = chartSizes[metadata.size].width;
	}

	switch (metadata.size) {
		case "auto":
			height = Math.round(width * aspectRatio.horizontal);
			break;

		case "printTwo":
			height = Math.round(width * aspectRatio.wide);
			break;

		case "onlineHalf":
			height = Math.round(width * aspectRatio.vertical);
			break;

		case "printOne":
			height = Math.round(width * aspectRatio.square);
			break;

		default:
			height = Math.round(width * aspectRatio.horizontal);
	}
	//console.log(sizeClass, metadata.size, width, height);
	return {
		width: width,
		height: height,
		//height: height + opts.extraHeight,
		titleHeight: opts.titleHeight,
		subHeight: opts.subHeight,
		extraHeight: opts.extraHeight,
		sizeClass: sizeClass
	};
}

module.exports = calculate_xy_dimensions;
