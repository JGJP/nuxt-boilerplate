function scaleUnit(input, times, scale) {
	const regex = /(rem|em)/i
	const unit = input.match(regex)
	let value = input.replace(regex, "")

	if (times < 0) {
		for (let i = 0; i < Math.abs(times); i++) {
			value = value / scale
		}
	}
	else {
		for (let i = 0; i < times; i++) {
			value = value * scale
		}
	}

	value = value.toFixed(3)
	const cssValue = value + unit[0]

	return cssValue
}

module.exports = {
	scaleUnit,
}
