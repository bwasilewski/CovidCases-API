const { GlobalByDate, CountryByDate } = require('./jhu')


test('CountryByDate', () => {
	CountryByDate('Albania', '7/18/20')
		.then(response => {
			expect(response.length).toBe(1) 
			expect(response[0]['Country/Region']).toBeDefined()
			expect(response[0]['total']).toBeDefined()
		})
})

/*
test('GlobalByDate', () => {
  GlobalByDate('7/18/20')
		.then(response => {
			expect(response).toBeGreaterThan()
		})
})
*/

