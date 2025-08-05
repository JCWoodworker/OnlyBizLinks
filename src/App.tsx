import { Route, Routes } from "react-router-dom"

import "./app.css"

import PublicHome from "./web-app/public-home/PublicHome"
import BizPageWrapper from "./web-app/biz-page/BizPageWrapper"
import NotFound from "./web-app/NotFound"


function App() {
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
