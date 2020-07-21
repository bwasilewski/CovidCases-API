const fs = require('fs')
const path = require('path')
const csv = require('csv-parser')

const filterByState = (slug, results) => {
	return results.filter(result => result.Province_State === slug)  
}

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
	}
}
