// src\lib\auth.ts
/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: no need */

import { sso } from "@better-auth/sso";
import { betterAuth } from "better-auth";
import {
	admin,
	anonymous,
	apiKey,
	bearer,
	captcha,
	deviceAuthorization,
	emailOTP,
	genericOAuth,
	haveIBeenPwned,
	jwt,
	lastLoginMethod,
	magicLink,
	mcp,
	multiSession,
	oidcProvider,
	oneTap,
	oneTimeToken,
	openAPI,
	organization,
	phoneNumber,
	siwe,
	twoFactor,
	username,
} from "better-auth/plugins";
import { passkey } from "better-auth/plugins/passkey";

export const auth = betterAuth({
	// Main Options
	baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
	appName: process.env.BETTER_AUTH_APP_NAME || "better-auth",
	// Plugin Options
	plugins: [
		twoFactor(),
		username(),
		anonymous(),
		phoneNumber(),
		magicLink({
			sendMagicLink: async ({ email, token, url }, request) => {
				// send email to user
			},
		}),
		emailOTP({
			async sendVerificationOTP({ email, otp, type }) {
				if (type === "sign-in") {
					// Send the OTP for sign in
				} else if (type === "email-verification") {
					// Send the OTP for email verification
				} else {
					// Send the OTP for password reset
				}
			},
		}),
		genericOAuth({
			config: [
				{
					providerId: "provider-id",
					clientId: "test-client-id",
					clientSecret: "test-client-secret",
					discoveryUrl:
						"https://auth.example.com/.well-known/openid-configuration",
					// ... other config options
				},
				// Add more providers as needed
			],
		}),
		oneTap(),
		siwe({
			domain: "example.com",
			emailDomainName: "example.com", // optional
			anonymous: false, // optional, default is true
			getNonce: async () => {
				// Implement your nonce generation logic here
				return "your-secure-random-nonce";
			},
			verifyMessage: async (args) => {
				// Implement your SIWE message verification logic here
				// This should verify the signature against the message
				return true; // return true if signature is valid
			},
			ensLookup: async (args) => {
				// Optional: Implement ENS lookup for user names and avatars
				return {
					name: "user.eth",
					avatar: "https://example.com/avatar.png",
				};
			},
		}),
		admin(),
		apiKey(),
		mcp({
			loginPage: "/sign-in", // path to your login page
		}),
		organization(),
		oidcProvider({
			loginPage: "/sign-in", // path to the login page
		}),
		bearer(),
		deviceAuthorization(),
		captcha({
			provider: "cloudflare-turnstile", // or google-recaptcha, hcaptcha
			secretKey: "your-secret-key",
		}),
		haveIBeenPwned(),
		lastLoginMethod(),
		multiSession(),
		oneTimeToken(),
		openAPI(),
		jwt(),
		passkey(),
		sso(),
	],
});

export type AuthType = {
	user: typeof auth.$Infer.Session.user | null;
	session: typeof auth.$Infer.Session.session | null;
};
