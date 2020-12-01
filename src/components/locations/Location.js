import React from "react";

export const Location = ({ location }) => {
	return (
		<section className="location">
			<div className="locationAddress">{location.address}</div>
			<div className="locationHandicap">{`${location.handicap ? 'H' : `Not h`}andicap accessible`}</div>
		</section>
	)
}