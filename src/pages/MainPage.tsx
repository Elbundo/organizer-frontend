import { FC } from 'react'
import { Link } from 'react-router-dom'
import TaskList from '../component/TaskList/TaskList'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { apiSlice } from '../services/ApiService'
import { useLogoutMutation } from '../services/AuthService'
import { logOut } from '../store/reducers/authSlice'


const MainPage: FC = () => {
	const user = useAppSelector((state) => state.auth.user)
	const [logout] = useLogoutMutation()
	const dispatch = useAppDispatch()


	return (
		<>
			<p>Hello, {user?.name}</p>
			<Link to={"/admin"}>Admin panel</Link>
			<button onClick={async (e) => {
				e.preventDefault()
				await logout('').unwrap()
				dispatch(apiSlice.util.resetApiState())
				dispatch(logOut())
			}}>Выйти</button>
			<TaskList />
		</>
	)
}

export default MainPage