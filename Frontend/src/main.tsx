/* import { StrictMode } from "react"
import { createRoot } from "react-dom/client" */
import { Provider } from "react-redux"
import { App } from "./App"
import { store } from "./app/store"
import "./sass/root.scss"

import Header from './containers/header/Header';
import Footer from "./containers/footer/Footer";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import Parameters from "./pages/account_parameters/AccountParameters";
import Transaction from "./pages/account_transaction/AccountTransaction";
import NotFound from "./pages/not_found/NotFound";

/* 
if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
} */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom'

const container = document.getElementById("root")

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Header />
				<Outlet />
				<Footer />
			</>
		),
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/login', element: <Login /> },
			{ path: '/account', element: <Account /> },
			{ path: '/account/parameters', element: <Parameters /> },
			{ path: '/account/transaction/:id', element: <Transaction /> },
			{ path: '/app', element: <App /> },
			{ path: '/404', element: <NotFound /> },
			{ path: '*', element: <Navigate to="/404" replace /> },
		],
	},
])

if (container) {
ReactDOM.createRoot(container).render(
	<React.StrictMode>
    <Provider store={store}>
		  <RouterProvider router={router} />      
    </Provider>
	</React.StrictMode>
)
}else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}