import { cryptoKey } from 'common/constants'
let CryptoJS = require("crypto-js")

export const phoneNumberKey = CryptoJS.SHA512('somethingtoencrypt', cryptoKey)