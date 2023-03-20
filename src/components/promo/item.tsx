import React, {useState} from 'react'
import styled, { keyframes } from 'styled-components'
import { Text} from 'toolkit'
import { SubtractIcon } from 'toolkit/Svg'
import { PromoItemData } from 'types'
import { mediaQueries } from 'config'

interface Data {
    item: PromoItemData 
  }

const PromoStep = styled.div`
  width: 100%;
  max-width: 440px;
  height: 453px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1A192E;
  border-radius: 29px;
  padding: 14px 21px;

  @media screen and (max-width: 1338px) {
    height: 409px;
   }
`
const PromoCard = styled.div`
  width: 31%;
  display: block;
  margin: 1%;

  ${mediaQueries.mobile} {
     width: 100%;
  }
`

const StepSection = styled.div`
  width: 100%;
`
const StepNumber = styled.div`
  width: 46px;
  height: 46px;
  border: 1px solid #FFFFFF;
  border-radius: 98px;
`

const PromoStepFooter = styled.div`
  display: flex;
  width: 100%;
  max-width: 440px;
  flex-direction: column;
  align-items: left;
  padding: 42px 21px;
`

const ExpText = styled(Text)`
   height: 96px;

   @media screen and (max-width: 1338px) {
    height: 148px;
   }
`

const LocalSubtractIcon = styled(SubtractIcon)`
    margin-left: 9px;
    margin-top: 12px;
`

const PromoItem = ({ item } : Data) => {

    return(
        <PromoCard> 
          <PromoStep>
            <StepSection>
              <StepNumber>
                <Text ml="12px" mt="-2px" fontSize="32px" color="#FFFFFF" fontWeight="700">{item.id}</Text>
              </StepNumber>
            </StepSection>
            <img style={{
                marginTop: -28
            }} src={item.icon} width="90%" alt={ item.heading } />
            <Text fontSize="16px" textAlign="center" color="#F1F6F9" fontWeight="400">{item.heading}</Text>
            <Text fontSize="16px" textAlign="center" color="#979797" fontWeight="400">{item.description}</Text>
          </PromoStep>
          <PromoStepFooter>
            <Text fontSize="24px" textAlign="left" color="#FFFFFF" >{item.expHeading}</Text>
            <ExpText mt="10px" textAlign="justify" color="#FFFFFF" >{item.expDescription}</ExpText>
            <a href={item.expLink} style={{
                display: "flex"
            }}>
              <Text mt="10px" fontSize="20px" fontWeight="600" textAlign="left" 
              color="#ACF800;" textDecoration="none">{item.expLinkText}</Text>
              <LocalSubtractIcon />
            </a>
          </PromoStepFooter>
        </PromoCard>
    )
}

export default PromoItem