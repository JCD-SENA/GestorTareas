import { createContext, useState } from "react";

const context = createContext() 

export const TaskContext = context
export const TaskProvider = ({ children }) => {
	const [ tasksList, setTasks ] = useState([])

	return (
		<context.Provider value={{ tasksList, setTasks }}>
			{children}
		</context.Provider>
	)
}