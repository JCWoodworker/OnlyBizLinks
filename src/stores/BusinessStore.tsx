import { create } from "zustand"

export type CustomLink = {
	id: number
	title: string
	url: string
}

export type SocialMediaLink = {
	id: number
	social_media_platform: SocialMediaPlatform
	url: string
	is_active: boolean
}

export enum SocialMediaPlatform {
	FACEBOOK = "facebook",
	INSTAGRAM = "instagram",
	X = "x",
	LINKEDIN = "linkedin",
	YOUTUBE = "youtube",
	PINTEREST = "pinterest",
}

type BusinessState = {
	businessId: number | null
	businessName: string | null
	businessDomain: string | null
	businessLogo: string | null
	businessCustomLinks: CustomLink[]
	businessSocialMediaLinks: SocialMediaLink[]
}

type BusinessAction = {
	setBusiness: (
		id: number | null,
		name: string | null,
		domain: string | null,
		logo: string | null,
		customLinks: CustomLink[],
		socialMediaLinks: SocialMediaLink[]
	) => void
}

export const useBusinessStore = create<BusinessState & BusinessAction>(
	(set) => ({
		businessId: null,
		businessName: null,
		businessDomain: null,
		businessLogo: null,
		businessCustomLinks: [],
		businessSocialMediaLinks: [],
		setBusiness: (id, name, domain, logo, customLinks, socialMediaLinks) =>
			set(() => ({
				businessId: id,
				businessName: name,
				businessDomain: domain,
				businessLogo: logo,
				businessCustomLinks: customLinks || [],
				businessSocialMediaLinks: socialMediaLinks || [],
			})),
	})
)
