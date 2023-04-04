import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { 
    Box,  
    Text } from 'toolkit'
import { Button, IconButton } from 'toolkit/Button'
import { CloseIcon } from 'toolkit/Svg'


export const CloseButton = ({ onClick, marginLeft = 475 }) => {
   const CloseBtn = styled(IconButton)`
      position: absolute;
      margin-left: ${marginLeft}px;
      margin-top: 8px;
   `
   return(
      <CloseBtn variant="text" aria-label="Close the dialog" onClick={onClick}>
        <CloseIcon color="text" width="24px" />
      </CloseBtn>
   )
}

export const RefModalHeading = ({ title }) => {
   const RefHeading = styled(Text)`
      color: #2A2338;
      font-family: RoundsBlack;
   `

   return(
      <Box>
       <RefHeading mb="16px" mt="12px" fontSize="18px" fontWeight="400">
          {title}
       </RefHeading>
      </Box>
   )
}

export const StyledButton = ({ 
   disabledStyle,
   onClick, 
   btnText,
   width,
    }) => {

   const ModalButton = styled(Button)`
      height: 40px;
      background: #352F44;
      color: #FFFFFF;
      font-size: 18px;
      border-radius: 6px;
      text-transform: none;
      opacity: ${disabledStyle ? '0.3': '1'};
   `
   return(
        <ModalButton width={width} disabled={0} onClick={onClick}>{btnText}</ModalButton>
   )
}

export const RefModalBody = styled.div`
    padding: 24px;
`