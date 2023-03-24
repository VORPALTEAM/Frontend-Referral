import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from '../toolkit'
import { Heading } from '../toolkit/Heading'
import { SubtractIcon } from '../toolkit/Svg'
import BorderedHeading from 'components/HeadingBorder'
import PersonalLinkBlock from './PersonalLinkBlock'

const ReferralHero = ({ isLogin = true, account = "" }) => {

  const descriptionUrl = "/"
  const noLoginUrl = "/"
  const Description = styled(Text)`
    color: #FFFFFF;
    font-size: 21px;

     .yellow {
        color: #F8D300;
        font-weight: 400;
      }
  `

  const LinkText = styled.p`
     width: ${isLogin ? 120 : 150}px;
     text-decoration: none;
     color: #ACF800;
  `

  const LocalSubtractIcon = styled(SubtractIcon)`
    margin-left: 9px;
    margin-top: 4px
  `

  return (
    <Flex position="relative"
    flexDirection={['column-reverse', null, null, 'row']}
    width="100%"
    justifyContent="space-between"
    id="referral-hero"
    pt="100px">
      <Flex
       width='35%'
       flexDirection='column'
       >
       <Heading as="h5" scale="xl" color="#ACF800" width="533px" mt="30px" mb="21px">
        {'Invite your friends. Earn cryptocurrency together'}
       </Heading>
       <BorderedHeading />
         <Description mb="21px" width="556px">Earn up to <b className="yellow">20%</b> from friends swap commission on VORPAL and <b className="yellow">5%</b> from their earnings on Farms and Launch pools.</Description>
         {isLogin ? 
         <a href={descriptionUrl}>
            <Text color="#ACF800" mb="21px" fontFamily="Roboto" fontSize="21px" fontWeight="700" display="flex">
            <LinkText>Read more</LinkText><LocalSubtractIcon /></Text>
         </a> : 
         <a href={noLoginUrl}>
            <Text color="primary" mb="21px" fontFamily="Roboto" fontSize="21px" fontWeight="700" display="flex">
            <LinkText>Invite friends</LinkText></Text>
         </a>}
       <BorderedHeading />
      </Flex>
      <Flex>
        <PersonalLinkBlock account={account} />
      </Flex>
    </Flex>
  )
}

export default ReferralHero
