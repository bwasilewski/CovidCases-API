const path = require('path')
const { getCSV } = require('../../')
const filePath = path.join(__dirname, '../../../data/csse_covid_19_data/UID_ISO_FIPS_LookUp_Table.csv')


module.exports = {
	getLocation: l => {
		console.log(l)
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(response => {
					let out = []
					if ( l.admin2 ) {
						out = response.filter(i => 
							i.Admin2 === l.admin2 && 
							i.Province_State === l.province && 
							i.Country_Region === l.country)
					} else if ( l.province ) {
						console.log('province')
						out = response.filter(i => 
							i.Province_State === l.province && 
							i.Country_Region === l.country &&
							i.Admin2 === null)
					} else if ( l.country ) {
						out = response.filter(i => 
							i.Country_Region === l.country && 
							i.Admin2 === null && 
							i.Province_State === null)
					}
					resolve(out[0])
				})
				.catch(err => reject(err))
		})
	}
}
