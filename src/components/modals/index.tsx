import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import EditNote from './EditNote'
import GenerateLink from './GenerateLink'
import WithdrawModal from './Withdraw'
import WithdrawHistory from './WithdrawHistory'
import CopyModal from './notify/copyModal'
import { RootState, actions } from 'state/reducer'
import { modalNames, notifyNames } from 'config'
import ShareModal from './notify/shareModal'
import LoginModal from './login'
import ErrorModal from './notify/errorModal'
import SuccessModal from './notify/successModal'
 
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
        case modalNames.note :
          return <EditNote />
        case modalNames.withdraw :
          return <WithdrawModal />
        case modalNames.link :
          return <GenerateLink />
        case modalNames.history :
          return <WithdrawHistory />
        case modalNames.login :
          return <LoginModal />
        default: 
          return null;
      }
    }

    function currentNotify ( windowName ) {
      switch (windowName) {
        case notifyNames.copy:
          return <CopyModal />
        case notifyNames.withdrawErr:
          return <ErrorModal />
          case notifyNames.withdrawOk:
          return <SuccessModal />
        case modalNames.withdraw :
          return <ShareModal />
        default: 
          return null;
      }
    }

    return(
        <>
          {currentWindow(State.modal)}
          {currentNotify(State.notify)}
          <div className={`StyledCard--Overlay${State.modal && State.modal !== "none" ? " active" : ""}`} onClick={OverlayClose}  />
        </>
    )
}

export default ModalRefContainer