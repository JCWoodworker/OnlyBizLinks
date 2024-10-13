import { create } from "zustand"

type AppState = {
	environment: string
	backendUrl: string
	appInitialized: boolean
	appInitializationError: boolean
	initializeApp: () => void
}

export const useAppStore = create<AppState>((set) => ({
	environment: "",
	backendUrl: "",
	appInitialized: false,
	appInitializationError: false,
	initializeApp: () =>
		set((state) => {
			const environment = import.meta.env.VITE_ENVIRONMENT || "development"
			let backendUrl: string

			switch (environment) {
				case "prod":
					backendUrl = import.meta.env.VITE_BACKEND_URL_PROD
					break
				case "preprod":
					backendUrl = import.meta.env.VITE_BACKEND_URL_PREPROD
					break
				case "dev":
					backendUrl = import.meta.env.VITE_BACKEND_URL_DEV
					break
				default:
					backendUrl = import.meta.env.VITE_BACKEND_URL_DEV
			}

			if (!environment || !backendUrl) {
				console.error("Invalid environment or backend URL")
				return { ...state, appInitialized: false, appInitializationError: true }
			}

			return { ...state, environment, backendUrl, appInitialized: true }
		}),
}))
