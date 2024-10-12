import { Route, Routes } from "react-router-dom"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./app.css"

import PublicHome from "./web-app/public-home/PublicHome"
import NotFound from "./web-app/NotFound"
import BizPageWrapper from "./web-app/biz-page/BizPageWrapper"

// TODO
/*
 * Fetch business data from database based on url param after forward slash
 * return 404 if no business is found
 * Hydrate business data and display their BizPage
 */

function App() {

	return (
		<>
			<Routes>
				<Route path="/" element={<PublicHome />} />
				<Route
					path={`/:businessDomain`}
					element={<BizPageWrapper />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
