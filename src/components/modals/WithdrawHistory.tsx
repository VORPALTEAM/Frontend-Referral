import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Flex, 
         ModalHeader} from 'toolkit'
import { actions } from 'state/reducer'
import { CloseButton, 
  RefModalHeading } from './common'

const WithdrawHistory = () => {


  const dispatch = useDispatch()

  const CloseWindow = () => {
    dispatch(actions.openModal("none"))
  }

  const WithdrHistoryEmpty = styled.div`
     width: 100%;
     padding: 20px 24px;
     min-height: 200px;  
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
  `

  return (
     <div className="RefModal--Window active">
      <ModalHeader background="transparent">
        <Flex alignItems="center" style={{ flex: 1 }}>
          <RefModalHeading title="Withdraw" />
          <CloseButton onClick={CloseWindow} />
        </Flex>
    </ModalHeader>
    <WithdrHistoryEmpty>
       No data
    </WithdrHistoryEmpty>
    </div>
    )
}

export default WithdrawHistory;