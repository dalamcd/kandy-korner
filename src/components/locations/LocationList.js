import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"

export const LocationList = () => {
	
	const {locations, getLocations} = useContext(LocationContext);

	useEffect(() => {
		getLocations();
	}, [])

	return (
		<>
		<h1>Locations</h1>
		<div className="locationList">
			{locations.map(loc => <Location key={loc.id} location={loc} />)}
		</div>
		</>
	)
}