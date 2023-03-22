import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import EditNote from './EditNote'
import GenerateLink from './GenerateLink'
import WithdrawModal from './Withdraw'
import WithdrawHistory from './WithdrawHistory'
import CopyModal from '../notify/copyModal'
import { RootState, actions } from 'state/reducer'
 
const ModalRefContainer = () => {

    const State = useSelector((state: RootState) => {
      return state
    })


    const dispatch = useDispatch()

    const OverlayClose = () => {
      dispatch(actions.openModal("none"))
    }

    function currentWindow ( windowName ) {
      switch (windowName) {
        case "note" :
          return <EditNote />
          break;
        case "withdraw" :
          return <WithdrawModal />
          break;
        case "link" :
          return <GenerateLink />
          break;
        case "history" :
          return <WithdrawHistory />
          break;
        default: 
          return null;
      }
    }

    return(
        <>
          {currentWindow(State.modal)}
          {(State.notify === "1") ? <CopyModal /> : null}
          <div className={`StyledCard--Overlay${State.modal && State.modal !== "none" ? " active" : ""}`} onClick={OverlayClose}  />
        </>
    )
}

export default ModalRefContainer