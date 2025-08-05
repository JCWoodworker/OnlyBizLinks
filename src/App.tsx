import { Route, Routes } from "react-router-dom"

import "./app.css"

import PublicHome from "./web-app/public-home/PublicHome"
import BizPageWrapper from "./web-app/biz-page/BizPageWrapper"
import NotFound from "./web-app/NotFound"
import { createContext } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const environmentUrlContext = createContext<string>("")

function App() {
	const environment = import.meta.env.VITE_ENVIRONMENT
	let environmentUrl = ""
	if (environment === "dev") {
		environmentUrl = import.meta.env.VITE_BACKEND_URL_DEV
	} else if (environment === "preprod") {
		environmentUrl = import.meta.env.VITE_BACKEND_URL_PREPROD
	} else if (environment === "prod") {
		environmentUrl = import.meta.env.VITE_BACKEND_URL_PROD
	} else {
		environmentUrl = import.meta.env.VITE_BACKEND_URL_PROD
	}

	return (
		<div>
			<Routes>
				<Route path="/" element={<PublicHome />} />
				<Route path={`/:businessDomain`} element={<BizPageWrapper />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
