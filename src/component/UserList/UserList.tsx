import { FC, useState } from 'react'
import { IUser } from '../../models/User'
import { useAddUserMutation, useFetchAllUserQuery } from '../../services/UserService'
import UserItem from './UserItem/UserItem'


const UserList: FC = () => {
	const [name, setName] = useState<string>('')
	const [username, setUsername] = useState<string>('')
	const [role, setRole] = useState<string>('ROLE_USER')
	const { data: users, error, isLoading } = useFetchAllUserQuery('')
	const [addUser] = useAddUserMutation()
	return (
		<div>
			<div>
				<label>Имя</label>
				<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
				<label>Username</label>
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				<select value={role} onChange={(e) => setRole(e.target.value)}>
					<option value="ROLE_USER">Обычный пользователь</option>
					<option value="ROLE_ADMIN">Администратор</option>
				</select>
				<button onClick={async () => {
					const task: IUser = { id: 0, name: name, username: username, role: role }
					if (name !== '' && username !== '')
						try {
							const res = await addUser(task).unwrap()
							alert("Пароль: " + res.password)
						} catch (error) {
							alert("Ошибка: " + error)
						}
					setName('')
					setUsername('')
				}}>Добавить пользователя</button>
			</div>
			{isLoading && <h1>Идет загрузка...</h1>}
			{error && <h1>Произошла ошибка при загрузке</h1>}
			{users && users.map(user => (
				<UserItem key={user.id} user={user} />
			))}
		</div>
	)
}

export default UserList