import React, {useState, useEffect, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import { Flex, 
         Box,  
         Text, 
         } from 'toolkit'
import { PlusIcon, 
         PencilReferralIcon} from 'toolkit/Svg'
import { Heading } from 'toolkit/Heading'
import { GoldPercentText } from 'toolkit/Custom/GoldPercentText'
import { RootState, actions } from 'state/reducer'
import PersonalLink from './PersonalLink'
import * as Hooks from 'state/hooks'
import CopyModal from './modals/notify/copyModal'
import { defaultCreatorPercent, defaultReferralPercent, modalNames } from '../config'

const PersonalLinkBlock = ({ account }) => {

  const State = useSelector((state: RootState) =>{
     return state
  })

  const [isRequested, setActive] = useState(false)
  const [clientAccount, setClientAccount] = useState(account)
  const [referralIds, setReferralIds] = useState<string[]>([])
  const dispatch = useDispatch()

  const LinkCreationStart = () => {
    dispatch(actions.openModal(modalNames.login))
    setActive(true)
  }

  const NoteCreationStart = () => {
    dispatch(actions.openModal(modalNames.note))
    setActive(true)
  }

  async function handleStatusChange () {
    if (!isRequested && State.account) {

      const refLinks = await Hooks.RequestLinks(clientAccount)

      try {
        let linkArray = Array.from(refLinks.result)

        const links : string[] = []

        if (linkArray.length < 1) {
          const newLink = await Hooks.CreateLink (clientAccount, defaultCreatorPercent, defaultReferralPercent)
          const newRefLinks = await Hooks.RequestLinks(clientAccount)
          linkArray = Array.from(newRefLinks.result)
        }

        linkArray.forEach((lnk : any) => { 
          links.push(lnk.link_key) 
        })

        setReferralIds(links)
        dispatch(actions.setIds(links))

      } catch (e : any) {
         console.log(e.message)
      }

      setActive(true)
    }
  }

  useEffect(() => {

    handleStatusChange()
  })


  const GetBlockHeadText = styled(Text)`
     margin: 9px 0 0 9px;
     font-family: Roboto;
     font-size: 16px;
     color: #FFF;
     font-weight: 500;
     display: flex;
     justify-content: flex-start;
  `  

  return (
    <Flex flexDirection="column" 
    width={['100%', null, null, null]}
    alignItems="center" justifyContent="space-between">
      <div className="referral--box"> 
        <div className="ref--content">
          <div className="heading--row">
            <Heading as="h5" scale="md" fontSize="32px"
            mt="0" mb="0" 
            fontFamily="Roboto" color="rgb(241, 246, 249)">
            {'My Referral Link'}
            </Heading>
            {!State.account ? <div className="ref--add--link">
               <Text 
                  onClick={LinkCreationStart}
                  color="rgb(241, 246, 249)" fontSize="16px" fontFamily="Roboto" fontWeight="700">
                  Create new link
                </Text>
                <PlusIcon width="26px" height="26px" />
            </div> : null}
          </div>
          {State.account ? State.refLinks.map((ref, index) => {
             return index === 0 ? <PersonalLink linkId={ref} /> : null
          }) : null}
          <div className="YoullGet--Block">
              <div className="YouGet--Section">
                <div className="get--section--inner">
                  <div className="partner--counter">
                     1300
                  </div>
                  <div className="partner--counter--heading">
                     People are <br />assigned to the link
                  </div>
                </div>
                {/* <GetBlockHeadText>You will get</GetBlockHeadText>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}>
                  <GoldPercentText>{defaultCreatorPercent}%</GoldPercentText>
                  <div className="MoreSymbol--Section">
                    <div className="Divider--Block" />
                      <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M2 28L13 15L2 2" stroke="#F8D300" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                         <path d="M12 28L22 15L12 2" stroke="#F8D300" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    <div className="Divider--Block" />
                  </div>
                  <Text color="#FFFFFF" mr="40px" mt="9px">Swaps <b>10%</b></Text>
                </div> */}
              </div>
              {/* <div className="FriendsGet--Section">
                <GetBlockHeadText>Friends will get</GetBlockHeadText>
                <GoldPercentText>{defaultReferralPercent}%</GoldPercentText>
              </div> */}
          </div>
          {/* <div className="NoteBlock" onClick={NoteCreationStart}>
            <PencilReferralIcon width="28px" height="28px" color="white" stroke="white" />
            <div className="Note--Text">
               Note
            </div>
          </div> */}
        </div>
      </div>
    </Flex>
  )
}

export default PersonalLinkBlock
