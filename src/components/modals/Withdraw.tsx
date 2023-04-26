import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Flex,  
         Text, 
         ModalHeader } from 'toolkit'        
import { actions, RootState } from 'state/reducer'
import {
  CloseButton, 
  RefModalHeading, 
  RefModalBody,
  StyledButton } from './common'
import { Button } from 'toolkit/Button'
import Web3 from 'web3'
import { connectOptions, rpc, withdrawUrl } from 'config'
import { RequestUserData } from 'state/hooks'

const WithdrawModal = () => {


  const dispatch = useDispatch()
  const State = useSelector((state: RootState) => {
    return state
 })

  const CloseWindow = () => {
    dispatch(actions.openModal("none"))
  }

  const WithdrawAllBtn = styled(Button)`
     position: absolute;
     height: 52px;  
     margin-top: 4px;
     margin-left: -132px;
     background: #352F44; 
     color: #FFFFFF;
     font-size: 18px;
     border-radius: 6px;
     text-transform: none;
  `

  const WithdrawRequest = async() => {

     const acc = State.account
     if (acc) {
      // dispatch(actions.setTxPending(true))
      // CloseWindow()
      const web3 = new Web3(Web3.givenProvider || rpc)

      let time = Math.round(new Date().getTime() / 1000)
      time -= time % 3600
      const msg = "withdraw_" + time
      let signature = ""
      
      try {
         signature = await web3.eth.personal.sign(msg, acc, '');
      } catch (e) {
         console.log(e.message)
         return;
      }

      const RqBody = {
         address: acc,
         signature: signature
      }

      dispatch(actions.setTxPending(true))
      CloseWindow()

      const WithdrawResponse = await fetch(withdrawUrl, {
         method: "POST",
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(RqBody)
        })

      const rs = await WithdrawResponse.json()

      const UserData = await RequestUserData(acc)

      dispatch(actions.setKpi(UserData))
      console.log("Pending check : ")
      console.log(State.isPending)
      dispatch(actions.setTxPending(false))
      console.log(State.isPending)
     } else {
        return false;
     }
  }

  return (
     <div className="RefModal--Window active">
      <ModalHeader background="transparent">
        <Flex alignItems="center" style={{ flex: 1 }}>
          <RefModalHeading title="Withdraw" />
          <CloseButton onClick={CloseWindow} />
        </Flex>
    </ModalHeader>
    <RefModalBody  style={{
        padding: "20px 24px"
     }}>
       
       <Text fontSize="24px" textAlign="center" fontWeight="500" mt="10px">Withdraw { State.KPI.balanceAvailable } VRP</Text>
       <div className="Buttons" style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 40
       }}>
           <StyledButton width="100%" disabledStyle={0} onClick={WithdrawRequest} btnText="Withdraw" />
       </div>
    </RefModalBody>
    </div>
    )
}

export default WithdrawModal;