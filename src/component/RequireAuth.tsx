import { FC } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'

interface securityParams {
	allowedRoles: string[]
	authPaths: boolean
}

const RequireAuth: FC<securityParams> = ({ allowedRoles, authPaths }) => {
	const token = useAppSelector((state) => state.auth.accessToken)
	const user = useAppSelector((state) => state.auth.user)
	const location = useLocation()

	if (authPaths)
		return token ? <Navigate to={"/"} /> : <Outlet />

	return (
		user
			? allowedRoles?.includes(user.role)
				? <Outlet />
				: <Navigate to={"/forbidden"} state={{ from: location }} replace />
			: <Navigate to={"/login"} state={{ from: location }} replace />
	)
}

export default RequireAuth