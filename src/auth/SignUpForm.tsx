import { Box } from "@mui/material"
import { useAuthStore } from "../stores/AuthStore"
import { useState } from "react"

const SignUpForm = () => {
	const { signUserUp } = useAuthStore()
	const [signUpFormData, setsignUpFormData] = useState({
    email: "",
    password: "",
    signUpOrIn: "signup"
  })

	return (
		<Box
			sx={{
				padding: "10px",
			}}
		>
			<form onSubmit={() => signUserUp(signUpFormData)}>
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
					<button
						type="submit"
            name="signUpOrIn"
						style={{ height: "30px" }}
					>
						Submit Form
					</button>
				</Box>
			</form>
		</Box>
	)
}

export default SignUpForm
