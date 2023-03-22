import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Flex, Text } from 'toolkit'
import { actions } from 'state/reducer'
import { AskIcon, ClockAgainst } from 'toolkit/Svg'
import { AscBlock } from 'toolkit/Custom/GoldPercentText'
import { Button } from 'toolkit/Button'

const WithdrawSection = () => {


    const dispatch = useDispatch()
    const [popupActive, setActive] = useState(false)

    const WithdrawStart = () => {
        dispatch(actions.openModal("withdraw"))
        setActive(true)
      }

    const WithdrawHistoryOpen = () => {
        dispatch(actions.openModal("history"))
        setActive(true)
      }

    const StyledButton = styled(Button)`
       width: 160px;
       height: 40px;
       background: #353547;
       color: #666171;
       font-size: 18px;
        border-radius: 6px;
    `

    return (
        <Flex position="relative"
        flexDirection={['column-reverse', null, null, 'row']}
        width="100%"
        justifyContent="flex-end"
        mt="40px"
        id="referral-hero">
            <div className="Withdraw--Section">
                <Flex mt="20px" ml="20px">
                    <Text fontWeight="700">Swaps Referral</Text>
                    <AscBlock>
                        <Text fontWeight="700" ml="12px" mt="6px">10%</Text>
                        <AskIcon style={{
                              marginLeft: 4,
                              marginTop: 4,
                              marginRight: 12
                        }} color="tertiary" />
                    </AscBlock>
                    <ClockAgainst style={{
                              marginLeft: "25%",
                              marginTop: -4
                        }} width="37px" height="34px" />
                    <Text ml="6px" onClick={WithdrawHistoryOpen}>History</Text>
                </Flex>
                <Text ml="20px" mt="20px" fontSize="32px" fontWeight="700" width="100%">0.0000 VRP</Text>
                <StyledButton onClick={WithdrawStart} mt="40px" ml="20px">
                    Withdraw
                 </StyledButton>
            </div>
        </Flex>
      )
}

export default WithdrawSection;