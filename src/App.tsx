import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Box } from "@mui/material"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import "./app.css"

import PublicHome from "./web-app/public-home/PublicHome"
import BizPageWrapper from "./web-app/biz-page/BizPageWrapper"
import Loading from "./custom-components/Loading"
// import SignUp from "./auth/SignUp"
import SignIn from "./auth/SignIn"
import NotFound from "./web-app/NotFound"

import { useAppStore } from "./stores/AppStore"
import { useAuthStore } from "./stores/AuthStore"
import AuthenticatedHome from "./web-app/admin/AuthenticatedHome"

function App() {
	const initializeApp = useAppStore((state) => state.initializeApp)
	const configLoaded = useAppStore((state) => state.configLoaded)
	const {
		authData,
		setAuthData,
		isAuthenticated,
		setIsAuthenticated,
		refreshAuthData,
	} = useAuthStore()

	useEffect(() => {
		initializeApp()
	}, [initializeApp])

	useEffect(() => {
		const initializeAuth = async () => {
			const savedAuthData = localStorage.getItem("authData")

			if (savedAuthData === "undefined" || savedAuthData === "null") {
				localStorage.removeItem("authData")
				setIsAuthenticated(false)
				return
			}

			if (savedAuthData && !authData) {
				try {
					const receivedAuthData = JSON.parse(savedAuthData)
					setAuthData(receivedAuthData)
					setIsAuthenticated(true)

					// Attempt to refresh tokens to ensure they're still valid
					await refreshAuthData()
				} catch (error) {
					console.error("Failed to parse saved auth data:", error)
					localStorage.removeItem("authData")
					setIsAuthenticated(false)
				}
			} else if (!savedAuthData) {
				setIsAuthenticated(false)
			}
		}

		if (configLoaded) {
			initializeAuth()
		}
	}, [authData, setAuthData, setIsAuthenticated, refreshAuthData, configLoaded])

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
			}}
		>
			{!configLoaded ? (
				<Loading />
			) : (
				<Routes>
					{isAuthenticated ? (
						<Route path="/" element={<AuthenticatedHome />} />
					) : (
						<Route path="/" element={<PublicHome />} />
					)}

					{/* Clients will be signed up manually for the time being*/}
					{/* <Route path="signup" element={<SignUp />} /> */}

					<Route path="signin" element={<SignIn />} />
					<Route path={`/:businessDomain`} element={<BizPageWrapper />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			)}
		</Box>
	)
}

export default App
