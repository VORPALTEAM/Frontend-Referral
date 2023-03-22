import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Flex, 
         Text, 
         ModalHeader } from 'toolkit'
import { actions } from 'state/reducer'
import {CloseButton, 
        RefModalHeading, 
        RefModalBody,
        StyledButton } from './common'
import { PencilReferralIcon } from 'toolkit/Svg'

const EditNote = () => {

    const dispatch = useDispatch()

    const CloseWindow = () => {
      dispatch(actions.openModal("none"))
    }

    return (
       <div className="RefModal--Window active">
        <ModalHeader background="transparent">
          <Flex alignItems="center" style={{ flex: 1 }}>
            <RefModalHeading title="EDIT NOTE" />
            <CloseButton onClick={CloseWindow} />
          </Flex>
      </ModalHeader>
      <RefModalBody  style={{
          padding: "20px 24px"
       }}>
         <input className="Note--Input" type="text" />
         <div className="NoteHint">
           <PencilReferralIcon width="28px" height="28px" color="black" stroke="black" />
           <Text ml="4px" mt="4px" fontWeight="600" fontSize="14px">Note</Text>
         </div>
         <Text fontSize="12px" fontWeight="300" mt="10px">Make a note and test the profit sharing percentage to get the most out of it</Text>
         <div className="Buttons" style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 40
         }}>
             <StyledButton width="48%" disabledStyle={1} onClick={CloseWindow} btnText="Cancel" />
             <StyledButton width="48%" disabledStyle={0} onClick={CloseWindow} btnText="Confirm" />
         </div>
      </RefModalBody>
      </div>
      )
}

export default EditNote;