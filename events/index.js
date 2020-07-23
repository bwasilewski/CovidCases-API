const fs = require('fs')
const path = require('path')
const csv = require('papaparse')


module.exports = {
  getCSV: (filePath) => {
		return new Promise((resolve, reject) => {
			let results = []
			const filestream = fs.createReadStream(filePath)
			const parsestream = csv.parse(csv.NODE_STREAM_INPUT, {
				header: true,
				dynamicTyping: true
			})
			filestream.pipe(parsestream)
				.on('data', chunk => results.push(chunk))
				.on('error', err => reject(err))
				.on('finish', () => resolve(results))
		})
	},
	filterByCountry: (country, dataset) => {
		return dataset.filter( item => item['Country/Region'] === country )
	},
	filterByState: (state, dataset) => {
		console.log(state)
		console.log(dataset)
		return dataset.filter( item => item['Province_State'] == state )
	},
	filterByCounty: (county, state, dataset) => {
		return dataset.filter( item => item['Province_State'] == state && item['Admin2'] == county )
	}
}
