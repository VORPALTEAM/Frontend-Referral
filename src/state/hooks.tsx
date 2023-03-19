import { Fetcher } from 'swr'
import Web3 from 'web3';
import { actions } from './reducer'
import * as config from '../config'
import store from './store'

const env = window.ethereum
// let getterWeb3 = new Web3(config.rpcUrl, config.connectOptions)

let isFirstRequestAccount = false

export const fetcher: Fetcher = (url : string) => fetch(url).then((response =>response.json()))

export async function RequestWallet () {

    if (!env) {
        // Checking mobile device
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

            document.location.href = config.mobileUrl
        }
        return null;
    } else {
        const accs = await env.request({ method: "eth_requestAccounts" }, config.connectOptions)

        if (!isFirstRequestAccount) {
            env.on('accountsChanged', function (accounts) {
                RequestWallet ()
              })
              
            env.on('networkChanged', function (networkId) {
                RequestWallet ()
             })

             isFirstRequestAccount = true
        }
        
        store.dispatch(actions.setAddress(accs[0]))

        return accs[0]

    }

  }

  export function CheckIsConnected () {
    let connected = false
    try {
        connected = env.isConnected()
    } catch (e) {
        console.log(e.message)
        connected = false
    }
    return connected
}



export async function CreateLink (
    creator : string, 
    CreatorPercent : number, 
    RefPercent : number) {
    const linkData = await fetch(`${config.defaultApiUrl}`,
    {
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
     },
     method: "POST",
     body: JSON.stringify({
          action: "CreateLink",
           owner:  creator,
           reward1: CreatorPercent,
           reward2: RefPercent
         })
    })
    const linksObject = await linkData.json();
    return linksObject
 }

 export async function RequestLinks ( creator : string ) {
     const linkData = await fetch(`${config.defaultApiUrl}`,
     {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
            action: "GetLinksByOwner",
            owner:  creator
          })
     })
     const linkResponse = await linkData.json()
     return linkResponse
 }

 export async function RegisterReferral (
    account : string, 
    Link : string ) {
      if (!account || !Link) return false
      const linkData = await fetch(`${config.defaultApiUrl}`,
      {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
       method: "POST",
       body: JSON.stringify({
              action: "RegisterReferral",
              client: account,
              link: Link
           })
      })
      return true
    }

