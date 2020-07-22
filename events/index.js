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
		let filtered = []
		dataset.forEach(item => {
			if ( item[date] ) {
				filtered.push({
					'Province/State': item['Province/State'],
					'Country/Region': item['Country/Region'], 
					'Lat': item['Lat'],
					'Long': item['Long'],
					'State/Province': item['State/Province'],
					'total': item[date]
				})
		}})
		return filtered
	},
	filterByState: (state, dataset) => {
		return dataset.filter( item => item['State'] == state )
	}
}
