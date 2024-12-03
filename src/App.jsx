import { useState } from "react"

import { TaskEditor } from "./Components/UI/TaskEditor/TaskEditor"
import { ShowTasks } from "./Components/UI/ShowTasks/ShowTasks"
import { TaskProvider } from "./Context/tasks"
import { FilterProvider } from "./Context/filter"
import { Counters } from "./Components/UI/Counters/Counters"

function App() {
	return (
		<TaskProvider>
			<FilterProvider>
				<h1>Gestor de tareas</h1>
				<Counters></Counters>
				<TaskEditor/>
				<ShowTasks/>
			</FilterProvider>
		</TaskProvider>
	)
}

export default App
