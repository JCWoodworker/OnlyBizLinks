import { Box, Button, CircularProgress, TextField } from "@mui/material"
import { useState } from "react"
import { SignInPayload } from "../stores/AuthStore"
import { useAuthStore } from "../stores/AuthStore"
import { useNavigate } from "react-router-dom"
import { useAppStore } from "../stores/AppStore"

const SignInForm = () => {
	const [signInFormData, setSignInFormData] = useState({
		email: "",
		password: "",
		signUpOrIn: "signin",
	})
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const { setAuthData, setIsAuthenticated, setUserBusinessData } =
		useAuthStore()
	const { backendUrl } = useAppStore()
	const navigate = useNavigate()

	const sendSignInData = async (
		// TODO: Move this function to authStore

		event: React.FormEvent<HTMLFormElement>,
		payload: SignInPayload
	) => {
		event.preventDefault()

		try {
			setLoading(true)
			setError("")
			// TODO: use env variables here
			const response = await fetch(
				`${backendUrl}/api/v1/authentication/sign-in`,
				{
					method: "post",
					body: JSON.stringify(payload),
					headers: new Headers({
						"Content-Type": "application/json",
					}),
				}
			)

			if (!response.ok) {
				setError("Invalid email or password")
				setLoading(false)
				return
			}

			const data = await response.json()
			localStorage.setItem("authData", JSON.stringify(data.authData))
			setAuthData(data.authData)
			setIsAuthenticated(true)
			if (data.businesses) {
				setUserBusinessData(data.businesses)
			}
			navigate(`/`)

			setLoading(false)
		} catch (error) {
			console.error(error)
			setError("New error, who dis??")
			setLoading(false)
		}
	}

	return (
		<>
			{error && <p>{error}</p>}
			{loading ? (
				<CircularProgress />
			) : (
				<form onSubmit={(event) => sendSignInData(event, signInFormData)}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: "10px",
						}}
					>
						<TextField
							label="Email"
							value={signInFormData.email}
							onChange={(e) =>
								setSignInFormData({ ...signInFormData, email: e.target.value })
							}
						/>
						<TextField
							type="password"
							label="Password"
							value={signInFormData.password}
							onChange={(e) =>
								setSignInFormData({
									...signInFormData,
									password: e.target.value,
								})
							}
						/>
						<Button type="submit">Sign In</Button>
					</Box>
				</form>
			)}
		</>
	)
}

export default SignInForm
