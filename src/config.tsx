export const networkId = 56
export const mobileUrl = "https://metamask.app.link/dapp/sale.vorpal.finance/"

export const connectOptions = {
    keepAlive: true,
    withCredentials: false,
    timeout: 20000, // ms
    headers: [
        {
            name: 'Access-Control-Allow-Origin',
            value: '*'
        }
    ]
  }
