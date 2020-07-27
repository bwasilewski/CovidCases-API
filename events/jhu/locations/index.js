const path = require('path')
const { getCSV } = require('../../')
const filePath = path.join(__dirname, '../../../data/csse_covid_19_data/UID_ISO_FIPS_LookUp_Table.csv')


module.exports = {
	getLocation: l => {
		return new Promise((resolve, reject) => {
			getCSV(filePath)
				.then(response => {
					let out = []
					if ( l.admin2 ) {
						out = response.filter(i => i.Admin2 === l.admin2)
					} else if ( l.province ) {
						out = response.filter(i => i.Province_State === l.province && i.Admin2 === null)
					} else if ( l.country ) {
						out = response.filter(i => i.Country_Region === l.country && i.Admin2 === null && i.Province_State === null)
					}
					resolve(out)
				})
				.catch(err => reject(err))
		})
	}
}
