export const connectPayPal = `
    mutation ConnectPaypal($clientId: String!, $clientSecret: String!, $mode: String!, $apiEndpointUrl: String!) {
        connectPaypal(clientId: $clientId, clientSecret: $clientSecret, mode: $mode, apiEndpointUrl: $apiEndpointUrl) {
            success
            message
        }
    }
`