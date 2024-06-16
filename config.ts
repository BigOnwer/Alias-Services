// config.ts
export const config = {
    stripe: {
        secretKey: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
        plans: {
            dashboard: {
                priceId: 'price_1PR1ejLm54ylZe6Np555a7zv',
                quota: {
                    accessToDashboard: true,
                    accessToWebsite: false
                }
            },
            website: {
                priceId: 'price_1PQuwnLm54ylZe6NW5tvAUwW',
                quota: {
                    accessToDashboard: false,
                    accessToWebsite: true
                }
            },
        }
    }
}
