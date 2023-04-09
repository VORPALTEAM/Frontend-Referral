import { MediaQueries } from "types"

export const networkId = 56
export const mobileUrl = "https://metamask.app.link/dapp/sale.vorpal.finance/"
export const defaultApiUrl = "https://staging-api.vorpal.finance/api"
export const apiUserDataUrl = "https://staging-api.vorpal.finance/api/getownerdata/"
export const rpc = "https://bsc-dataseed.binance.org/"

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

export const defaultCreatorPercent = 90
export const defaultReferralPercent = 10

export const breakpointMap: { [key: string]: number } = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xxl: 1200,
  };

export const modalNames = {
   none: "none",
   link: "link",
   note: "note",
   withdraw: "withdraw",
   history: "history",
   login: "login"
}

export const notifyNames = {
   none: "none",
   copy: "copy",
   share: "share"
}

export const mediaQueries: MediaQueries = {
    xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
    sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
    md: `@media screen and (min-width: ${breakpointMap.md}px)`,
    lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
    xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
    xxl: `@media screen and (min-width: ${breakpointMap.xxl}px)`,
    nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
    mobile: `@media screen and (max-width: ${breakpointMap.md}px)`,
    pc: `@media screen and (min-width: ${breakpointMap.md + 1}px)`,
  };