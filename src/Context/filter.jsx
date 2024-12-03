import { createContext, useState } from "react";

const context = createContext() 

export const FilterContext = context
export const FilterProvider = ({ children }) => {
	const [ filter, setFilter ] = useState(0)

	return (
		<context.Provider value={{ filter, setFilter }}>
			{children}
		</context.Provider>
	)
}