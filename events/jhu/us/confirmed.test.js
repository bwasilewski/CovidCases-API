const { getUS, getState, getCounty } = require('./confirmed')
const successDate = '7/18/20'
const failDate = '7/18/10'

describe('= Confirmed =', () => {
	describe('getUS', () => {
		it('should return an array with a single object', () => {
			return getUS()
				.then(response => {
					expect(response.length).toBe(1) 
				})
		})
  })
})

