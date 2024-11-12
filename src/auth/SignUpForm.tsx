import { Box } from "@mui/material"
import { useState } from "react"
import { SignUpPayload } from "../stores/AuthStore"

const SignUpForm = () => {
	const [signUpFormData, setsignUpFormData] = useState({
		email: "",
		password: "",
		signUpOrIn: "signup",
	})

	const sendSignUpData = async (
		event: React.FormEvent<HTMLFormElement>,
		payload: SignUpPayload
	) => {
		event.preventDefault()
		try {
			const response = await fetch(
				"http://localhost:3000/api/v1/authentication/sign-up",
				{
					method: "post",
					body: JSON.stringify(payload),
					headers: new Headers({
						"Content-Type": "application/json",
					}),
				}
			)

			if (!response.ok) {
				console.error("There was a problem signing up")
			}

			const message = response.json()

			return message
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<Box
			sx={{
				padding: "10px",
			}}
		>
			<form onSubmit={(event) => sendSignUpData(event, signUpFormData)}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						placeItems: "center",
						width: "100%",
						gap: 1,
					}}
				>
					<input
						type="text"
						name="email"
						placeholder="email"
						style={{ height: "30px", width: "100%" }}
						onChange={(e) =>
							setsignUpFormData({ ...signUpFormData, email: e.target.value })
						}
					/>
					<input
						type="text"
						name="password"
						placeholder="password"
						style={{ height: "30px", width: "100%" }}
						onChange={(e) =>
							setsignUpFormData({ ...signUpFormData, password: e.target.value })
						}
					/>
					<input type="text" defaultValue="signUp" hidden />
					<button type="submit" name="signUpOrIn" style={{ height: "30px" }}>
						Submit Form
					</button>
				</Box>
			</form>
		</Box>
	)
}

export default SignUpForm
