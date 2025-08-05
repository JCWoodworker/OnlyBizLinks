import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./app.css"

import PublicHome from "./web-app/public-home/PublicHome"
import BizPageWrapper from "./web-app/biz-page/BizPageWrapper"
import NotFound from "./web-app/NotFound"


function App() {
	return (
		<Box>
			<Routes>
				<Route path="/" element={<PublicHome />} />
				<Route path={`/:businessDomain`} element={<BizPageWrapper />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Box>
	)
}

export default App
