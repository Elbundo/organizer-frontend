import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { setupStore } from './store/store';

const store = setupStore()


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</BrowserRouter>
	</Provider>
);
