import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { ProductProvider } from "./products/ProductProvider"
import { ProductList } from "./products/ProductList"
import { ProductTypeProvider } from "./products/ProductTypeProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = props => {
	return (
		<>
			<ProductTypeProvider>
				<ProductProvider>
					<Route exact path="/products">
						<ProductList />
					</Route>
				</ProductProvider>
			</ProductTypeProvider>
			<LocationProvider>
				<Route exact path="/">
					<LocationList />
				</Route>
			</LocationProvider>
			<LocationProvider>
				<EmployeeProvider>
					<Route exact path="/employees" render={
						props => <EmployeeList {...props} />
					} />
					<Route exact path="/employees/create" render={
						props => <EmployeeForm {...props} />
					} />
				</EmployeeProvider>
			</LocationProvider>
		</>
	)
}