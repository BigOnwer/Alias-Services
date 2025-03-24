// config.ts
export const config = {
    stripe: {
        publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
        secretKey: process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY,
        priceId: "",
        webhookSecret: ""
    }
}
