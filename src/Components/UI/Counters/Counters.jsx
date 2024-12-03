import { useContext, useEffect, useState } from "react"

import { listActive, listInactive } from "../TaskFilter/TaskFilter"
import { TaskContext } from "../../../Context/tasks"

export const Counters = () => {
	const [ finished, setFinished ] = useState(0)
	const [ unfinished, setUnfinished ] = useState(0)
	const { tasksList } = useContext(TaskContext)

	useEffect(() => {
		setFinished(listActive(tasksList).length)
		setUnfinished(listInactive(tasksList).length)
	}, [tasksList])

	return (<div className="counters">
		<span>Tareas terminadas <b style={{
			color: "#478f5c"
		}}>{finished}</b></span>
		<span>Tareas sin terminar <b style={{
			color: "#a8b3bd"
		}}>{unfinished}</b></span>
	</div>)
}