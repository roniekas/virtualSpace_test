import { cryptoKey } from 'common/constans'
var CryptoJS = require("crypto-js")
var rs = require('jsrsasign')

export const updateObject = (oldObject, updatedProps) => {
    return {
        ...oldObject,
        ...updatedProps
    }
}
