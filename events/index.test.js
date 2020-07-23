const { getCSV } = require('./index')
const path = require('path')
const filePath = path.join(__dirname, '../testdata/test.csv')  

/*
	filterByCountry: (country, dataset) => {
		return dataset.filter( item => item['Country/Region'] === country )
	},
*/

// describe('filterByCountry', () => {})

describe('getCSV', () => {
	it('should accurately process a CSV file', () => {
		const match = [, ]
		return getCSV(filePath)
			.then(response => {
				expect(response).toEqual(
					expect.arrayContaining([
						expect.objectContaining({ foo: 1, bar: 2, baz: 3 }),
						expect.objectContaining({ foo: 'a', bar: 'b', baz: 'c' })
					])
				)
			})
	})
})
