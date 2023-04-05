import * as actionType from '../actions/actionTypes'
import { updateObject } from '../../helpers/utility'

const initialState = {
  data1: '',
  data2: {}
}

const regPhoneNumber = (state, action) => {
    return updateObject(state, { phoneNumber: action.phoneNumber })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case actionType.REG_PHONE_NO: return regPhoneNumber(state, action)
      default: return state
  }
}

export default reducer