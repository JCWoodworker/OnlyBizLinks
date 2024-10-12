import { create } from "zustand"

type RestaurantState = {
	restaurantId: number | null
	restaurantName: string | null
	restaurantDomain: string | null
	restaurantLogo: URL | null
}

type RestaurantAction = {
	setRestaurant: (
		id: number | null,
		name: string | null,
		domain: string | null,
		logo: URL | null
	) => void
}

export const useRestaurantStore = create<RestaurantState & RestaurantAction>(
	(set) => ({
		restaurantId: null,
		restaurantName: null,
		restaurantDomain: null,
		restaurantLogo: null,

		setRestaurant: (id, name, domain, logo) =>
			set(() => ({
				restaurantId: id,
				restaurantName: name,
				restaurantDomain: domain,
				restaurantLogo: logo,
			})),
    
		fetchRestaurantData: async (incomingDomain: string) => {
			try {
				const response = await fetch(`https://somefakeurl.com/myrestaurantlinks?domain=${incomingDomain}`);
				if (!response.ok) {
					throw new Error('Failed to fetch restaurant data');
				}
				const data = await response.json();
				set(() => ({
					restaurantId: data.id,
					restaurantName: data.name,
					restaurantDomain: data.domain,
					restaurantLogo: data.logo,
				}));
			} catch (error) {
				console.error('Error fetching restaurant data:', error);
				// You might want to set an error state here or handle the error in some way
			}
		},
	})
)
