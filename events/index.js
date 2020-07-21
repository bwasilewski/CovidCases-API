const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

module.exports = {
  getCSV: (filePath) => {
		return new Promise((resolve, reject) => {
			let results = []
			fs.createReadStream(filePath)
				.pipe(csv())
				.on('data', data => results.push(data))
				.on('error', err => reject(err))
				.on('end', () => resolve(results))
		})
	},
	filterByCountry: (country, dataset) => {
		return dataset.filter( item => item['Country/Region'] === country )
	},
	filterByDate: (date, dataset) => {
		return dataset.filter( item => item[date] !== undefined )
	}
}
