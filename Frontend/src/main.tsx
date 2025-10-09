/* import { StrictMode } from "react"
import { createRoot } from "react-dom/client" */
import { Provider } from "react-redux"
import { App } from "./App"
import { store } from "./app/store"
import "./index.css"

const container = document.getElementById("root")
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

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Outlet />
			</>
		),
		children: [
			{ path: '/', element: <App /> },
			{ path: '/about', element: <App /> },
			{ path: '/logement/:id', element: <App /> },
			{ path: '/404', element: <App /> },
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