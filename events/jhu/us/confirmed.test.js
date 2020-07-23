const { getUS, getState, getCounty } = require('./confirmed')
const successDate = '7/18/20'
const failDate = '7/18/10'

describe('= Confirmed =', () => {
	describe('getUS', () => {
		/*
		it('should return an array with a single object', () => {
			return getUS()
				.then(response => {
					expect(response.length).toBe(1) 
				})
		})
		*/

		it(`should return a list with a single object that has all historical data`, () => {
			return getUS()
				.then(response => {
					expect(response.length).toBe(1)
				
					response.forEach(result => {
						expect(result['Province/State']).toBeDefined()
						expect(result['Country/Region']).toBeDefined()
						expect(result['Lat']).toBeDefined()
						expect(result['Long']).toBeDefined()
						expect(Object.keys(result).length).toBeGreaterThan(184)
					})
				})
		})

		// TODO this test description is not actually being tested
		it(`should return a list with a single object that contains the value of a specific date`, () => {
			return getUS(successDate)
				.then(response => {
					expect(response.length).toBe(1)
				})
		})

		it(`should return an empty list if a given date cannot be found`, () => {
			return getUS(failDate)
				.then(response => {
					expect(response.length).toBe(0)
				})
		})
  })
})



