const CryptoAPI = require("../lib/CryptoAPI")
const KeyManager = require("../lib/KeyManager")

const check = {
    async price(cmd){
        try{
            const { coin, curr } = cmd
            const keyManager = new KeyManager()
            const key = keyManager.getKey()
            const api = new CryptoAPI(key)
            const priceData = await api.getPrices(coin, curr)
            console.log(priceData)
        }catch(err){
            console.error(err.message.red)
        }
    }
}

module.exports = check