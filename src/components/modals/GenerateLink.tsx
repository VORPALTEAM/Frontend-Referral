import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Flex, 
         ModalHeader, 
         Text } from 'toolkit'
import { PlusIcon,  
          RoundAskIcon,
          PencilReferralIcon,
          CheckInCheckBox } from 'toolkit/Svg'
import BorderedHeading from 'components/HeadingBorder'
import { RootState, actions } from 'state/reducer'
import {
  CloseButton, 
  RefModalHeading, 
  RefModalBody,
  StyledButton } from './common'
import * as Hooks from 'state/hooks'
import { defaultCreatorPercent, defaultReferralPercent } from 'config'
import { Button } from 'toolkit/Button'

const EnabledButton = styled(Button)`
   height: 40px;
   width: 22%;
   background: #352F44;
   color: #FFFFFF;
   font-size: 18px;
   border-radius: 6px;
   text-transform: none;
   opacity: 1;
`


const GenerateLink = () => {

  const State = useSelector((state: RootState) => {
    return state
  })

    const [boxChecked, checkBox] = useState(true)
    const [linkValue, setLinkValue] = useState<number>(0)
    const [enabledClicks, setClicks] = useState(false)
    const dispatch = useDispatch()

    const account = State.account

    const CloseWindow = () => {
      dispatch(actions.openModal("none"))
    }

    const CheckAsDefault = () => {
      checkBox(!boxChecked)
    }

    const NewLink = async () => {
      const val1 : number = linkValue || defaultCreatorPercent
      const val2 : number = linkValue || defaultReferralPercent
      const newLink = await Hooks.CreateLink(account, val1, val2)
      dispatch(actions.openModal("none"))
      const newRefLinks = await Hooks.RequestLinks(account)
      const links : string[] = []
      try {
        const linkArray = Array.from(newRefLinks.result)
        linkArray.forEach((lnk : any) => { 
          links.push(lnk.link_key) 
        })
      } catch (e : any) {
        console.log(e.message)
      }

      dispatch(actions.setIds(links))
    }

    useEffect(() => {
      setClicks(true)
    }, [])

    const BtnClickListener = (event) => {
      if (enabledClicks) {

        if (event.target) {
           const val = event.target.innerHTML.replace("%", "")
           const numVal = parseInt(val)
           setLinkValue(numVal)
        }  else {
          console.log("Wrong event!")
        }
      } 
    }

    return (
       <div className="RefModal--Window active">
        <ModalHeader background="transparent">
          <Flex alignItems="center" style={{ flex: 1 }}>
            <RefModalHeading title="Generate your link" />
            <CloseButton onClick={CloseWindow} marginLeft={320} />
          </Flex>
      </ModalHeader>
      <RefModalBody style={{
        padding: "17px 28px"
      }}>
          <Text fontSize="14px" fontWeight="400" color="tetriary">
            Profit sharing allows you to share a portion of referral rewards with your invited friends
          </Text>
         <BorderedHeading style={{
            padding: 8
         }} />
         <div className="Percent--Section">
            <div className="percent--left">
              <Text fontSize="14px" fontWeight="400" color="tetriary">
                You receive <RoundAskIcon stroke="#352F44" style={{
                  position: 'absolute',
                  marginLeft: 4
                }} />
              </Text>
              <Text fontSize="64px" fontWeight="400" color="#2A2338">{100 - linkValue}%</Text>
            </div>
            <div className="percent--right">
              <Text fontSize="12px" fontWeight="300">
                Friends receive <RoundAskIcon stroke="#352F44" style={{
                  position: 'absolute',
                  marginLeft: 4
                }} />
              </Text>
              <Text fontSize="64px" fontWeight="400" color="#2A2338">{linkValue}%</Text>
            </div>
         </div>
         <div className="Value--Section">
            <Text>Swap <b>10%</b></Text>
         </div>
         <div className="Percent--Btns">
            <EnabledButton key="linkvalbtn_1" onClick={BtnClickListener} >0%</EnabledButton>
            <EnabledButton key="linkvalbtn_2" onClick={BtnClickListener} >10%</EnabledButton>
            <EnabledButton key="linkvalbtn_3" onClick={BtnClickListener} >25%</EnabledButton>
            <EnabledButton key="linkvalbtn_4" onClick={BtnClickListener} >50%</EnabledButton>
         </div>
         <input className="Note--Input" type="text" style={{
            marginTop: 20
          }} />
         <div className="Note--Hint">
           <PencilReferralIcon width="28px" height="28px" color="black" stroke="black" />
           <Text ml="4px" mt="4px" fontWeight="600" fontSize="14px">Note</Text>
         </div>
         <Flex className="check--box" style={{
            marginTop: 20
          }}>
            {!boxChecked ? <div className="CheckBox--Place" onClick={CheckAsDefault} /> : 
            <div className="CheckBox--Place" onClick={CheckAsDefault}>
              <CheckInCheckBox stroke="#ACF800" style={{
                marginTop: 7,
                marginLeft: 4
              }} />
            </div>}
            <Text ml="4px" mt="4px" fontWeight="600" fontSize="14px">
              Set as default invitation code
            </Text>
         </Flex>
         <div className="Buttons" style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 20
         }}>
          <StyledButton width="100%" disabledStyle={0} onClick={NewLink} btnText="Generate a referral link" />
          <PlusIcon style={{
            position: 'absolute',
            marginRight: 215
          }} onClick={CloseWindow} />
         </div>
      </RefModalBody>
      </div>
      )
}

export default GenerateLink;