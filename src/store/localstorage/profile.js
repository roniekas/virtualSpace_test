import { cryptoKey } from 'common/constants'
import { profileKey } from 'data/key'

var CryptoJS = require("crypto-js")

const key = profileKey

export const setResProfile = (data) => {
    if (data === null) {
        localStorage.setItem(key, JSON.stringify(data))
    } else {
        localStorage.setItem(key, CryptoJS.AES.encrypt(JSON.stringify(data), cryptoKey))
    }
}

export const getResProfile = () => {
    if (localStorage.getItem(key) !== null) {
        var bytes = CryptoJS.AES.decrypt(localStorage.getItem(key), cryptoKey)
        const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
        return { data }
    } else {
        const data = JSON.parse(localStorage.getItem(key))
        return { data }
    }
}
