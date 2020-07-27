const { getCSV, filterByCountry } = require('./index')
const path = require('path')
const filePath = path.join(__dirname, '../testdata/test.csv')  
const errorFilePath = path.join(__dirname, '../testdata/testerror.csv')

describe('filterByCountry', () => {
	let testCountry = 'Albania'
	let dataSet = [
	 { 'Country/Region': 'Albania' },
	 { 'Country/Region': 'Albania' },
	 { 'Country/Region': 'Australia' },
	 { 'Country/Region': 'US' }
	]

	it('should return a list of objects whose `Country/Region` property matches the given country', () => {
		expect(filterByCountry(testCountry, dataSet)).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ 'Country/Region': 'Albania' }),
				expect.objectContaining({ 'Country/Region': 'Albania' })
			]))		

		expect(filterByCountry('Australia', dataSet)).toEqual(
			expect.arrayContaining([
				expect.objectContaining({ 'Country/Region': 'Australia' })
			]))
	})
})

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
	
  /*
	it('should gracefully handle a parsing error', () => {
		return getCSV(errorFilePath)
			.then(response => console.log(response))
			.catch(err => {
				console.log(err)
			})
	})
  */
})
