const { GlobalByDate, CountryByDate } = require('./confirmed')


test('CountryByDate: Results', () => {
	return CountryByDate('Albania', '7/18/20')
		.then(response => {
			expect(response.length).toBe(1) 
			expect(response[0]['Country/Region']).toBeDefined()
			expect(response[0]['total']).toBeDefined()
		})
})

test('CountryByDate: No Results', () => {
	return CountryByDate('Albania', '7/18/16')
		.then(response => {
			expect(response.length).toBe(0)
		})
})

test('GlobalByDate', () => {
  return GlobalByDate('7/18/20')
		.then(response => {
			expect(response.length).toBeGreaterThan(0)
		})
})

