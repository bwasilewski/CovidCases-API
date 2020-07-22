const { getGlobal, getCountry } = require('./confirmed')


describe('getCountry', () => {
	test('should return an array with a single object', () => {
		return getCountry('Albania')
			.then(response => {
				expect(response.length).toBe(1) 
				expect(response[0]['Country/Region']).toBeDefined()
			})
	})

	test('should get the total for a single day', () => {
		return getCountry('Albania', '7/18/20')
			.then(response => {
				expect(response.length).toBe(1) 
				expect(response[0]['Country/Region']).toBeDefined()
				expect(response[0]['total']).toBeDefined()
			})
	})

	test('should return an empty array when it cant find a given date', () => {
		return getCountry('Albania', '7/18/16')
			.then(response => {
				expect(response.length).toBe(0)
			})
	})
})


describe('getGlobal', () => {
	test('should return an array with a single object', () => {
		return getGlobal('7/18/20')
			.then(response => {
				expect(response.length).toBeGreaterThan(0)
			})
	})
})
