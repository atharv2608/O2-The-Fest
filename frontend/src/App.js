import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AccountPageM from './pages/AccountPageM';
import DashBoard from './pages/DashBoard';
import EventsPage from './pages/EventsPage';
import GalleryPage from './pages/GalleryPage';
import HomePage from './pages/HomePage';
import LoginPage, { action as loginAction } from './pages/LoginPage';
import { action as logoutAction } from './pages/Logout';
import RootLayout from './pages/RootLayout';
import SponsorsPage from './pages/SponsorsPage';
import TeamsPage from './pages/TeamsPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'events', element: <EventsPage /> },
			{ path: 'teams', element: <TeamsPage /> },
			{ path: 'sponsors', element: <SponsorsPage />, action: loginAction },
			{ path: 'auth', element: <LoginPage />, action: loginAction },
			{ path: 'account', element: <AccountPageM />, action: loginAction },
			{ path: 'gallery', element: <GalleryPage />, action: loginAction },
			{
				path: 'logout',
				action: logoutAction,
			},
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
