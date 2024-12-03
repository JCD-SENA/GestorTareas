import { useState, useContext, useEffect } from "react"

import { TaskContext } from "../../../Context/tasks"

export const TaskEditor = () => {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const { tasksList, setTasks } = useContext(TaskContext)

	return (<form id="TaskEditor" onSubmit={(e)=>{
		e.preventDefault()
		if (title.length > 0 && description.length > 0) {
			setTasks([...tasksList,{
				"title": title,
				"description": description,
				"done": false
			}])
			//alert(`Se ha añadido la tarea "${title}"`)
		} else {
			alert("Se deben ingresar los campos")
		}
	}}>
		<label>Título</label>
		<input onChange={(e) => {setTitle(e.target.value)}}/>
		<label>Descripción</label>
		<textarea onChange={(e) => {setDescription(e.target.value)}}/>
		<input type="submit" value="Crear tarea"/>
	</form>)
}