import { FC, useState } from 'react';
import { setCredentials } from '../store/reducers/authSlice';
import { useLoginMutation } from '../services/AuthService';
import { useAppDispatch } from '../hooks/redux';
import { useNavigate } from 'react-router-dom';
import jwt from 'jwt-decode'
import { IUser } from '../models/User';


const Login: FC = () => {
	const [username, setUsername] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [errorMsg, setErrorMsg] = useState('')
	const navigate = useNavigate()

	const [login, { isLoading }] = useLoginMutation()
	const dispatch = useAppDispatch()

	if (isLoading)
		return <h1>Loading...</h1>

	return (
		<div>
			<p>{errorMsg}</p>
			<input
				type="text"
				value={username}
				onChange={(e) => {
					setUsername(e.target.value)
				}}
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => {
					setPassword(e.target.value)
				}}
			/>
			<button onClick={async (e) => {
				e.preventDefault()
				setErrorMsg('')

				try {
					const userData = await login({ username, password }).unwrap()
					const token = userData.accessToken
					const user: IUser = jwt(token)
					dispatch(setCredentials({ ...userData, user }))
					setUsername('')
					setPassword('')
					navigate('/')
				} catch (err: any) {
					console.log(err)
					if (err) {
						if (err.status === 401) {
							setErrorMsg('Неправильный логин или пароль')
						} else if (err.status === 'FETCH_ERROR') {
							setErrorMsg('Не удалось установить соединение с сервером')
						} else {
							setErrorMsg('Неизвестная ошибка, напишите Ярославу')
						}
					} else {
						setErrorMsg('Неизвестная ошибка, напишите Ярославу')
					}
				}
			}
			}>Войти</button>
		</div >
	)
}

export default Login