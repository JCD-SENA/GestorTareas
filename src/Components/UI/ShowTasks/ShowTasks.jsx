import { useContext } from "react"

import { TaskFilter } from "../TaskFilter/TaskFilter"
import { TaskContext } from "../../../Context/tasks"
import { Task } from "./Task/Task"
import { FilterContext } from "../../../Context/filter"

export const ShowTasks = () => {
	const { tasksList } = useContext(TaskContext)
	const { filter } = useContext(FilterContext)

	return (<>
		<TaskFilter/>
		<div id="taskList">
			{tasksList.length > 0 ? "" : "No hay tareas"}
			{tasksList.map((task, pos) => {
				console.log(task.done)
				if (filter == 0 || (filter == 1 && !task.done) || (filter == 2 && task.done))
					return (<Task title={task.title} position={pos} done={task.done}>{task.description}</Task>)
			})}
		</div>
	</>)
}