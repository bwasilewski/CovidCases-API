const { getGlobal, getCountry } = require('./recovered')
const countryA = 'Albania'
const countryB = 'Australia'
const successDate = '7/18/20'
const failDate = '7/18/10'

describe('= Recovered =', () => {
	describe('getCountry', () => {
		it('should return an array with a single object', () => {
			return getCountry(countryA)
				.then(response => {
					expect(response.length).toBe(1) 
					expect(response[0]['Country/Region']).toBeDefined()
				})
		})

		it('should get the total for a single day', () => {
			return getCountry(countryA, successDate)
				.then(response => {
					expect(response.length).toBe(1) 
					expect(response[0]['Country/Region']).toBeDefined()
					expect(response[0]['total']).toBeDefined()
				})
		})

		it('should return an empty list when it cant find a given date', () => {
			return getCountry(countryA, failDate)
				.then(response => expect(response.length).toBe(0))
		})

		it('should return a list of objects with all available dates', () => {
			return getCountry(countryB)
				.then(response => {
					expect(response.length).toBeGreaterThan(1)
					response.forEach(result => {
						expect(result['Province/State']).toBeDefined()
						expect(result['Country/Region']).toBeDefined()
						expect(result.Lat).toBeDefined()
						expect(result.Long).toBeDefined()
						expect(result['1/22/20']).toBeDefined()
						expect(result['7/18/20']).toBeDefined()
					})
				})
		})

		it('should return a list of objects with a single date property', () => {
			return getCountry(countryB, successDate)
				.then(response => {
					expect(response.length).toBeGreaterThan(1)
					response.forEach(result => {
						expect(result['Province/State']).toBeDefined()
						expect(result['Country/Region']).toBeDefined()
						expect(result.Lat).toBeDefined()
						expect(result.Long).toBeDefined()
						expect(result.total).toBeDefined()
						expect(Object.keys(result).length).toBe(6)
					})
				})
		})
	})


	describe('getGlobal', () => {
		it(`should return a list of objects that contain all historical data`, () => {
			return getGlobal()
				.then(response => {
					expect(response.length).toBeGreaterThan(1)
				
					response.forEach(result => {
						expect(result['Province/State']).toBeDefined()
						expect(result['Country/Region']).toBeDefined()
						expect(result['Lat']).toBeDefined()
						expect(result['Long']).toBeDefined()
						expect(Object.keys(result).length).toBeGreaterThan(184)
					})
				})
		})

		it(`should return a list of objects that contain the value of a specific date`, () => {
			return getGlobal(successDate)
				.then(response => {
					expect(response.length).toBeGreaterThan(1)
				})
		})

		it(`should return an empty list if a given date cannot be found`, () => {
			return getGlobal(failDate)
				.then(response => {
					expect(response.length).toBe(0)
				})
		})
	})
})
