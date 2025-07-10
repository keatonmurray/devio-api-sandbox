export const connectPayPal = `
    mutation ConnectPaypal($clientId: String!, $clientSecret: String!, $mode: String!) {
        connectPaypal(clientId: $clientId, clientSecret: $clientSecret, mode: $mode) {
            success
            message
        }
    }
`