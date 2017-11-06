/**
 * Default dimensions for non-responsive chart sizes.
 * @name chart_sizes
 * @memberof config
 * @static
 */
var chart_sizes = {
	auto: {
		width: 700,
		height: 600,
		sizeClass: "online_full"
	},
	printTwo: {
		width: 360,
		height: 350,
		sizeClass: "print_two"
	},
		onlineHalf: {
		width: 350,
		height: 450,
		sizeClass: "online_half"
	},
	printOne: {
		width: 185,
		height: 300,
		sizeClass: "online_vertical"
	}

};

module.exports = chart_sizes;
