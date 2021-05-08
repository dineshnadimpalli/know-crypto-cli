const axios = require('axios')
const colors = require('colors')
const { currencyFormatter } = require('../utils/format')
const { handleApiError } = require('../utils/validate')

class CryptoAPI {
    constructor(apiKey){
        this.apiKey = apiKey,
        this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker'
    }

    async getPrices(coinOpt, currOpt){
        try {            
            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOpt}&convert=${currOpt}`)
            let output = ''
            res.data.forEach(coin=>{
                output += `Coin: ${coin.symbol.yellow} (${coin.name}) | Price: ${currencyFormatter(coin.price, currOpt).green} | Rank: ${coin.rank.blue}\n`
            })
            return output
        }catch(err){
            handleApiError(err)
        }
    }
}

module.exports = CryptoAPI