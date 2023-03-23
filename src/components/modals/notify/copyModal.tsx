import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { actions } from 'state/reducer'
import styled, { keyframes } from 'styled-components'
import { ShareReferralIcon, 
         CopyClipboardIcon } from 'toolkit/Svg'

const CopyModal = () => {

    const dispatch = useDispatch()
    const [btnPosition, setBtnPosition] = useState<string>('0%')

    const CloseNotify = () => {
        dispatch(actions.notify("none"))
    }

    useEffect(() => {
        setBtnPosition('10%')
    }, [])

    return(
    <div className="copy--modal" style={{
        bottom: btnPosition
    }}>
      <div className="copy--modal--inner">
        <div className="copy--mark">
            <img src="/images/mark.svg" />
        </div>
        <div className="copy--notify--text">
           Link copied!
        </div>
        <div className="copy--close--icon" onClick={CloseNotify}>
            <div className="copy--close--icon--inner">
                 <img src="/images/close.svg" />
            </div>
        </div>
      </div>
    </div>)
}

export default CopyModal