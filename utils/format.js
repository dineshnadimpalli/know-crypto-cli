const currencyFormatter = (price, curr) => new Intl.NumberFormat(
    'en-US',
    {
        style: 'currency',
        currency: curr
    }
).format(price)

module.exports = {
    currencyFormatter
}