module.exports = {
	filterByDate: (date, dataset) => {
		let filtered = []
		dataset.forEach(item => {
			if ( item[date] ) {
				filtered.push({
					'Province/State': item['Province/State'],
					'Country/Region': item['Country/Region'], 
					'Lat': item['Lat'],
					'Long': item['Long'],
					'State/Province': item['State/Province'],
					'total': item[date]
				})
		}})
		return filtered
	},
}
