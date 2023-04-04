import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Flex,  
         Text, 
         ModalHeader } from 'toolkit'        
import { actions } from 'state/reducer'
import {
  CloseButton, 
  RefModalHeading, 
  RefModalBody,
  StyledButton } from './common'
import { Button } from 'toolkit/Button'
import { modalNames } from 'config'
import { RequestWallet } from 'state/hooks'

const LoginModal = () => {


  const dispatch = useDispatch()

  const CloseWindow = () => {
    dispatch(actions.openModal(modalNames.none))
  }

  const ConnectWallet = () => {
    RequestWallet()
    dispatch(actions.openModal(modalNames.none))
  }

  return (
     <div className="RefModal--Window active">
      <ModalHeader background="transparent">
        <Flex alignItems="center" flexDirection="column" style={{ flex: 1 }}>
          <RefModalHeading title="Login" />
          <CloseButton onClick={CloseWindow} />
        </Flex>
    </ModalHeader>
    <RefModalBody  style={{
        padding: "20px 24px"
     }}>
       <div className="Login--btn--desc">
           We need to know your wallet to generate a your unique link
       </div>
       <div className="Buttons" style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 40
       }}>
           <StyledButton width="100%" disabledStyle={0} onClick={ConnectWallet} 
           btnText="Connect wallet" />
       </div>
    </RefModalBody>
    </div>
    )
}

export default LoginModal;