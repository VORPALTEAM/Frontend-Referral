import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, actions } from 'state/reducer'
import styled, { keyframes } from 'styled-components'
import { ShareReferralIcon, 
         CopyClipboardIcon } from 'toolkit/Svg'

const ErrorModal = () => {

    const dispatch = useDispatch()
    const State = useSelector((state: RootState) => {
        return state
     })
    const [btnPosition, setBtnPosition] = useState<string>('0%')

    const CloseNotify = () => {
        dispatch(actions.notify("none"))
    }

    useEffect(() => {
        setBtnPosition('90%')
    }, [])

    return(
    <div className="error--modal" style={{
        bottom: btnPosition
    }}>
      <div className="error--modal--inner">
        {/* <div className="copy--mark">
            <img src="/images/mark.svg" />
        </div> */}
        <div className="copy--notify--text">
           {State.LastError}
        </div>
        <div className="copy--close--icon" onClick={CloseNotify}>
            <div className="copy--close--icon--inner">
                 <img src="/images/close.svg" />
            </div>
        </div>
      </div>
    </div>)
}

export default ErrorModal