import { useContext } from "react"

import { TaskContext } from "../../../../Context/tasks"

export const Task = ({ title, position, children, done }) => {
	const { tasksList, setTasks } = useContext(TaskContext)

	return (<div className="task">
		<div className="taskTitle">
			<b>{title}</b>
			<input type="checkbox" defaultChecked={done} onChange={
				(e) => {
					let newTaskList = [...tasksList]
					newTaskList[position].done = e.target.checked
					setTasks(newTaskList)
				}
			}/>
		</div>
		<p>{children}</p>
	</div>)
}