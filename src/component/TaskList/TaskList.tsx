import { FC, useState } from 'react'
import { ITask } from '../../models/Task'
import { useCreateTaskMutation, useFetchAllTaskQuery } from '../../services/TaskService'
import TaskItem from './TaskItem/TaskItem'


const TaskList: FC = () => {
	const [text, setText] = useState<string>('')
	const { data: tasks, error, isLoading } = useFetchAllTaskQuery('ALL')
	const [createTask] = useCreateTaskMutation()
	return (
		<div>
			<input type="text" value={text} onChange={(e) => setText(e.target.value)} />
			<button onClick={async () => {
				const task: ITask = { id: 0, text: text, status: false }
				if (text !== '') {
					await createTask(task)
					setText('')
				}
			}}>Добавить</button>
			{isLoading && <h1>Идет загрузка...</h1>}
			{error && <h1>Произошла ошибка при загрузке</h1>}
			{tasks && tasks.map(task => (
				<TaskItem key={task.id} task={task} />
			))}
		</div>
	)
}

export default TaskList