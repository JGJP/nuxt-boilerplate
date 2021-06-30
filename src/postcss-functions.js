function scaleUnit(input, times, scale) {
	const regex = /(rem|em|px)/i
	const [unit] = input.match(regex)
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

	return value.toFixed(3) + unit
}

module.exports = {
	scaleUnit,
}
