import React from 'react'
import styled from 'styled-components'
import { Box, Flex, Text } from '../toolkit'
import { Heading } from '../toolkit/Heading'
import { SubtractIcon } from '../toolkit/Svg'
import BorderedHeading from 'components/HeadingBorder'
import PersonalLinkBlock from './PersonalLinkBlock'
import { mediaQueries } from 'config'

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

    ${mediaQueries.mobile} {
        width: 100%;
        text-align: center;
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

  const HeroHeading = styled(Heading)`
    
    ${mediaQueries.mobile} {
      width: 100%;
      text-align: center;
    }
  `

  return (
    <Flex position="relative"
    flexDirection={['column', null, null, 'row']}
    width="100%"
    justifyContent="space-between"
    id="referral-hero"
    pt="100px">
      <Flex
       width={['100%', '100%', '30%', '35%']}
       flexDirection='column'
       >
       <HeroHeading as="h5" scale="xl" color="#ACF800" width="533px" mt="30px" mb="21px">
        {'Invite your friends. Earn cryptocurrency together'}
       </HeroHeading>
       <BorderedHeading />
         <Description mb="21px" width="556px">Earn <b className="yellow">3%</b> from your friends' USD investments in our project, converted in VRP by actual cost. </Description>
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
