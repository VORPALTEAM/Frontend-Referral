import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState, actions } from '../../state/reducer'
import * as config from '../../config'
import { RequestWallet, CheckIsConnected } from '../../state/hooks'

const ConnectWalletBtn = () => {

    const dispatch = useDispatch()
    const State = useSelector((state : RootState )=>{ 
      return state
    })

    const ConnectWallet  = async () => {
      
      try {
        const wallet = await RequestWallet()
        if (wallet) {
          document.cookie = "saleWalletConnected=true"
        }
        dispatch(actions.setAddress(wallet))
      } catch (e) {
        // dispatch(selectWindow("nowallet"))
        dispatch(actions.setAddress(""))
      }

      return true
    }

    useEffect(() => {
      if (CheckIsConnected () ||
         document.cookie.indexOf("saleWalletConnected=true") >= 0) {
        ConnectWallet()
      }
    }, [])

    const DisconnectUser = () => {

      dispatch(actions.setAddress(""))
      document.cookie = "saleWalletConnected=true;  Max-Age=0;";
    }
    
    const VisibleName = ( account ) => {
      if (!account) return "";
      const beginning = account.substring(0, 5)
      const ending = account.substring(account.length - 4)
      return `${beginning}...${ending}`
    }

    return(
          <>
            {!State.account ? <div className="btn connectWallet--btn" onClick={ConnectWallet}>
              Connect wallet
            </div> : 
             <div className="btn wallet--connected">
               <div>{VisibleName(State.account)}</div>
               <div className="user--menu">
                <div className="dsc--btn" onClick={DisconnectUser}>Disconnect</div>
              </div>
              </div>
              }
          </>
    )
}

export default ConnectWalletBtn 