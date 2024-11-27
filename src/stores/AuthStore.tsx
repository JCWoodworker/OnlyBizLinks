import { create } from "zustand"
import { useAppStore } from "./AppStore"

type BusinessDataType = {
	id: number
	domain: string
	name: string
	logo: string
	socialLinks: SocialLinkType[]
	customLinks: CustomLinkType[]
}

type SocialLinkType = {
	id: number
	business_id: number
	social_media_platform: string
	isActive: boolean
	url: string
}

type CustomLinkType = {
	id: number
	business_id: number
	title: string
	url: string
}

type UserInfoType = {
	firstName: string
	lastName: string
	imageUrl: string
	role: string
}

type TokenType = {
	accessToken: string
	refreshToken: string
}

type AuthDataType = {
	userInfo: UserInfoType
	tokens: TokenType
}

type AuthState = {
	authData: AuthDataType | null
	isAuthenticated: boolean
	persistAuth: boolean
	userBusinessData: BusinessDataType[]
	setAuthData: (authData: AuthDataType) => void
	setIsAuthenticated: (isAuthenticated: boolean) => void
	setPersistAuth: (persistAuth: boolean) => void
	setUserBusinessData: (userBusinessData: BusinessDataType[]) => void
	signOut: () => void
	refreshAuthData: () => Promise<void>
}

export type SignUpPayload = {
	email: string
	password: string
	signUpOrIn: string
}

export type SignInPayload = {
	email: string
	password: string
	signUpOrIn: string
}

export const useAuthStore = create<AuthState>((set, get) => ({
	authData: null,
	isAuthenticated: false,
	persistAuth: false,
	userBusinessData: [],
	setAuthData: (authData: AuthDataType) =>
		set((state: AuthState) => ({ ...state, authData })),
	setIsAuthenticated: (isAuthenticated: boolean) =>
		set((state: AuthState) => ({ ...state, isAuthenticated })),
	setPersistAuth: (persistAuth: boolean) =>
		set((state: AuthState) => ({ ...state, persistAuth })),
	setUserBusinessData: (userBusinessData: BusinessDataType[]) =>
		set((state: AuthState) => ({ ...state, userBusinessData })),
	signOut: () => {
		localStorage.removeItem("authData")
		set((state: AuthState) => ({
			...state,
			authData: null,
			isAuthenticated: false,
			persistAuth: false,
		}))
	},
	refreshAuthData: async () => {
		const { authData } = get()
		const { backendUrl } = useAppStore.getState()

		if (!authData) {
			return
		}

		try {
			const response = await fetch(
				`${backendUrl}/api/v1/authentication/refresh-tokens`,
				{
					method: "POST",
					body: JSON.stringify({ refreshToken: authData.tokens.refreshToken }),
					headers: new Headers({
						"Content-Type": "application/json",
					}),
				}
			)

			if (!response.ok) {
				console.error("Failed to refresh auth data - clearing local storage")
				localStorage.removeItem("authData")
				set((state) => ({
					...state,
					authData: null,
					isAuthenticated: false,
					persistAuth: false,
				}))
				return
			}

			const data = await response.json()

			localStorage.setItem("authData", JSON.stringify(data))
			const businessData = data.businesses ? data.businesses : []

			set((state) => ({
				...state,
				authData: data.authData,
				isAuthenticated: true,
				userBusinessData: businessData
			}))
		} catch (error) {
			console.error(error)
		}
	},
}))
