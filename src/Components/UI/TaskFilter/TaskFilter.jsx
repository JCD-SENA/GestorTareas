import { useContext } from "react"

import { FilterContext } from "../../../Context/filter"

export const listActive = (list) => {
	return list.filter((task) => task.done)
}

export const listInactive = (list) => {
	return list.filter((task) => !task.done)
}

export const TaskFilter = () => {
	const { filter, setFilter } = useContext(FilterContext)

	return (
		<select onChange={(e)=>setFilter(e.target.value)}>
			<option value="0">Todas las tareas</option>
			<option value="1">Pendientes</option>
			<option value="2">Terminadas</option>
		</select>
	)
}