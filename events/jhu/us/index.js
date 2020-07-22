module.exports = {
	filterByDate: (date, dataset) => {
		let filtered = []
		dataset.forEach(result => {
			if ( result[date] ) {
				let reduced = {
					"UID": result.UID,
					"iso2": result.iso2,
					"iso3": result.iso3,
					"code3": result.code3,
					"FIPS": result.FIPS,
					"Admin2": result.Admin2,
					"Province_State": result.Province_State,
					"Country_Region": result.Country_Region,
					"Lat": result.Lat,
					"Long_": result.Long_,
					"Combined_Key": result.Combined_Key
				}
				reduced[date] = date
				filtered.push(reduced)
			} 
		})
		return filtered
	}
}
