import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./app.css"

import PublicHome from "./web-app/public-home/PublicHome"
import BizPageWrapper from "./web-app/biz-page/BizPageWrapper"

import { useAppStore } from "./stores/AppStore"

function App() {
	const initializeApp = useAppStore((state) => state.initializeApp)

	useEffect(() => {
		initializeApp()
	}, [initializeApp])

	return (
		<>
			<Routes>
				<Route path="/" element={<PublicHome />} />
				<Route path={`/:businessDomain`} element={<BizPageWrapper />} />
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</>
	)
}

export default App
