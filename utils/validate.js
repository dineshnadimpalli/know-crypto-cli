// Require fields

const isRequired = input => input === '' ? 'The value is required' : true

const handleApiError = error => {
    const status = error && error.response && error.response.status
    if(status === 401){
        throw new Error('Your API key is invalid - Go to https://nomics.com')
    }else if(status === 404){
        throw new Error('Your API is not responding')
    }else{
        throw new Error('Something is not working')
    }
}

module.exports = {
    isRequired,
    handleApiError
}