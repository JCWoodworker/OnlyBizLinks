import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./app.css"

import PublicHome from "./web-app/public-home/PublicHome"
import BizPageWrapper from "./web-app/biz-page/BizPageWrapper"
import Loading from "./custom-components/Loading"
import SignUp from "./auth/SignUp"
import SignIn from "./auth/SignIn"

import { useAppStore } from "./stores/AppStore"
import NotFound from "./web-app/NotFound"

function App() {
	const initializeApp = useAppStore((state) => state.initializeApp)
	const configLoaded = useAppStore((state) => state.configLoaded)

	useEffect(() => {
		initializeApp()
	}, [initializeApp])

	return (
		<>
			{!configLoaded && <Loading />}
			<Routes>
				<Route path="/" element={<PublicHome />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="signin" element={<SignIn />} />
				<Route path={`/:businessDomain`} element={<BizPageWrapper />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
