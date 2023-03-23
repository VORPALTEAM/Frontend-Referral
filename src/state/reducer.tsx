import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';
import { stringAction, stringArrAction, modals } from 'types'
import * as config from 'config'

const openedModal : modals= 'none' 
const actionNames = {
    setAddress: "SET_ADDRESS",
    openModal: "OPEN_MODAL",
    notify: "notify",
    setIds: "ids"
}

export const actions = {
    setAddress: createAction<string>(actionNames.setAddress),
    openModal: createAction<string>(actionNames.openModal),
    notify: createAction<string>(actionNames.notify),
    setIds: createAction<string[]>("ids")
}

const UpdateAccount = (state = "", action: stringAction) => {
    switch(action.type) {
        case actionNames.setAddress : 
          return action.payload
        default :
          return state
      }
}

const SelectModal = (state = openedModal, action: stringAction) => {
    switch(action.type) {
        case actionNames.openModal : 
          return action.payload || state
        default :
          return state
      }
}

const SetNotify = (state = "", action: stringAction) => {
  switch(action.type) {
      case actionNames.notify : 
        return action.payload
      default :
        return state
    }
}

const UpdateRefLinks = (state = [], action: stringArrAction) => {
  switch(action.type) {
    case "ids" : 
      return (action.payload) ? action.payload : state
    default :
      return state
  }
}

export const RootReducer = combineReducers ({
    account: UpdateAccount,
    modal: SelectModal,
    notify: SetNotify,
    refLinks: UpdateRefLinks
})

export type RootState = ReturnType<typeof RootReducer>