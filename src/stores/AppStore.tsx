import { create } from "zustand"

type AppState = {
	environment: string
	backendUrl: string
  appUrl:string
	initializeApp: () => void
}

export const useAppStore = create<AppState>((set) => ({
	environment: "",
	backendUrl: "",
	appUrl: "",
	initializeApp: () =>
		set((state) => {
			const environment = import.meta.env.VITE_ENVIRONMENT || "development"
      const appUrl = import.meta.env.VITE_MYRESTAURANTLINKS_URL
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

			return { ...state, environment, backendUrl, appUrl}
		}),
}))
