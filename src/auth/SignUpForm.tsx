import { Box, Button, CircularProgress, TextField } from "@mui/material"
import { useState } from "react"
import { SignUpPayload } from "../stores/AuthStore"
import CustomDialog from "../custom-components/CustomDialog"
import { useNavigate } from "react-router-dom"
import { validateSignUpPayload } from "./validation"
import { useAppStore } from "../stores/AppStore"

const SignUpForm = () => {
	const [signUpFormData, setsignUpFormData] = useState({
		email: "",
		password: "",
		signUpOrIn: "signup",
	})
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)
	const [openDialog, setOpenDialog] = useState(false)
	const resetForm = () => {
		setsignUpFormData({ email: "", password: "", signUpOrIn: "signup" })
	}
	const navigate = useNavigate()
	const { backendUrl } = useAppStore()

	const sendSignUpData = async (
		// TODO: Move this function to authStore

		event: React.FormEvent<HTMLFormElement>,
		payload: SignUpPayload
	) => {
		event.preventDefault()

		const validationError = validateSignUpPayload(payload)
		if (validationError) {
			setError(validationError)
			return
		}
		try {
			setError("")
			setLoading(true)
			const response = await fetch(
				`${backendUrl}/api/v1/authentication/sign-up`,
				{
					method: "post",
					body: JSON.stringify(payload),
					headers: new Headers({
						"Content-Type": "application/json",
					}),
				}
			)
			if (!response.ok) {
				setError("There was a problem signing up")
				setLoading(false)
				return
			}

			const data = await response.json()

			// pausing for 2 seconds for effect
			await new Promise((resolve) => setTimeout(resolve, 2000))
			resetForm()
			setError("")
			setLoading(false)
			setOpenDialog(true)

			await new Promise((resolve) => setTimeout(resolve, 2000))
			navigate("/signin")

			return data
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: "10px",
			}}
		>
			{error && <p>{error}</p>}
			{loading ? (
				<CircularProgress />
			) : (
				<form onSubmit={(event) => sendSignUpData(event, signUpFormData)}>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							placeItems: "center",
							width: "100%",
							gap: "10px",
						}}
					>
						<input type="text" defaultValue="signUp" hidden />
						<TextField
							label="Email"
							name="email"
							onChange={(e) =>
								setsignUpFormData({ ...signUpFormData, email: e.target.value })
							}
						/>
						<TextField
							label="Password"
							name="password"
							style={{ height: "30px", width: "100%" }}
							onChange={(e) =>
								setsignUpFormData({
									...signUpFormData,
									password: e.target.value,
								})
							}
						/>
						<Button type="submit" name="signUpOrIn" sx={{ marginTop: "20px" }}>
							Sign Up
						</Button>
					</Box>
				</form>
			)}
			<CustomDialog
				openDialog={openDialog}
				setOpenDialog={setOpenDialog}
				title="Sign Up Successful !!"
				content="Re-directing you to the sign in page"
			/>
		</Box>
	)
}

export default SignUpForm
