export const config = {
    stripe: {
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        secretKey: process.env.STRIPE_SECRET_KEY,
        webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
        plans: {
            dashboard: {
                priceId: 'price_1PQuvNLm54ylZe6N3cT1B6D9',
                features: {
                    accessToDashboard: true,
                    accessToWebsite: false,
                },
            },
            website: {
                priceId: 'price_1PQuwnLm54ylZe6NW5tvAUwW',
                features: {
                    accessToDashboard: false,
                    accessToWebsite: true,
                },
            },
        },
    },
}
