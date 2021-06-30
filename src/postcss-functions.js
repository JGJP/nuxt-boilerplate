module.exports = {
	scaleUnit: (input, times, scale, decimals = 3) => {
		const regex = /(rem|em|px)/i
		const [ unit ] = input.match(regex)
		let value = input.replace(regex, "")

		if (times < 0) {
			// https://stackoverflow.com/a/59063674
			while (times++ < 0) {
				value = value / scale
			}
		}
		else {
			while (times--) {
				value = value * scale
			}
		}

		return value.toFixed(decimals) + unit
	}
}
