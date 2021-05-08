const KeyManager = require('../lib/KeyManager.js')
const inquirer = require('inquirer')
const colors = require('colors')
const { isRequired } = require('../utils/validate.js')

const key = {
    async set(){
        const keyManager = new KeyManager()
        const input = await inquirer.prompt(
            [
                {
                    type: 'input',
                    name: 'key',
                    message: 'Enter API key '.green + 'from https://nomics.com',
                    validate: isRequired
                }
            ]
        )
        const key = keyManager.setKey(input.key)
        if(key){
            console.log("API key added".blue)
        }
    },
    show(){
        try{
            const keyManager = new KeyManager()
            const key = keyManager.getKey()
            console.log("Current API key: ", key.yellow)
            return key
        }catch(err){
            console.log(err.message.red)
        }
    },
    remove(){
        try{
            const keyManager = new KeyManager()
            keyManager.removeKey()
            console.log("API key removed")
        }catch(err){
            console.log(err.message.red)
        }
    }
}


module.exports = key