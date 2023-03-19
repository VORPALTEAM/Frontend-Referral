import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import styled, { keyframes } from 'styled-components'
import copy from 'copy-to-clipboard';
import { ShareReferralIcon, 
         CopyClipboardIcon } from 'toolkit/Svg'
import CopyModal from './notify/copyModal'
import { actions } from 'state/reducer'

const PersonalLink = ({ linkId }) => {

  const referralLink = `https://sale.vorpal.finance/?ref=${linkId}`
  const imagineReferralLink = `${referralLink.substring(0, 48)}...`
  const dispatch = useDispatch()

  const CopyLink = () => {
    copy(referralLink)
    dispatch(actions.notifyCopy("1"))
  }


  const LinkBlock  = styled.div`
    display: flex;
    padding: 10px 0 0;
  `

  const ShareBlock = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid #FFF;
    border-radius: 5px;

    svg:hover,
    svg:focus {
      opacity: 0.3;
      cursor: pointer;
    }
  `
  const RefInput = styled.input`
     width: calc(100% - 50px);
     min-width: 300px;
     background: transparent;
     border: 1px solid #FFF;
     border-radius: 5px;
     color: #F1F6F9;
     font-size: 16px;
     padding: 10px;
     margin-right: 10px;
  `
  const CopyIcon = styled(CopyClipboardIcon)`
     position: absolute;
     margin-left: 478px;
     cursor: pointer;

     &:hover,
     &:focus {
       opacity: 0.3;
     }
  `

  const LocalShareReferralIcon = styled(ShareReferralIcon)`
    margin-left: 4px;
    margin-top: 6px
  `

  return (
    <LinkBlock>
       <RefInput type="text" title={referralLink} value={imagineReferralLink} />
       <CopyIcon width="29px" height="29px" onClick={CopyLink} />
       <ShareBlock>
          <LocalShareReferralIcon width="29px" height="29px" />
       </ShareBlock>
    </LinkBlock>
  )
}

export default PersonalLink
