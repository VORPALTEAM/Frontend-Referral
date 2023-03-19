import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';
import { stringAction, modals } from 'types'
import * as config from 'config'

const openedModal : modals= 'none' 
const actionNames = {
    setAddress: "SET_ADDRESS",
    openModal: "OPEN_MODAL"
}

export const actions = {
    setAddress: createAction<string>(actionNames.setAddress),
    openModal: createAction<string>(actionNames.openModal)
}

const UpdateAccount = (state = "", action: stringAction) => {
    switch(action.type) {
        case actionNames.setAddress : 
          return action.payload || state
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

export const RootReducer = combineReducers ({
    account: UpdateAccount,
    modal: SelectModal
})

export type RootState = ReturnType<typeof RootReducer>