import { Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Login from './pages/Login';
import RequireAuth from './component/RequireAuth';
import AdminPage from './pages/AdminPage';
import MainPage from './pages/MainPage';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route element={<RequireAuth allowedRoles={[]} authPaths={true} />}>
					<Route path="login" element={<Login />} />
				</Route>

				<Route element={<RequireAuth allowedRoles={['ROLE_USER', 'ROLE_ADMIN']} authPaths={false} />}>
					<Route index element={<MainPage />} />
				</Route>

				<Route element={<RequireAuth allowedRoles={['ROLE_ADMIN']} authPaths={false} />}>
					<Route path="admin" element={<AdminPage />} />
				</Route>
			</Route>
		</Routes>
	);
}

export default App;
