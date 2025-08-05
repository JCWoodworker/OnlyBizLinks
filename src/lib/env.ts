// Utility to get environment-specific backend URL

const ENV = import.meta.env.VITE_ENVIRONMENT ?? "dev"

function getBackendBase(): string {
	// Map environment → backend base URL
	switch (ENV) {
		case "prod":
			return "https://api.onlybizlinks.com"
		case "preprod":
			return "https://preprod-api.onlybizlinks.com"
		case "dev":
		default:
			return "http://localhost:3000"
	}
}

export const BACKEND_BASE = getBackendBase()
export const ONLYBIZLINKS_BASE = `${BACKEND_BASE}/api/v1/subapps/onlybizlinks`
