import * as actionType from './actionTypes'

export const regPhone = (phoneNo) => {
    return {
        type: actionType.REG_PHONE_NO,
        phoneNumber: phoneNo
    }
}