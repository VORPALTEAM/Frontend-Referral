import { createReducer, createAction, combineReducers } from '@reduxjs/toolkit';
import { stringAction, stringArrAction, modals, KPI, KPIAction } from 'types'
import * as config from 'config'

const openedModal : modals= 'none' 
const DefaultKPI : KPI = {
    refNumber: 0,
    balanceLocked: 0,
    balanceAvailable: 0
}
const actionNames = {
    setAddress: "SET_ADDRESS",
    openModal: "OPEN_MODAL",
    notify: "notify",
    setIds: "ids",
    KpiData: "kpi_data"
}

export const actions = {
    setAddress: createAction<string>(actionNames.setAddress),
    openModal: createAction<string>(actionNames.openModal),
    notify: createAction<string>(actionNames.notify),
    setIds: createAction<string[]>(actionNames.setIds),
    setKpi: createAction<KPI>(actionNames.KpiData)
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
    case actionNames.setIds : 
      return (action.payload) ? action.payload : state
    default :
      return state
  }
}

const UpdateKPI = (state = DefaultKPI, action: KPIAction) => {
  switch(action.type) {
    case actionNames.KpiData : 
      return action.payload
    default :
      return state
  }
}

export const RootReducer = combineReducers ({
    account: UpdateAccount,
    modal: SelectModal,
    notify: SetNotify,
    refLinks: UpdateRefLinks,
    KPI: UpdateKPI
})

export type RootState = ReturnType<typeof RootReducer>