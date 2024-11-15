import { Box, Button, TextField } from "@mui/material"
import { useState } from "react"
import { SignInPayload } from "../stores/AuthStore"
import { useAuthStore } from "../stores/AuthStore"

const SignInForm = () => {
	const [signInFormData, setSignInFormData] = useState({
		email: "",
		password: "",
		signUpOrIn: "signin",
	})
	const { setAuthData, setIsAuthenticated } = useAuthStore()

	const sendSignInData = async (
		event: React.FormEvent<HTMLFormElement>,
		payload: SignInPayload
	) => {
		event.preventDefault()
		console.log(signInFormData)
		try {
			const response = await fetch(
				"http://localhost:3000/api/v1/authentication/sign-in",
				{
					method: "post",
					body: JSON.stringify(payload),
					headers: new Headers({
						"Content-Type": "application/json",
					}),
				}
			)
			const data = await response.json()
			setAuthData(data.authData)
			setIsAuthenticated(true)

		} catch (error) {
			console.error(error)
		}
	}

	return (
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
					label="Password"
					value={signInFormData.password}
					onChange={(e) =>
						setSignInFormData({ ...signInFormData, password: e.target.value })
					}
				/>
				<Button type="submit">Sign In</Button>
			</Box>
		</form>
	)
}

export default SignInForm
