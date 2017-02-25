import React, {PropTypes} from 'react';
import update from 'react-addons-update';
import {clone} from 'lodash';

const ChartEditorMixin = require("../mixins/ChartEditorMixin");
const XY_yScaleSettings = require("../shared/XY_yScaleSettings.jsx");

// Chartbuilder UI components
import {ButtonGroup, TextInput, LabelledTangle} from 'chartbuilder-ui';

const XYMobile = React.createClass({

	mixins: [ChartEditorMixin],

	_handleUpdate: function(k, v) {
		const newSetting = {};
		newSetting[k] = v;
		const newMobile = update(this.props.chartProps.mobile, { $merge: newSetting });
		this._handlePropUpdate("mobile", newMobile);
	},

	_handleScaleUpdate: function(k, v) {
		const newSetting = {};
		newSetting[k] = v;
		const newMobile = update(this.props.chartProps.mobile, { $merge: newSetting });
		this._handlePropAndReparse("mobile", newMobile);
	},

	_handleScaleReset: function() {
		let mobile = clone(this.props.chartProps.mobile);
		delete mobile.scale;
		this._handlePropAndReparse("mobile", mobile);
	},

	render: function() {
		const chartProps = this.props.chartProps;
		const scaleSettings = [];
		const scale = chartProps.mobile.scale || chartProps.scale;

		/* Y scale settings */
		scaleSettings.push(
			<XY_yScaleSettings
				scale={scale}
				className="scale-options"
				onUpdate={this._handleScaleUpdate.bind(null, "scale")}
				onReset={this._handleScaleReset}
				id="primaryScale"
				name="Primary"
				key="primaryScale"
				titleOverride="Mobile-specific primary axis settings"
				stepNumber = ""
			/>
		);

		/* render a second y scale component if altAxis is specified */
		if (chartProps._numSecondaryAxis > 0) {
			scaleSettings.push(
				<XY_yScaleSettings
					scale={scale}
					onUpdate={this._handleScaleUpdate.bind(null, "scale")}
					className="scale-options"
					onReset={this._handleScaleReset}
					id="secondaryScale"
					name="Secondary"
					key="secondaryScale"
					titleOverride="Mobile-specific secondary axis settings"
					stepNumber = ""
				/>
			);
		}

		return (
			<div className="editor-options mobile-overrides">
				<h2>
					<span className="step-number">✭</span>
					Mobile settings
				</h2>
				<TextInput
					value={chartProps.mobile.title}
					className="mobile-option"
					onChange={this._handleUpdate.bind(null, "title")}
					placeholder={"Title"}
				/>
				{scaleSettings}
			</div>
		);
	}
});

module.exports = XYMobile;
